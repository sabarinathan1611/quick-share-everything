import { supabase } from '@/integrations/supabase/client';
import { encryptContent, EncryptionResult } from './encryption';

export interface Share {
  id?: string;
  code: string;
  type: 'clipboard' | 'notepad' | 'file';
  content?: string;
  file_name?: string;
  file_size?: number;
  file_path?: string;
  max_downloads?: number;
  download_count: number;
  created_at: string;
  expires_at?: string;
  is_encrypted?: boolean;
  encrypted_payload?: string;
  recovery_email?: string;
}

export interface CreateShareData {
  type: 'clipboard' | 'notepad';
  content: string;
  password?: string;
  recoveryEmail?: string;
}

const generateUniqueCode = async (): Promise<string> => {
  const { data, error } = await supabase.rpc('generate_unique_code', { code_length: 6 });
  if (error) throw error;
  return data;
};

export const createShare = async (data: CreateShareData): Promise<Share> => {
  const expirationHours = 24; // All content expires after 24 hours
  const expiresAt = new Date();
  expiresAt.setHours(expiresAt.getHours() + expirationHours);

  const code = await generateUniqueCode();

  let shareData: any = {
    code,
    type: data.type,
    expires_at: expiresAt.toISOString(),
  };

  // Handle encryption if password is provided
  if (data.password) {
    const encryptionResult = await encryptContent(data.content, data.password);
    
    // Create the encrypted payload with recovery information
    const encryptedPayload = {
      ...encryptionResult,
      password: data.recoveryEmail ? data.password : undefined // Only store password if recovery email provided
    };
    
    shareData.is_encrypted = true;
    shareData.encrypted_payload = JSON.stringify(encryptedPayload);
    shareData.recovery_email = data.recoveryEmail || null;
    // Don't store plain content when encrypted
  } else {
    shareData.content = data.content;
    shareData.is_encrypted = false;
  }

  const { data: share, error } = await supabase
    .from('shares')
    .insert(shareData)
    .select()
    .single();

  if (error) throw error;
  return share as Share;
};

export const createFileShare = async (
  file: File,
  maxDownloads: number = 10,
  password?: string,
  recoveryEmail?: string
): Promise<Share> => {
  // Upload file to storage
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}.${fileExt}`;
  const filePath = `${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from('shared-files')
    .upload(filePath, file);

  if (uploadError) throw uploadError;

  // Create share record
  const expiresAt = new Date();
  expiresAt.setHours(expiresAt.getHours() + 24); // 24 hours for files

  const code = await generateUniqueCode();

  let shareData: any = {
    code,
    type: 'file',
    file_name: file.name,
    file_size: file.size,
    file_path: filePath,
    max_downloads: maxDownloads,
    expires_at: expiresAt.toISOString(),
  };

  // Handle encryption for files (encrypt filename if password provided)
  if (password) {
    const encryptionResult = await encryptContent(file.name, password);
    
    // Create the encrypted payload with recovery information
    const encryptedPayload = {
      ...encryptionResult,
      password: recoveryEmail ? password : undefined // Only store password if recovery email provided
    };
    
    shareData.is_encrypted = true;
    shareData.encrypted_payload = JSON.stringify(encryptedPayload);
    shareData.recovery_email = recoveryEmail || null;
    // Store encrypted filename
    shareData.file_name = 'encrypted_file';
  } else {
    shareData.is_encrypted = false;
  }

  const { data: share, error } = await supabase
    .from('shares')
    .insert(shareData)
    .select()
    .single();

  if (error) throw error;
  return share as Share;
};

export const getShare = async (code: string): Promise<Share> => {
  const { data: share, error } = await supabase
    .from('shares')
    .select('*')
    .eq('code', code)
    .single();

  if (error) throw error;
  if (!share) throw new Error('Share not found');

  // Check if expired
  if (share.expires_at && new Date(share.expires_at) < new Date()) {
    throw new Error('Share has expired');
  }

  // Check download limit for files
  if (share.type === 'file' && share.max_downloads && share.download_count >= share.max_downloads) {
    throw new Error('Download limit reached');
  }

  return share as Share;
};

export const downloadFile = async (share: Share): Promise<{downloadUrl: string, newDownloadCount: number}> => {
  if (share.type !== 'file' || !share.file_path) {
    throw new Error('Invalid file share');
  }

  // Use RPC for atomic increment to prevent race conditions
  const { data: newDownloadCount, error: rpcError } = await supabase.rpc('increment_download_count' as any, {
    share_code: share.code,
  });

  if (rpcError) {
    console.error("Failed to increment download count", rpcError);
    throw new Error("Could not update download count.");
  }

  // Get download URL
  const { data: urlData } = await supabase.storage
    .from('shared-files')
    .createSignedUrl(share.file_path, 300); // 5 minute expiry

  if (!urlData?.signedUrl) {
    throw new Error('Failed to generate download URL');
  }

  return { downloadUrl: urlData.signedUrl, newDownloadCount: newDownloadCount as number };
};

export const deleteShare = async (share: Share) => {
  if (share.type === 'file' && share.file_path) {
    await supabase.storage.from('shared-files').remove([share.file_path]);
  }
  await supabase.from('shares').delete().eq('code', share.code);
};
