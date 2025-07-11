import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Copy, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import RichTextEditor from '@/components/RichTextEditor';
import { createShare } from '@/utils/shareService';
import AdUnit from '@/components/AdUnit';

const Notepad = () => {
  const [content, setContent] = useState('');
  const [shareCode, setShareCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleShare = async () => {
    if (!content.trim()) return;
    
    setIsLoading(true);
    try {
      const result = await createShare({
        type: 'notepad',
        content: content
      });
      setShareCode(result.code);
    } catch (error) {
      console.error('Error creating note:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(shareCode);
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
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Rich Text Notepad Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Rich Formatting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Create professional documents with headers, bold text, lists, 
                  links, and code blocks. Perfect for structured content.
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
                <CardTitle className="text-lg">Extended Storage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Notes are stored for 7 days, giving you more time for 
                  collaboration and reference compared to other tools.
                </p>
                <Link to="/faq">
                  <Button variant="outline" size="sm" className="w-full">
                    View FAQ
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Easy Sharing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Share formatted documents instantly with simple codes. 
                  Perfect for team collaboration and project management.
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
              <h4 className="text-lg font-semibold mb-3 text-gray-900">Secure File Sharing</h4>
              <p className="text-gray-600 text-sm mb-4">
                Upload and share files up to 50MB with automatic expiration and download tracking.
              </p>
              <Link to="/file-share">
                <Button size="sm" className="w-full">
                  Share Files <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Formatting Guide */}
        <Card className="mb-12">
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
        <Card className="mb-12">
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

        {/* Help Section */}
        <div className="text-center">
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
      </div>
    </div>
  );
};

export default Notepad;
