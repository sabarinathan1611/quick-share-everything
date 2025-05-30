
import { supabase } from '@/integrations/supabase/client';

export interface RecoveryEmailData {
  email: string;
  shareCode: string;
  password: string;
}

export interface ShareNotificationData {
  email: string;
  shareCode: string;
  shareType: 'clipboard' | 'notepad' | 'file';
  isEncrypted: boolean;
  fileName?: string;
}

export const sendRecoveryEmail = async (data: RecoveryEmailData): Promise<void> => {
  const { error } = await supabase.functions.invoke('send-recovery-email', {
    body: data
  });

  if (error) {
    throw new Error(`Failed to send recovery email: ${error.message}`);
  }
};

export const sendShareNotification = async (data: ShareNotificationData): Promise<void> => {
  const { error } = await supabase.functions.invoke('send-share-notification', {
    body: data
  });

  if (error) {
    throw new Error(`Failed to send share notification: ${error.message}`);
  }
};
