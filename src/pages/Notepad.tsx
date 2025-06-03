import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { createShare } from '@/utils/shareService';
import RichTextEditor from '@/components/RichTextEditor';
import AdUnit from '@/components/AdUnit';

const Notepad = () => {
  const [content, setContent] = useState('');
  const [shareCode, setShareCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleShare = async () => {
    if (!content.trim()) {
      toast({
        title: "Error",
        description: "Please add some content to your note",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    try {
      // Just use the content directly without prepending title
      const share = await createShare({
        type: 'notepad',
        content: content
      });
      
      setShareCode(share.code);
      toast({
        title: "Success!",
        description: `Your note is ready! Code: ${share.code}`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create note share",
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
    setContent('');
    setShareCode('');
  };

  return (
    <div className="min-h-screen bg-sky-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Anonymous Online Notepad</h1>
          <p className="text-xl text-gray-600">
            Create formatted notes anonymously with our rich text editor. Share with 4-digit codes.
          </p>
        </div>

        {/* Ad Unit */}
        <div className="mb-12">
          <AdUnit adSlot="1234567814" adFormat="horizontal" className="text-center" />
        </div>

        {!shareCode ? (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5" />
                <span>Create Anonymous Rich Text Note</span>
              </CardTitle>
              <CardDescription>
                Create formatted documents with headers, lists, links, and more. 
                Content expires after 7 days. No login required.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Note Content</label>
                <RichTextEditor
                  value={content}
                  onChange={setContent}
                  placeholder="Start writing your note here..."
                />
              </div>

              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Rich formatting supported</span>
                <span>Expires in 7 days</span>
              </div>

              <Button 
                onClick={handleShare} 
                disabled={!content.trim() || isLoading}
                className="w-full"
              >
                {isLoading ? 'Creating Note...' : 'Generate 4-Digit Code'}
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-green-600">
                Anonymous Note Created!
              </CardTitle>
              <CardDescription className="text-center">
                Your formatted note has been shared successfully. Use the 4-digit code below to access it.
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
                  <li>They can enter the code on the homepage to retrieve the formatted note</li>
                  <li>Content will automatically expire after 7 days</li>
                </ol>
              </div>

              <Button onClick={handleReset} variant="outline" className="w-full">
                Create Another Note
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Ad Unit */}
        <div className="mt-12">
          <AdUnit adSlot="1234567815" adFormat="rectangle" className="text-center" />
        </div>

        {/* Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Rich Formatting</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Create professional documents with headers, bold text, lists, 
                links, and code blocks.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Extended Storage</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Notes are stored for 7 days, giving you more time for 
                collaboration and reference.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Easy Sharing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Share formatted documents instantly with simple codes. 
                Perfect for team collaboration.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Formatting Guide */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Formatting Options</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Text Formatting</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• <strong>Bold</strong> and <em>italic</em> text</li>
                  <li>• Headers (H1, H2, H3)</li>
                  <li>• Strikethrough text</li>
                  <li>• Underlined text</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Structure</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Numbered and bullet lists</li>
                  <li>• Block quotes</li>
                  <li>• Code blocks</li>
                  <li>• Hyperlinks</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Use Cases */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Perfect For</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Documentation</h4>
                <p className="text-gray-600">Create technical documentation, API guides, and how-to articles with proper formatting.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Meeting Notes</h4>
                <p className="text-gray-600">Take structured meeting notes with action items, lists, and important highlights.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Proposals</h4>
                <p className="text-gray-600">Draft professional proposals and documents with headers, formatting, and structure.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Collaboration</h4>
                <p className="text-gray-600">Share formatted content for review, feedback, and team collaboration projects.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Notepad;
