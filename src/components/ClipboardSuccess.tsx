
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ClipboardSuccessProps {
  shareCode: string;
  isEncrypted: boolean;
  recoveryEmail?: string;
  onReset: () => void;
}

const ClipboardSuccess = ({ shareCode, isEncrypted, recoveryEmail, onReset }: ClipboardSuccessProps) => {
  const { toast } = useToast();

  const handleCopyCode = () => {
    navigator.clipboard.writeText(shareCode);
    toast({
      title: "Copied!",
      description: "Share code copied to clipboard",
    });
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-green-600">
          {isEncrypted ? '🔒 Encrypted ' : ''}Anonymous Clipboard Created!
        </CardTitle>
        <CardDescription className="text-center">
          Your text has been shared successfully{isEncrypted ? ' and encrypted' : ''}. Use the 4-digit code below to access it.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <div className="text-3xl font-mono font-bold text-gray-900 mb-2">
            {shareCode}
          </div>
          <Button onClick={handleCopyCode} variant="outline">
            <Copy className="w-4 h-4 mr-2" />
            Copy Code
          </Button>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">How to access:</h3>
          <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600">
            <li>Share the code <strong>{shareCode}</strong> with anyone who needs access</li>
            {isEncrypted && (
              <li>Also share the password you set for decryption</li>
            )}
            <li>They can enter the code on the homepage to retrieve the content</li>
            <li>Content will automatically expire after 24 hours</li>
          </ol>
        </div>

        {isEncrypted && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">🔒 Encryption Active</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Content encrypted with AES-256-GCM encryption</li>
              <li>• Encryption happens in your browser before upload</li>
              <li>• Password required for decryption</li>
              {recoveryEmail && <li>• Recovery email: {recoveryEmail}</li>}
            </ul>
          </div>
        )}

        <Button onClick={onReset} variant="outline" className="w-full">
          Create Another Share
        </Button>
      </CardContent>
    </Card>
  );
};

export default ClipboardSuccess;
