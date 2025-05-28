
import { supabase } from '@/integrations/supabase/client';

export interface Share {
  id: string;
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
}

export const createShare = async (data: {
  type: 'clipboard' | 'notepad';
  content: string;
}): Promise<Share> => {
  const expirationHours = data.type === 'clipboard' ? 24 : 168; // 24h for clipboard, 7 days for notepad
  const expiresAt = new Date();
  expiresAt.setHours(expiresAt.getHours() + expirationHours);

  const { data: share, error } = await supabase
    .from('shares')
    .insert({
      type: data.type,
      content: data.content,
      expires_at: expiresAt.toISOString(),
    })
    .select()
    .single();

  if (error) throw error;
  return share;
};

export const createFileShare = async (
  file: File,
  maxDownloads: number = 10
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
  expiresAt.setHours(expiresAt.getHours() + 48); // 48 hours for files

  const { data: share, error } = await supabase
    .from('shares')
    .insert({
      type: 'file',
      file_name: file.name,
      file_size: file.size,
      file_path: filePath,
      max_downloads: maxDownloads,
      expires_at: expiresAt.toISOString(),
    })
    .select()
    .single();

  if (error) throw error;
  return share;
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

  return share;
};

export const downloadFile = async (share: Share): Promise<string> => {
  if (share.type !== 'file' || !share.file_path) {
    throw new Error('Invalid file share');
  }

  // Increment download count
  await supabase
    .from('shares')
    .update({ download_count: share.download_count + 1 })
    .eq('id', share.id);

  // Get download URL
  const { data } = await supabase.storage
    .from('shared-files')
    .createSignedUrl(share.file_path, 300); // 5 minute expiry

  if (!data?.signedUrl) {
    throw new Error('Failed to generate download URL');
  }

  return data.signedUrl;
};
