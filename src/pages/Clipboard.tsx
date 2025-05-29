
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Copy, Clipboard as ClipboardIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { createShare } from '@/utils/shareService';
import AdUnit from '@/components/AdUnit';

const Clipboard = () => {
  const [text, setText] = useState('');
  const [shareCode, setShareCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
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

    setIsLoading(true);
    try {
      const share = await createShare({
        type: 'clipboard',
        content: text
      });
      
      setShareCode(share.code);
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

  const handleCopyCode = () => {
    navigator.clipboard.writeText(shareCode);
    toast({
      title: "Copied!",
      description: "Share code copied to clipboard",
    });
  };

  const handleReset = () => {
    setText('');
    setShareCode('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Anonymous Clipboard</h1>
          <p className="text-xl text-gray-600">
            Paste text and share a 4-digit code instantly. Perfect anonymous clipboard for developers and teams.
          </p>
        </div>

        {/* Ad Unit */}
        <div className="mb-12">
          <AdUnit adSlot="1234567812" adFormat="horizontal" className="text-center" />
        </div>

        {!shareCode ? (
          <Card className="max-w-2xl mx-auto">
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
              <Button 
                onClick={handleShare} 
                disabled={!text.trim() || isLoading}
                className="w-full"
              >
                {isLoading ? 'Creating Share...' : 'Generate 4-Digit Code'}
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-green-600">
                Anonymous Clipboard Created!
              </CardTitle>
              <CardDescription className="text-center">
                Your text has been shared successfully. Use the 4-digit code below to access it.
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
                  <li>They can enter the code on the homepage to retrieve the content</li>
                  <li>Content will automatically expire after 24 hours</li>
                </ol>
              </div>

              <Button onClick={handleReset} variant="outline" className="w-full">
                Create Another Share
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Ad Unit */}
        <div className="mt-12">
          <AdUnit adSlot="1234567813" adFormat="rectangle" className="text-center" />
        </div>

        {/* Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Instant Sharing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Generate secure sharing codes instantly. No registration required, 
                just paste and share.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Auto Expiration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                All clipboard content automatically expires after 24 hours for 
                your security and privacy.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Anonymous Access</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                No tracking, no accounts, no personal information required. 
                Complete privacy guaranteed.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Use Cases */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Perfect For</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Developers</h4>
                <p className="text-gray-600">Share code snippets, error logs, and configuration files quickly with team members.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Content Creators</h4>
                <p className="text-gray-600">Share draft content, ideas, and collaboration notes without email limitations.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Students</h4>
                <p className="text-gray-600">Share study notes, research findings, and project updates with classmates.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Business Users</h4>
                <p className="text-gray-600">Share meeting notes, proposals, and quick updates without complex systems.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Clipboard;
