
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

    // First, get all expired file shares to delete their storage objects
    const { data: expiredFileShares, error: fetchError } = await supabase
      .from('shares')
      .select('file_path')
      .eq('type', 'file')
      .not('file_path', 'is', null)
      .not('expires_at', 'is', null)
      .lt('expires_at', new Date().toISOString())

    if (fetchError) {
      console.error('Error fetching expired file shares:', fetchError)
      throw fetchError
    }

    console.log(`Found ${expiredFileShares?.length || 0} expired file shares`)

    // Delete storage objects for expired file shares
    if (expiredFileShares && expiredFileShares.length > 0) {
      const filePaths = expiredFileShares
        .map(share => share.file_path)
        .filter(path => path !== null)

      if (filePaths.length > 0) {
        const { error: storageError } = await supabase.storage
          .from('shared-files')
          .remove(filePaths)

        if (storageError) {
          console.error('Error deleting storage files:', storageError)
        } else {
          console.log(`Deleted ${filePaths.length} files from storage`)
        }
      }
    }

    // Delete all expired share records
    const { data: deletedShares, error: deleteError } = await supabase
      .from('shares')
      .delete()
      .not('expires_at', 'is', null)
      .lt('expires_at', new Date().toISOString())
      .select('code, type')

    if (deleteError) {
      console.error('Error deleting expired shares:', deleteError)
      throw deleteError
    }

    const deletedCount = deletedShares?.length || 0
    console.log(`Successfully deleted ${deletedCount} expired shares`)

    return new Response(
      JSON.stringify({
        success: true,
        message: `Cleanup completed. Deleted ${deletedCount} expired shares.`,
        deletedCount
      }),
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
