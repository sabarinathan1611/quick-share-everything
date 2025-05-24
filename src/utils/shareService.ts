
import { supabase } from '@/integrations/supabase/client';

export type ShareType = 'clipboard' | 'notepad' | 'file';

export interface Share {
  code: string;
  type: ShareType;
  content?: string;
  file_name?: string;
  file_path?: string;
  file_size?: number;
  created_at: string;
  expires_at?: string;
  download_count: number;
  max_downloads?: number;
}

export const createClipboardShare = async (content: string): Promise<string> => {
  const { generateCode } = await import('./codeGenerator');
  const code = await generateCode();
  
  const expiresAt = new Date();
  expiresAt.setHours(expiresAt.getHours() + 24); // 24 hour expiry
  
  const { error } = await supabase
    .from('shares')
    .insert({
      code,
      type: 'clipboard',
      content,
      expires_at: expiresAt.toISOString()
    });
  
  if (error) throw error;
  return code;
};

export const createNotepadShare = async (content: string): Promise<string> => {
  const { generateCode } = await import('./codeGenerator');
  const code = await generateCode();
  
  const { error } = await supabase
    .from('shares')
    .insert({
      code,
      type: 'notepad',
      content
      // No expiry for notepad
    });
  
  if (error) throw error;
  return code;
};

export const createFileShare = async (file: File): Promise<string> => {
  const { generateCode } = await import('./codeGenerator');
  const code = await generateCode();
  
  // Upload file to Supabase Storage
  const fileExt = file.name.split('.').pop();
  const fileName = `${code}.${fileExt}`;
  const filePath = `files/${fileName}`;
  
  const { error: uploadError } = await supabase.storage
    .from('shared-files')
    .upload(filePath, file);
  
  if (uploadError) throw uploadError;
  
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 7); // 7 day expiry
  
  const { error } = await supabase
    .from('shares')
    .insert({
      code,
      type: 'file',
      file_name: file.name,
      file_path: filePath,
      file_size: file.size,
      expires_at: expiresAt.toISOString(),
      max_downloads: 100
    });
  
  if (error) throw error;
  return code;
};

export const getShareByCode = async (code: string): Promise<Share | null> => {
  const { data, error } = await supabase
    .from('shares')
    .select('*')
    .eq('code', code)
    .single();
  
  if (error) {
    if (error.code === 'PGRST116') {
      return null; // Not found
    }
    throw error;
  }
  
  // Check if expired
  if (data.expires_at && new Date(data.expires_at) < new Date()) {
    return null;
  }
  
  return data;
};

export const downloadFile = async (share: Share): Promise<string> => {
  if (!share.file_path) throw new Error('No file path found');
  
  // Increment download count
  await supabase
    .from('shares')
    .update({ download_count: share.download_count + 1 })
    .eq('code', share.code);
  
  // Get download URL
  const { data } = await supabase.storage
    .from('shared-files')
    .createSignedUrl(share.file_path, 300); // 5 minute expiry
  
  if (!data?.signedUrl) throw new Error('Failed to generate download URL');
  
  return data.signedUrl;
};
