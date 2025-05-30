
// Client-side encryption utilities for E2EE
export interface EncryptionResult {
  ciphertext: string;
  iv: string;
  salt: string;
}

export interface DecryptionParams {
  ciphertext: string;
  iv: string;
  salt: string;
  password: string;
}

// Generate a cryptographic key from password using PBKDF2
export const deriveKey = async (password: string, salt: Uint8Array): Promise<CryptoKey> => {
  const encoder = new TextEncoder();
  const passwordBuffer = encoder.encode(password);
  
  // Import the password as a key
  const baseKey = await crypto.subtle.importKey(
    'raw',
    passwordBuffer,
    'PBKDF2',
    false,
    ['deriveKey']
  );
  
  // Derive the actual encryption key
  return crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: salt,
      iterations: 100000, // High iteration count for security
      hash: 'SHA-256'
    },
    baseKey,
    {
      name: 'AES-GCM',
      length: 256
    },
    false,
    ['encrypt', 'decrypt']
  );
};

// Encrypt content with password
export const encryptContent = async (content: string, password: string): Promise<EncryptionResult> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(content);
  
  // Generate random salt and IV
  const salt = crypto.getRandomValues(new Uint8Array(32));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  
  // Derive key from password
  const key = await deriveKey(password, salt);
  
  // Encrypt the content
  const ciphertext = await crypto.subtle.encrypt(
    {
      name: 'AES-GCM',
      iv: iv
    },
    key,
    data
  );
  
  return {
    ciphertext: btoa(String.fromCharCode(...new Uint8Array(ciphertext))),
    iv: btoa(String.fromCharCode(...iv)),
    salt: btoa(String.fromCharCode(...salt))
  };
};

// Decrypt content with password
export const decryptContent = async ({ ciphertext, iv, salt, password }: DecryptionParams): Promise<string> => {
  try {
    // Convert base64 back to Uint8Array
    const ciphertextBytes = new Uint8Array(atob(ciphertext).split('').map(char => char.charCodeAt(0)));
    const ivBytes = new Uint8Array(atob(iv).split('').map(char => char.charCodeAt(0)));
    const saltBytes = new Uint8Array(atob(salt).split('').map(char => char.charCodeAt(0)));
    
    // Derive key from password
    const key = await deriveKey(password, saltBytes);
    
    // Decrypt the content
    const decryptedData = await crypto.subtle.decrypt(
      {
        name: 'AES-GCM',
        iv: ivBytes
      },
      key,
      ciphertextBytes
    );
    
    const decoder = new TextDecoder();
    return decoder.decode(decryptedData);
  } catch (error) {
    throw new Error('Failed to decrypt content. Please check your password.');
  }
};

// Generate a secure random password
export const generateSecurePassword = (): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const randomArray = new Uint8Array(16);
  crypto.getRandomValues(randomArray);
  
  for (let i = 0; i < randomArray.length; i++) {
    result += chars[randomArray[i] % chars.length];
  }
  
  return result;
};
