
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

    console.log('Starting cleanup of expired shares...')

    const now = new Date()
    const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000)

    console.log(`Current time: ${now.toISOString()}`)
    console.log(`24 hours ago: ${twentyFourHoursAgo.toISOString()}`)

    // First, get all shares to see what we're working with
    const { data: allShares, error: getAllError } = await supabase
      .from('shares')
      .select('code, type, file_path, file_size, created_at, expires_at, download_count, max_downloads')

    if (getAllError) {
      console.error('Error fetching all shares:', getAllError)
      throw getAllError
    }

    console.log(`Total shares in database: ${allShares?.length || 0}`)

    if (allShares) {
      for (const share of allShares) {
        console.log(`Share ${share.code}: type=${share.type}, created=${share.created_at}, expires=${share.expires_at}, downloads=${share.download_count}/${share.max_downloads}`)
      }
    }

    // Find expired shares using multiple criteria
    const expiredShares = []

    // 1. Shares past their expiry time
    const { data: expiredByTime, error: expiredError } = await supabase
      .from('shares')
      .select('code, type, file_path, file_size, created_at, expires_at, download_count, max_downloads')
      .not('expires_at', 'is', null)
      .lt('expires_at', now.toISOString())

    if (expiredError) {
      console.error('Error fetching expired shares by time:', expiredError)
    } else {
      console.log(`Found ${expiredByTime?.length || 0} shares expired by time`)
      if (expiredByTime) {
        expiredShares.push(...expiredByTime)
      }
    }

    // 2. File shares that have reached download limit
    const { data: fileShares, error: fileError } = await supabase
      .from('shares')
      .select('code, type, file_path, file_size, created_at, expires_at, download_count, max_downloads')
      .eq('type', 'file')
      .not('max_downloads', 'is', null)

    if (fileError) {
      console.error('Error fetching file shares:', fileError)
    } else {
      console.log(`Found ${fileShares?.length || 0} file shares with download limits`)
      if (fileShares) {
        const downloadLimitReached = fileShares.filter(share => 
          share.max_downloads && share.download_count >= share.max_downloads
        )
        console.log(`Found ${downloadLimitReached.length} shares that reached download limit`)
        expiredShares.push(...downloadLimitReached)
      }
    }

    // 3. Shares older than 24 hours (auto-cleanup rule)
    const { data: expiredByAge, error: ageError } = await supabase
      .from('shares')
      .select('code, type, file_path, file_size, created_at, expires_at, download_count, max_downloads')
      .lt('created_at', twentyFourHoursAgo.toISOString())

    if (ageError) {
      console.error('Error fetching shares by age:', ageError)
    } else {
      console.log(`Found ${expiredByAge?.length || 0} shares older than 24 hours`)
      if (expiredByAge) {
        expiredShares.push(...expiredByAge)
      }
    }

    // Remove duplicates based on code
    const uniqueExpiredShares = expiredShares.filter((share, index, self) =>
      index === self.findIndex(s => s.code === share.code)
    )

    console.log(`Total unique expired shares to cleanup: ${uniqueExpiredShares.length}`)

    let deletedCount = 0
    let storageFilesDeleted = 0
    let totalSizeFreed = 0

    if (uniqueExpiredShares.length > 0) {
      // Process file deletions from storage
      const fileShares = uniqueExpiredShares.filter(share => share.type === 'file' && share.file_path)
      
      if (fileShares.length > 0) {
        console.log(`Attempting to delete ${fileShares.length} files from storage...`)
        const filePaths = fileShares.map(share => share.file_path).filter(path => path !== null)

        if (filePaths.length > 0) {
          const { error: storageError } = await supabase.storage
            .from('shared-files')
            .remove(filePaths)

          if (storageError) {
            console.error('Error deleting storage files:', storageError)
          } else {
            storageFilesDeleted = filePaths.length
            totalSizeFreed = fileShares.reduce((sum, share) => sum + (share.file_size || 0), 0)
            console.log(`Successfully deleted ${storageFilesDeleted} files from storage, freed ${totalSizeFreed} bytes`)
          }
        }
      }

      // Log cleanup activities for each share
      for (const share of uniqueExpiredShares) {
        let reason = 'unknown'
        const shareCreated = new Date(share.created_at)
        const shareExpires = share.expires_at ? new Date(share.expires_at) : null

        if (shareExpires && shareExpires < now) {
          reason = 'expired'
        } else if (share.type === 'file' && share.max_downloads && share.download_count >= share.max_downloads) {
          reason = 'download_limit_reached'
        } else if (shareCreated < twentyFourHoursAgo) {
          reason = 'auto_cleanup_24h'
        }

        console.log(`Logging cleanup for share ${share.code} - reason: ${reason}`)
        
        const { error: logError } = await supabase.rpc('log_cleanup', {
          p_share_id: share.code,
          p_share_type: share.type,
          p_cleanup_reason: reason,
          p_file_size: share.file_size || null
        })

        if (logError) {
          console.error(`Error logging cleanup for share ${share.code}:`, logError)
        }
      }

      // Delete share records from database
      const shareCodes = uniqueExpiredShares.map(share => share.code)
      console.log(`Deleting ${shareCodes.length} share records from database...`)
      
      const { error: deleteError } = await supabase
        .from('shares')
        .delete()
        .in('code', shareCodes)

      if (deleteError) {
        console.error('Error deleting expired shares from database:', deleteError)
        throw deleteError
      }

      deletedCount = uniqueExpiredShares.length
      console.log(`Successfully deleted ${deletedCount} share records from database`)
    } else {
      console.log('No expired shares found to cleanup')
    }

    const response = {
      success: true,
      message: `Cleanup completed. Deleted ${deletedCount} expired shares.`,
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

    console.log('Cleanup completed successfully:', response.details)

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
