
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock, Eye, EyeOff, AlertCircle, Mail, Send, CheckCircle, XCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { sendRecoveryEmail } from '@/utils/emailService';

interface PasswordInputProps {
  onPasswordSubmit: (password: string) => void;
  isLoading?: boolean;
  error?: string;
  onCancel?: () => void;
  shareCode: string;
  recoveryEmail?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  onPasswordSubmit,
  isLoading = false,
  error,
  onCancel,
  shareCode,
  recoveryEmail
}) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showRecovery, setShowRecovery] = useState(false);
  const [recoveryEmailInput, setRecoveryEmailInput] = useState('');
  const [isRecoveryLoading, setIsRecoveryLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim()) {
      onPasswordSubmit(password.trim());
    }
  };

  const handleRecoveryRequest = async () => {
    if (!recoveryEmailInput.trim()) {
      toast({
        title: "Error",
        description: "Please enter your recovery email address",
        variant: "destructive"
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(recoveryEmailInput.trim())) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    setIsRecoveryLoading(true);
    try {
      const result = await sendRecoveryEmail({
        email: recoveryEmailInput.trim(),
        shareCode: shareCode
      });

      if (result.success) {
        toast({
          title: "Recovery Email Sent",
          description: "Check your inbox for recovery information.",
          action: <CheckCircle className="w-4 h-4 text-green-600" />
        });
        setShowRecovery(false);
        setRecoveryEmailInput('');
      } else {
        toast({
          title: "Recovery Failed",
          description: result.message || "We couldn't find any content linked to this email.",
          variant: "destructive"
        });
      }
    } catch (error: any) {
      console.error('Recovery request failed:', error);
      toast({
        title: "Unable to Send Email",
        description: "Please try again later or contact support if the problem persists.",
        variant: "destructive"
      });
    } finally {
      setIsRecoveryLoading(false);
    }
  };

  return (
    <Card className="max-w-md mx-auto border-amber-200 bg-amber-50/50">
      <CardHeader className="text-center pb-3">
        <CardTitle className="flex items-center justify-center space-x-2 text-lg">
          <Lock className="w-5 h-5 text-amber-600" />
          <span>Password Protected Content</span>
        </CardTitle>
        <CardDescription>
          This content is encrypted. Enter the password to decrypt and view it.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!showRecovery ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="decrypt-password" className="text-sm font-medium mb-2 block">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="decrypt-password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter password to decrypt content"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pr-10"
                  disabled={isLoading}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            {error && (
              <div className="flex items-center space-x-2 text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <p className="text-sm">{error}</p>
              </div>
            )}

            <div className="flex space-x-2">
              <Button 
                type="submit" 
                className="flex-1" 
                disabled={!password.trim() || isLoading}
              >
                {isLoading ? 'Decrypting...' : 'Decrypt & View Content'}
              </Button>
              {onCancel && (
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={onCancel}
                  disabled={isLoading}
                >
                  Cancel
                </Button>
              )}
            </div>

            <div className="text-center">
              <Button
                type="button"
                variant="link"
                size="sm"
                onClick={() => setShowRecovery(true)}
                className="text-xs text-blue-600 hover:text-blue-800"
              >
                <Mail className="w-3 h-3 mr-1" />
                Forgot password? Request recovery
              </Button>
            </div>
          </form>
        ) : (
          <div className="space-y-4">
            <div>
              <Label htmlFor="recovery-email" className="text-sm font-medium mb-2 block">
                Recovery Email Address
              </Label>
              <Input
                id="recovery-email"
                type="email"
                placeholder="Enter your recovery email"
                value={recoveryEmailInput}
                onChange={(e) => setRecoveryEmailInput(e.target.value)}
                disabled={isRecoveryLoading}
              />
              <p className="text-xs text-gray-500 mt-1">
                Enter the email address you provided when creating this share.
              </p>
            </div>

            <div className="flex space-x-2">
              <Button 
                onClick={handleRecoveryRequest}
                className="flex-1"
                disabled={!recoveryEmailInput.trim() || isRecoveryLoading}
              >
                <Send className="w-4 h-4 mr-2" />
                {isRecoveryLoading ? 'Sending...' : 'Send Recovery'}
              </Button>
              <Button 
                variant="outline"
                onClick={() => setShowRecovery(false)}
                disabled={isRecoveryLoading}
              >
                Back
              </Button>
            </div>
          </div>
        )}

        <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
          <div className="flex items-start space-x-2">
            <Lock className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-blue-800">
              <p className="font-medium mb-1">Secure Decryption</p>
              <p className="text-xs">
                Decryption happens entirely in your browser. The password never leaves your device.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PasswordInput;
