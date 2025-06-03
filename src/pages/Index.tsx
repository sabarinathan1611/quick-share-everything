
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getShare } from "@/utils/shareService";
import { Share } from "@/utils/shareService";
import CodeInput from "@/components/CodeInput";
import ShareResult from "@/components/ShareResult";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AdUnit from "@/components/AdUnit";
import CookieNotice from "@/components/CookieNotice";
import { Copy, FileText, Upload, Zap, Shield, Globe } from "lucide-react";

const Index = () => {
  const [searchCode, setSearchCode] = useState<string>("");
  const [showResult, setShowResult] = useState(false);

  const {
    data: share,
    isLoading,
    error
  } = useQuery({
    queryKey: ["share", searchCode],
    queryFn: () => getShare(searchCode),
    enabled: !!searchCode && searchCode.length >= 4
  });

  const handleCodeSubmit = (code: string) => {
    setSearchCode(code);
    setShowResult(true);
  };

  const handleBack = () => {
    setShowResult(false);
    setSearchCode("");
  };

  if (showResult && share) {
    return <ShareResult share={share} onBack={handleBack} />;
  }

  return <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/lovable-uploads/35063799-1ed3-4793-a17b-7c700e903f6c.png" 
              alt="AnonShare Logo" 
              className="h-16 w-16 rounded-full object-cover mr-4"
            />
            <h1 className="text-5xl font-bold text-gray-900">
              AnonShare
            </h1>
          </div>
          <p className="text-2xl font-semibold text-blue-600 mb-4">
            Instant Anonymous Sharing. No Login.
          </p>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Use our online notepad, clipboard, and file drop — 100% private, no signup needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/clipboard">
              <Button size="lg" className="text-lg px-8 py-3">
                Start Sharing Now
              </Button>
            </Link>
            <Link to="/home">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                Explore Features
              </Button>
            </Link>
          </div>
        </div>

        {/* Code Input */}
        <div className="mb-12">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Have a Share Code?
            </h2>
            <p className="text-gray-600">
              Enter your code (e.g. 3453) to access shared content
            </p>
          </div>
          <CodeInput onCodeSubmit={handleCodeSubmit} isLoading={isLoading} />
        </div>

        {/* Error Display */}
        {error && <div className="max-w-md mx-auto text-center mb-12">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-800">
                Content not found or has expired. Please check the code and try again.
              </p>
            </div>
          </div>}

        {/* Ad Unit */}
        <div className="mb-12">
          <AdUnit adSlot="1234567890" adFormat="horizontal" className="text-center" />
        </div>

        {/* Feature Cards */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Anonymous Sharing Made Simple
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/clipboard" className="block">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Copy className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Clipboard Share</h3>
                  <p className="text-gray-600">Paste text and share a short code (e.g. 3453). Perfect for quick text sharing without email.</p>
                </div>
              </div>
            </Link>

            <Link to="/notepad" className="block">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <FileText className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Notepad</h3>
                  <p className="text-gray-600">Save quick notes anonymously with rich formatting. Share instantly with generated codes.</p>
                </div>
              </div>
            </Link>

            <Link to="/file-share" className="block">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Upload className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">File Sharing</h3>
                  <p className="text-gray-600">Upload &amp; share files instantly, automatic expiration, completely secure.</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
              How Short Codes Work
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-blue-600 text-2xl font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Share Content</h3>
                <p className="text-gray-600 text-sm">Upload text, notes, or files to get a unique 4-digit code</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-green-600 text-2xl font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Share the Code</h3>
                <p className="text-gray-600 text-sm">Give the code (e.g. 3453) to anyone who needs access</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-purple-600 text-2xl font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Instant Access</h3>
                <p className="text-gray-600 text-sm">Enter the code above to instantly receive shared content</p>
              </div>
            </div>
          </div>
        </div>

        {/* Ad Unit */}
        <div className="mt-12">
          <AdUnit adSlot="1234567891" adFormat="rectangle" className="text-center" />
        </div>

        {/* Why Choose AnonShare */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
              Why Choose AnonShare?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">100% Anonymous</h3>
                <p className="text-gray-600 text-sm">No registration, no tracking, no data collection. Complete privacy guaranteed.</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Lightning Fast</h3>
                <p className="text-gray-600 text-sm">Share content instantly with simple 4-digit codes. No complex setup required.</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Globe className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Global Access</h3>
                <p className="text-gray-600 text-sm">Access from anywhere with your sharing code. Works on all devices.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CookieNotice />
    </div>;
};

export default Index;
