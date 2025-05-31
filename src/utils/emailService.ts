
import { supabase } from '@/integrations/supabase/client';

export interface RecoveryEmailData {
  email: string;
  shareCode: string;
}

export const sendRecoveryEmail = async (data: RecoveryEmailData): Promise<{ success: boolean; message: string }> => {
  try {
    console.log('Requesting recovery email for:', data.email, 'Share code:', data.shareCode);
    
    const { data: result, error } = await supabase.functions.invoke('send-recovery-email', {
      body: data
    });

    if (error) {
      console.error('Recovery email error:', error);
      throw new Error(`Failed to send recovery email: ${error.message}`);
    }

    return result || { success: true, message: 'Recovery email sent successfully' };
  } catch (error) {
    console.error('Recovery email service error:', error);
    throw error;
  }
};
