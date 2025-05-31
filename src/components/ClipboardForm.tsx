
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Clipboard as ClipboardIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { createShare } from '@/utils/shareService';
import PasswordProtection from '@/components/PasswordProtection';

interface ClipboardFormProps {
  onSuccess: (shareCode: string, isEncrypted: boolean, recoveryEmail?: string) => void;
}

const ClipboardForm = ({ onSuccess }: ClipboardFormProps) => {
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isEncryptionEnabled, setIsEncryptionEnabled] = useState(false);
  const [password, setPassword] = useState('');
  const [recoveryEmail, setRecoveryEmail] = useState('');
  const { toast } = useToast();

  const handleShare = async () => {
    if (!text.trim()) {
      toast({
        title: "Error",
        description: "Please enter some text to share",
        variant: "destructive"
      });
      return;
    }

    if (isEncryptionEnabled && !password.trim()) {
      toast({
        title: "Error",
        description: "Please enter a password for encryption",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    try {
      const share = await createShare({
        type: 'clipboard',
        content: text,
        password: isEncryptionEnabled ? password : undefined,
        recoveryEmail: isEncryptionEnabled ? recoveryEmail : undefined
      });

      onSuccess(share.code, isEncryptionEnabled, recoveryEmail);
      toast({
        title: "Success!",
        description: `Your clipboard is ready! Code: ${share.code}`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create clipboard share",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <ClipboardIcon className="w-5 h-5" />
            <span>Create Anonymous Clipboard Share</span>
          </CardTitle>
          <CardDescription>
            Paste your text below and we'll generate a secure 4-digit sharing code. 
            Content expires after 24 hours. No login required.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="Paste your text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="min-h-[200px] resize-y"
            maxLength={100000}
          />
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>{text.length} / 100,000 characters</span>
            <span>Expires in 24 hours</span>
          </div>
        </CardContent>
      </Card>

      <PasswordProtection
        isEnabled={isEncryptionEnabled}
        onToggle={setIsEncryptionEnabled}
        password={password}
        onPasswordChange={setPassword}
        recoveryEmail={recoveryEmail}
        onRecoveryEmailChange={setRecoveryEmail}
        notificationEmail=""
        onNotificationEmailChange={() => {}}
        enableNotifications={false}
        onNotificationsToggle={() => {}}
        showAdvanced={true}
      />

      <Button 
        onClick={handleShare} 
        disabled={!text.trim() || isLoading}
        className="w-full"
      >
        {isLoading ? 'Creating Share...' : 'Generate 4-Digit Code'}
      </Button>
    </div>
  );
};

export default ClipboardForm;
