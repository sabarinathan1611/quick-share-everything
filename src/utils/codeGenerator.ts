
export const generateCode = async (): Promise<string> => {
  const { supabase } = await import('@/integrations/supabase/client');
  
  // Try to call the database function first
  try {
    const { data, error } = await supabase.rpc('generate_unique_code', { code_length: 4 });
    if (!error && data) {
      return data;
    }
  } catch (err) {
    console.log('Database function not available, generating code locally');
  }
  
  // Fallback to local generation with collision checking
  let attempts = 0;
  const maxAttempts = 10;
  
  while (attempts < maxAttempts) {
    const code = Math.floor(1000 + Math.random() * 9000).toString();
    
    const { data, error } = await supabase
      .from('shares')
      .select('code')
      .eq('code', code)
      .single();
    
    if (error && error.code === 'PGRST116') {
      // No rows found, code is unique
      return code;
    }
    
    attempts++;
  }
  
  // If we can't find a unique code, use timestamp-based fallback
  return Date.now().toString().slice(-6);
};
