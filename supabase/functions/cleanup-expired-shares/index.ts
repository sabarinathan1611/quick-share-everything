
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

    // Get all shares that should be deleted
    const { data: expiredShares, error: fetchError } = await supabase
      .from('shares')
      .select('code, type, file_path, file_size, created_at, expires_at, download_count, max_downloads')
      .or(
        `expires_at.lt.${new Date().toISOString()},` +
        `and(type.eq.file,download_count.gte.max_downloads),` +
        `created_at.lt.${new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()}`
      )

    if (fetchError) {
      console.error('Error fetching expired shares:', fetchError)
      throw fetchError
    }

    console.log(`Found ${expiredShares?.length || 0} shares to cleanup`)

    let deletedCount = 0
    let storageFilesDeleted = 0
    let totalSizeFreed = 0

    if (expiredShares && expiredShares.length > 0) {
      // Process file deletions
      const fileShares = expiredShares.filter(share => share.type === 'file' && share.file_path)
      
      if (fileShares.length > 0) {
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
            console.log(`Deleted ${storageFilesDeleted} files from storage, freed ${totalSizeFreed} bytes`)
          }
        }
      }

      // Log cleanup activities for each share
      for (const share of expiredShares) {
        let reason = ''
        const now = new Date()
        const created = new Date(share.created_at)
        const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000)

        if (share.expires_at && new Date(share.expires_at) < now) {
          reason = 'expired'
        } else if (share.type === 'file' && share.max_downloads && share.download_count >= share.max_downloads) {
          reason = 'download_limit_reached'
        } else if (created < twentyFourHoursAgo) {
          reason = 'auto_cleanup_24h'
        }

        if (reason) {
          await supabase.rpc('log_cleanup', {
            p_share_id: share.code,
            p_share_type: share.type,
            p_cleanup_reason: reason,
            p_file_size: share.file_size || null
          })
        }
      }

      // Delete share records
      const shareCodes = expiredShares.map(share => share.code)
      const { error: deleteError } = await supabase
        .from('shares')
        .delete()
        .in('code', shareCodes)

      if (deleteError) {
        console.error('Error deleting expired shares:', deleteError)
        throw deleteError
      }

      deletedCount = expiredShares.length
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
