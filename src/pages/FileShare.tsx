import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Copy, Upload, FileX, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { createFileShare } from '@/utils/shareService';
import AdUnit from '@/components/AdUnit';
import PasswordProtection from '@/components/PasswordProtection';
import DataRetentionInfo from '@/components/DataRetentionInfo';

const FileShare = () => {
  const [file, setFile] = useState<File | null>(null);
  const [maxDownloads, setMaxDownloads] = useState(10);
  const [shareCode, setShareCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isEncryptionEnabled, setIsEncryptionEnabled] = useState(false);
  const [password, setPassword] = useState('');
  const [recoveryEmail, setRecoveryEmail] = useState('');
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size > 50 * 1024 * 1024) { // 50MB limit
        toast({
          title: "File too large",
          description: "Please select a file smaller than 50MB",
          variant: "destructive"
        });
        return;
      }
      setFile(selectedFile);
    }
  };

  const handleShare = async () => {
    if (!file) {
      toast({
        title: "Error",
        description: "Please select a file to share",
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
      const share = await createFileShare(
        file, 
        maxDownloads,
        isEncryptionEnabled ? password : undefined,
        isEncryptionEnabled ? recoveryEmail : undefined
      );

      setShareCode(share.code);
      toast({
        title: "Success!",
        description: `Your file is ready! Code: ${share.code}`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to upload file",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(shareCode);
    toast({
      title: "Copied!",
      description: "Share code copied to clipboard",
    });
  };

  const handleReset = () => {
    setFile(null);
    setShareCode('');
    setMaxDownloads(10);
    setIsEncryptionEnabled(false);
    setPassword('');
    setRecoveryEmail('');
  };

  const formatFileSize = (bytes: number) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    if (bytes === 0) return '0 Bytes';
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <div className="min-h-screen bg-sky-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Anonymous File Sharing</h1>
          <p className="text-xl text-gray-600">
            Upload and share files securely with 4-digit codes. Anonymous, fast, and secure file share solution.
          </p>
        </div>

        {/* Ad Unit */}
        <div className="mb-12">
          <AdUnit adSlot="1234567816" adFormat="horizontal" className="text-center" />
        </div>

        {!shareCode ? (
          <div className="max-w-2xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Upload className="w-5 h-5" />
                  <span>Upload File Anonymously</span>
                </CardTitle>
                <CardDescription>
                  Share files up to 50MB with automatic deletion after 24 hours 
                  or when download limit is reached. No login required.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Select File</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                      id="file-upload"
                      accept="*/*"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      {file ? (
                        <div className="space-y-2">
                          <div className="flex items-center justify-center text-green-600">
                            <Upload className="w-8 h-8" />
                          </div>
                          <div>
                            <p className="font-medium">{file.name}</p>
                            <p className="text-sm text-gray-500">{formatFileSize(file.size)}</p>
                          </div>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={(e) => {
                              e.preventDefault();
                              setFile(null);
                            }}
                          >
                            <FileX className="w-4 h-4 mr-2" />
                            Remove
                          </Button>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <Upload className="w-12 h-12 text-gray-400 mx-auto" />
                          <div>
                            <p className="text-lg font-medium">Click to upload a file</p>
                            <p className="text-sm text-gray-500">Maximum file size: 50MB</p>
                          </div>
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Download Limit</label>
                  <Input
                    type="number"
                    min="1"
                    max="100"
                    value={maxDownloads}
                    onChange={(e) => setMaxDownloads(parseInt(e.target.value) || 1)}
                    className="w-32"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    File will be deleted after this many downloads
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Smart Data Management</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Files automatically deleted after 24 hours</li>
                    <li>• Immediate deletion when download limit reached</li>
                    <li>• All files scanned for malware</li>
                    <li>• No personal information stored</li>
                    <li>• Receive a simple 4-digit sharing code</li>
                  </ul>
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
              showAdvanced={false}
            />

            <Button 
              onClick={handleShare} 
              disabled={!file || isLoading}
              className="w-full"
            >
              {isLoading ? 'Uploading...' : 'Upload & Generate 4-Digit Code'}
            </Button>
          </div>
        ) : (
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-green-600">
                {isEncryptionEnabled ? '🔒 Encrypted ' : ''}Anonymous File Share Created!
              </CardTitle>
              <CardDescription className="text-center">
                Your file has been uploaded successfully{isEncryptionEnabled ? ' and encrypted' : ''}. Use the 4-digit code below to share access.
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

              {file && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">File Details:</h4>
                  <div className="text-sm space-y-1">
                    <p><strong>Name:</strong> {file.name}</p>
                    <p><strong>Size:</strong> {formatFileSize(file.size)}</p>
                    <p><strong>Download Limit:</strong> {maxDownloads}</p>
                    <p><strong>Auto-Delete:</strong> 24 hours or after {maxDownloads} downloads</p>
                  </div>
                </div>
              )}
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">How to access:</h3>
                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600">
                  <li>Share the code <strong>{shareCode}</strong> with anyone who needs the file</li>
                  {isEncryptionEnabled && (
                    <li>Also share the password you set for decryption</li>
                  )}
                  <li>They can enter the code on the homepage to download the file</li>
                  <li>File will be automatically deleted after {maxDownloads} downloads or 24 hours</li>
                </ol>
              </div>

              {isEncryptionEnabled && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">🔒 Encryption Active</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Filename encrypted with AES-256-GCM encryption</li>
                    <li>• File stored securely with encrypted metadata</li>
                    <li>• Password required for filename decryption and download</li>
                    {recoveryEmail && <li>• Recovery email: {recoveryEmail}</li>}
                  </ul>
                </div>
              )}

              <Button onClick={handleReset} variant="outline" className="w-full">
                Upload Another File
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Data Retention Information */}
        <DataRetentionInfo />

        {/* Ad Unit */}
        <div className="mt-12">
          <AdUnit adSlot="1234567817" adFormat="rectangle" className="text-center" />
        </div>

        {/* Features */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Secure File Sharing Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Secure Upload</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  All files are encrypted during upload and scanned for malware 
                  to ensure safe sharing. Your data is protected at every step.
                </p>
                <Link to="/privacy">
                  <Button variant="outline" size="sm" className="w-full">
                    Privacy Policy
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Smart Cleanup</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Automatic deletion after 24 hours or download limits ensures 
                  maximum privacy and optimal storage management.
                </p>
                <Link to="/how-it-works">
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">No Registration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Upload and share files instantly without creating accounts 
                  or providing personal information. Complete anonymity guaranteed.
                </p>
                <Link to="/about">
                  <Button variant="outline" size="sm" className="w-full">
                    About Us
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Other Tools Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900">
            More Anonymous Sharing Tools
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-3 text-gray-900">Anonymous Clipboard</h4>
              <p className="text-gray-600 text-sm mb-4">
                Share text snippets instantly with 24-hour expiration. Perfect for quick code sharing and temporary notes.
              </p>
              <Link to="/clipboard">
                <Button size="sm" className="w-full">
                  Try Clipboard <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-3 text-gray-900">Rich Text Notepad</h4>
              <p className="text-gray-600 text-sm mb-4">
                Create formatted notes with headers, lists, and styling. Perfect for collaborative notes and detailed content sharing.
              </p>
              <Link to="/notepad">
                <Button size="sm" className="w-full">
                  Try Notepad <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="text-center mb-12">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Need Help Getting Started?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Check out our comprehensive guides and frequently asked questions to learn more about anonymous sharing and privacy protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/how-it-works">
              <Button variant="outline">
                How It Works
              </Button>
            </Link>
            <Link to="/faq">
              <Button variant="outline">
                FAQ
              </Button>
            </Link>
            <Link to="/how-to-share-text-anonymously">
              <Button variant="outline">
                Text Sharing Guide
              </Button>
            </Link>
          </div>
        </div>

        {/* Supported Files */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Supported File Types</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Documents</h4>
                <p className="text-gray-600">PDF, DOC, DOCX, TXT, RTF, ODT</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Images</h4>
                <p className="text-gray-600">JPG, PNG, GIF, BMP, SVG, WEBP</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Archives</h4>
                <p className="text-gray-600">ZIP, RAR, 7Z, TAR, GZ</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Code & Data</h4>
                <p className="text-gray-600">JS, HTML, CSS, JSON, XML, CSV</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FileShare;
