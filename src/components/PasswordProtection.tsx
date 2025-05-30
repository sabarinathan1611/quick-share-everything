
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Lock, Eye, EyeOff, RefreshCw, Mail } from 'lucide-react';
import { generateSecurePassword } from '@/utils/encryption';

interface PasswordProtectionProps {
  isEnabled: boolean;
  onToggle: (enabled: boolean) => void;
  password: string;
  onPasswordChange: (password: string) => void;
  recoveryEmail: string;
  onRecoveryEmailChange: (email: string) => void;
  showAdvanced?: boolean;
}

const PasswordProtection: React.FC<PasswordProtectionProps> = ({
  isEnabled,
  onToggle,
  password,
  onPasswordChange,
  recoveryEmail,
  onRecoveryEmailChange,
  showAdvanced = true
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleGeneratePassword = () => {
    const newPassword = generateSecurePassword();
    onPasswordChange(newPassword);
  };

  return (
    <Card className="border-blue-200 bg-blue-50/50">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center space-x-2 text-lg">
          <Lock className="w-5 h-5 text-blue-600" />
          <span>End-to-End Encryption</span>
        </CardTitle>
        <CardDescription>
          Protect your content with client-side encryption. Only those with the password can access it.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="enable-encryption"
            checked={isEnabled}
            onCheckedChange={onToggle}
          />
          <Label htmlFor="enable-encryption" className="text-sm font-medium">
            Enable password protection
          </Label>
        </div>

        {isEnabled && (
          <div className="space-y-4 pt-2">
            <div>
              <Label htmlFor="password" className="text-sm font-medium mb-2 block">
                Password
              </Label>
              <div className="flex space-x-2">
                <div className="relative flex-1">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter a strong password"
                    value={password}
                    onChange={(e) => onPasswordChange(e.target.value)}
                    className="pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={handleGeneratePassword}
                  className="px-3"
                >
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Use a strong password. Lost passwords cannot be recovered without the recovery email.
              </p>
            </div>

            {showAdvanced && (
              <div>
                <Label htmlFor="recovery-email" className="text-sm font-medium mb-2 block">
                  Recovery Email (Optional)
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="recovery-email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={recoveryEmail}
                    onChange={(e) => onRecoveryEmailChange(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  We'll send password recovery information to this email if provided.
                </p>
              </div>
            )}

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <div className="flex items-start space-x-2">
                <Lock className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-amber-800">
                  <p className="font-medium mb-1">Important Security Notes:</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Content is encrypted on your device before being sent to our servers</li>
                    <li>We cannot recover your content if you lose the password</li>
                    <li>Anyone with the password can decrypt and view the content</li>
                    <li>Recovery email is optional and only used for password hints</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PasswordProtection;
