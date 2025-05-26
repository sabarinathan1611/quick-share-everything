import React, { useState } from 'react';
import { Copy, FileText, Share, Upload, Download, Edit3, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import CodeInput from '@/components/CodeInput';
import ShareResult from '@/components/ShareResult';
import AdUnit from '@/components/AdUnit';
import RichTextEditor from '@/components/RichTextEditor';
import { createClipboardShare, createNotepadShare, createFileShare, getShareByCode, Share as ShareType } from '@/utils/shareService';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [clipboardText, setClipboardText] = useState('');
  const [notepadText, setNotepadText] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentShare, setCurrentShare] = useState<ShareType | null>(null);
  const [generatedCode, setGeneratedCode] = useState<string | null>(null);
  const { toast } = useToast();

  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Text copied to clipboard",
    });
  };

  const handleSaveClipboard = async () => {
    if (!clipboardText.trim()) {
      toast({
        title: "Error",
        description: "Please enter some text first",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    try {
      const code = await createClipboardShare(clipboardText);
      setGeneratedCode(code);
      toast({
        title: "Clipboard Saved!",
        description: `Your clipboard code is ${code}. Share this code to let others access it.`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save clipboard",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveNotepad = async () => {
    if (!notepadText.trim()) {
      toast({
        title: "Error",
        description: "Please enter some content first",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    try {
      const code = await createNotepadShare(notepadText);
      setGeneratedCode(code);
      toast({
        title: "Note Saved!",
        description: `Your note code is ${code}. Share this code to let others access it.`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save note",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 100 * 1024 * 1024) { // 100MB limit
        toast({
          title: "File too large",
          description: "Please select a file smaller than 100MB",
          variant: "destructive"
        });
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleFileUpload = async () => {
    if (!selectedFile) {
      toast({
        title: "Error",
        description: "Please select a file first",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    try {
      const code = await createFileShare(selectedFile);
      setGeneratedCode(code);
      toast({
        title: "File Uploaded!",
        description: `Your file code is ${code}. Share this code to let others download it.`,
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

  const handleCodeSubmit = async (code: string) => {
    setIsLoading(true);
    try {
      const share = await getShareByCode(code);
      if (share) {
        setCurrentShare(share);
      } else {
        toast({
          title: "Code not found",
          description: "The code you entered doesn't exist or has expired",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to retrieve content",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToHome = () => {
    setCurrentShare(null);
    setGeneratedCode(null);
    setActiveTab('home');
  };

  // Show share result if we have one
  if (currentShare) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Header */}
        <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Share className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AnonTools
                </h1>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <ShareResult share={currentShare} onBack={handleBackToHome} />
          
          {/* Ad placement after content */}
          <div className="mt-8 flex justify-center">
            <AdUnit 
              adSlot="1234567890" 
              adFormat="rectangle"
              className="max-w-md"
            />
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t bg-white/80 backdrop-blur-sm mt-16">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md flex items-center justify-center">
                  <Share className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-gray-700">AnonTools</span>
              </div>
              <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-gray-600">
                <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
                <a href="mailto:support@example.com" className="hover:text-gray-900 transition-colors">
                  support@example.com
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Share className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AnonTools
              </h1>
            </div>
            <nav className="hidden md:flex space-x-1">
              <Button
                variant={activeTab === 'home' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('home')}
                className="text-sm"
              >
                Home
              </Button>
              <Button
                variant={activeTab === 'clipboard' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('clipboard')}
                className="text-sm"
              >
                Clipboard
              </Button>
              <Button
                variant={activeTab === 'notepad' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('notepad')}
                className="text-sm"
              >
                Notepad
              </Button>
              <Button
                variant={activeTab === 'fileshare' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('fileshare')}
                className="text-sm"
              >
                File Share
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          {/* Mobile Navigation */}
          <TabsList className="grid w-full grid-cols-4 md:hidden">
            <TabsTrigger value="home" className="text-xs">Home</TabsTrigger>
            <TabsTrigger value="clipboard" className="text-xs">Clipboard</TabsTrigger>
            <TabsTrigger value="notepad" className="text-xs">Notepad</TabsTrigger>
            <TabsTrigger value="fileshare" className="text-xs">Files</TabsTrigger>
          </TabsList>

          {/* Home Tab */}
          <TabsContent value="home" className="space-y-8">
            <div className="text-center space-y-6">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Anonymous Tools
                </h2>
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                  Share text, notes, and files instantly with numeric codes. No signup required.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <CodeInput onCodeSubmit={handleCodeSubmit} isLoading={isLoading} />
              
              {/* Top banner ad */}
              <div className="flex justify-center">
                <AdUnit 
                  adSlot="1234567890" 
                  adFormat="horizontal"
                  className="w-full max-w-2xl"
                />
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <Card className="group hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveTab('clipboard')}>
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-2 group-hover:bg-blue-200 transition-colors">
                      <Copy className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle>Online Clipboard</CardTitle>
                    <CardDescription>
                      Share text snippets with auto-expiring codes. Perfect for quick sharing.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" onClick={() => setActiveTab('clipboard')}>
                      Use Clipboard
                    </Button>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveTab('notepad')}>
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-2 group-hover:bg-green-200 transition-colors">
                      <Edit3 className="w-6 h-6 text-green-600" />
                    </div>
                    <CardTitle>Online Notepad</CardTitle>
                    <CardDescription>
                      Create and share notes with persistent numeric codes.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" onClick={() => setActiveTab('notepad')}>
                      Open Notepad
                    </Button>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveTab('fileshare')}>
                  <CardHeader>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-2 group-hover:bg-purple-200 transition-colors">
                      <Upload className="w-6 h-6 text-purple-600" />
                    </div>
                    <CardTitle>File Share</CardTitle>
                    <CardDescription>
                      Upload and share files up to 100MB with time-limited codes.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" onClick={() => setActiveTab('fileshare')}>
                      Share Files
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Clipboard Tab */}
          <TabsContent value="clipboard" className="space-y-6">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Copy className="w-5 h-5" />
                    <span>Online Clipboard</span>
                  </CardTitle>
                  <CardDescription>
                    Paste your text below and generate a numeric code that expires in 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="clipboard-text">Your Text</Label>
                    <Textarea
                      id="clipboard-text"
                      placeholder="Paste or type your text here..."
                      value={clipboardText}
                      onChange={(e) => setClipboardText(e.target.value)}
                      className="min-h-[200px] resize-y"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button onClick={handleSaveClipboard} className="flex-1" disabled={isLoading}>
                      {isLoading ? 'Generating...' : 'Generate Code'}
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => handleCopyToClipboard(clipboardText)}
                      disabled={!clipboardText.trim()}
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Text
                    </Button>
                  </div>
                  {generatedCode && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800 font-medium">
                        ✅ Your clipboard code is: <span className="font-mono text-lg">{generatedCode}</span>
                      </p>
                      <p className="text-green-600 text-sm mt-1">
                        Share this code to let others access your text. Expires in 24 hours.
                      </p>
                    </div>
                  )}
                  <div className="text-sm text-gray-500">
                    💡 Codes expire automatically after 24 hours for security.
                  </div>
                </CardContent>
              </Card>
              
              {/* Sidebar ad for clipboard */}
              <div className="mt-6 flex justify-center">
                <AdUnit 
                  adSlot="2345678901" 
                  adFormat="rectangle"
                  className="max-w-sm"
                />
              </div>
            </div>
          </TabsContent>

          {/* Notepad Tab */}
          <TabsContent value="notepad" className="space-y-6">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Edit3 className="w-5 h-5" />
                    <span>Online Notepad</span>
                  </CardTitle>
                  <CardDescription>
                    Write your notes below with rich text formatting and generate a persistent sharing code.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="notepad-text">Your Note</Label>
                    <RichTextEditor
                      value={notepadText}
                      onChange={setNotepadText}
                      placeholder="Start writing your note here..."
                      className="border rounded-md"
                    />
                  </div>
                  <Button onClick={handleSaveNotepad} className="w-full" disabled={isLoading}>
                    {isLoading ? 'Saving...' : 'Generate Share Code'}
                  </Button>
                  {generatedCode && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800 font-medium">
                        ✅ Your note code is: <span className="font-mono text-lg">{generatedCode}</span>
                      </p>
                      <p className="text-green-600 text-sm mt-1">
                        Share this code to let others view your note. Notes are saved permanently.
                      </p>
                    </div>
                  )}
                  <div className="text-sm text-gray-500">
                    💡 Notes are saved permanently and can be accessed anytime with the code.
                  </div>
                </CardContent>
              </Card>
              
              {/* Sidebar ad for notepad */}
              <div className="mt-6 flex justify-center">
                <AdUnit 
                  adSlot="3456789012" 
                  adFormat="rectangle"
                  className="max-w-sm"
                />
              </div>
            </div>
          </TabsContent>

          {/* File Share Tab */}
          <TabsContent value="fileshare" className="space-y-6">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Upload className="w-5 h-5" />
                    <span>File Share</span>
                  </CardTitle>
                  <CardDescription>
                    Upload files up to 100MB and get a download code that expires in 7 days.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="file-upload">Choose File</Label>
                    <Input
                      id="file-upload"
                      type="file"
                      onChange={handleFileSelect}
                      className="cursor-pointer"
                    />
                  </div>
                  {selectedFile && (
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{selectedFile.name}</p>
                          <p className="text-sm text-gray-500">
                            {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  <Button onClick={handleFileUpload} className="w-full" disabled={!selectedFile || isLoading}>
                    <Upload className="w-4 h-4 mr-2" />
                    {isLoading ? 'Uploading...' : 'Upload File'}
                  </Button>
                  {generatedCode && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800 font-medium">
                        ✅ Your file code is: <span className="font-mono text-lg">{generatedCode}</span>
                      </p>
                      <p className="text-green-600 text-sm mt-1">
                        Share this code to let others download your file. Expires in 7 days.
                      </p>
                    </div>
                  )}
                  <div className="text-sm text-gray-500">
                    💡 Download codes expire after 7 days or when download limit is reached.
                  </div>
                </CardContent>
              </Card>
              
              {/* Sidebar ad for file share */}
              <div className="mt-6 flex justify-center">
                <AdUnit 
                  adSlot="4567890123" 
                  adFormat="rectangle"
                  className="max-w-sm"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/80 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md flex items-center justify-center">
                <Share className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-gray-700">AnonTools</span>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
              <a href="mailto:support@example.com" className="hover:text-gray-900 transition-colors">
                support@example.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
