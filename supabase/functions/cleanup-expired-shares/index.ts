
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    console.log('Starting smart cleanup of expired shares...')

    const now = new Date().toISOString()
    const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()

    // Get all shares that should be deleted with separate queries for clarity
    console.log('Fetching expired shares...')
    
    // 1. Get shares that are past expiry time
    const { data: expiredByTime, error: expiredError } = await supabase
      .from('shares')
      .select('code, type, file_path, file_size, created_at, expires_at, download_count, max_downloads')
      .lt('expires_at', now)

    if (expiredError) {
      console.error('Error fetching expired shares by time:', expiredError)
      throw expiredError
    }

    // 2. Get file shares that have reached download limit
    const { data: expiredByDownloads, error: downloadError } = await supabase
      .from('shares')
      .select('code, type, file_path, file_size, created_at, expires_at, download_count, max_downloads')
      .eq('type', 'file')
      .not('max_downloads', 'is', null)
      .gte('download_count', supabase.rpc('max_downloads'))

    // Handle the download limit check differently
    const { data: fileShares, error: fileError } = await supabase
      .from('shares')
      .select('code, type, file_path, file_size, created_at, expires_at, download_count, max_downloads')
      .eq('type', 'file')
      .not('max_downloads', 'is', null)

    let downloadLimitReached = []
    if (fileShares && !fileError) {
      downloadLimitReached = fileShares.filter(share => 
        share.max_downloads && share.download_count >= share.max_downloads
      )
    }

    // 3. Get shares older than 24 hours (auto-cleanup rule)
    const { data: expiredByAge, error: ageError } = await supabase
      .from('shares')
      .select('code, type, file_path, file_size, created_at, expires_at, download_count, max_downloads')
      .lt('created_at', twentyFourHoursAgo)

    if (ageError) {
      console.error('Error fetching shares by age:', ageError)
      throw ageError
    }

    // Combine all expired shares and remove duplicates
    const allExpiredShares = [
      ...(expiredByTime || []),
      ...downloadLimitReached,
      ...(expiredByAge || [])
    ]

    // Remove duplicates based on code
    const uniqueExpiredShares = allExpiredShares.filter((share, index, self) =>
      index === self.findIndex(s => s.code === share.code)
    )

    console.log(`Found ${uniqueExpiredShares.length} shares to cleanup`)

    let deletedCount = 0
    let storageFilesDeleted = 0
    let totalSizeFreed = 0

    if (uniqueExpiredShares.length > 0) {
      // Process file deletions
      const fileShares = uniqueExpiredShares.filter(share => share.type === 'file' && share.file_path)
      
      if (fileShares.length > 0) {
        const filePaths = fileShares.map(share => share.file_path).filter(path => path !== null)

        if (filePaths.length > 0) {
          console.log(`Deleting ${filePaths.length} files from storage...`)
          const { error: storageError } = await supabase.storage
            .from('shared-files')
            .remove(filePaths)

          if (storageError) {
            console.error('Error deleting storage files:', storageError)
          } else {
            storageFilesDeleted = filePaths.length
            totalSizeFreed = fileShares.reduce((sum, share) => sum + (share.file_size || 0), 0)
            console.log(`Deleted ${storageFilesDeleted} files from storage, freed ${totalSizeFreed} bytes`)
          }
        }
      }

      // Log cleanup activities for each share
      for (const share of uniqueExpiredShares) {
        let reason = ''
        const nowTime = new Date()
        const created = new Date(share.created_at)
        const twentyFourHoursAgoTime = new Date(nowTime.getTime() - 24 * 60 * 60 * 1000)

        if (share.expires_at && new Date(share.expires_at) < nowTime) {
          reason = 'expired'
        } else if (share.type === 'file' && share.max_downloads && share.download_count >= share.max_downloads) {
          reason = 'download_limit_reached'
        } else if (created < twentyFourHoursAgoTime) {
          reason = 'auto_cleanup_24h'
        }

        if (reason) {
          console.log(`Logging cleanup for share ${share.code} - reason: ${reason}`)
          await supabase.rpc('log_cleanup', {
            p_share_id: share.code,
            p_share_type: share.type,
            p_cleanup_reason: reason,
            p_file_size: share.file_size || null
          })
        }
      }

      // Delete share records
      const shareCodes = uniqueExpiredShares.map(share => share.code)
      console.log(`Deleting ${shareCodes.length} share records...`)
      
      const { error: deleteError } = await supabase
        .from('shares')
        .delete()
        .in('code', shareCodes)

      if (deleteError) {
        console.error('Error deleting expired shares:', deleteError)
        throw deleteError
      }

      deletedCount = uniqueExpiredShares.length
    }

    const response = {
      success: true,
      message: `Smart cleanup completed. Deleted ${deletedCount} expired shares.`,
      details: {
        totalSharesDeleted: deletedCount,
        storageFilesDeleted,
        totalSizeFreed,
        cleanupRules: [
          'Auto-delete all data after 24 hours',
          'Delete files when download limit reached',
          'Delete shares when expiry time reached'
        ]
      }
    }

    console.log('Cleanup completed:', response.details)

    return new Response(
      JSON.stringify(response),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )

  } catch (error) {
    console.error('Cleanup error:', error)
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    )
  }
})
