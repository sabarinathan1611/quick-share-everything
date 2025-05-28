
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getShare } from "@/utils/shareService";
import { Share } from "@/utils/shareService";
import CodeInput from "@/components/CodeInput";
import ShareResult from "@/components/ShareResult";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AdUnit from "@/components/AdUnit";

const Index = () => {
  const [searchCode, setSearchCode] = useState<string>("");
  const [showResult, setShowResult] = useState(false);

  const { data: share, isLoading, error } = useQuery({
    queryKey: ["share", searchCode],
    queryFn: () => getShare(searchCode),
    enabled: !!searchCode && searchCode.length >= 4,
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            AnonTools
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Anonymous sharing made simple. Share text, notes, and files 
            without registration or tracking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/home">
              <Button size="lg" className="text-lg px-8 py-3">
                Explore Tools
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* Code Input */}
        <div className="mb-12">
          <CodeInput 
            onCodeSubmit={handleCodeSubmit} 
            isLoading={isLoading}
          />
        </div>

        {/* Error Display */}
        {error && (
          <div className="max-w-md mx-auto text-center">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-800">
                Content not found or has expired. Please check the code and try again.
              </p>
            </div>
          </div>
        )}

        {/* Ad Unit */}
        <div className="mb-12">
          <AdUnit adSlot="1234567890" adFormat="horizontal" className="text-center" />
        </div>

        {/* Quick Tools */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Quick Access Tools
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/clipboard" className="block">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-blue-600 text-xl">📋</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Clipboard</h3>
                  <p className="text-gray-600 text-sm">Share text instantly</p>
                </div>
              </div>
            </Link>

            <Link to="/notepad" className="block">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-green-600 text-xl">📝</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Notepad</h3>
                  <p className="text-gray-600 text-sm">Create rich notes</p>
                </div>
              </div>
            </Link>

            <Link to="/file-share" className="block">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border">
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-purple-600 text-xl">📁</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">File Share</h3>
                  <p className="text-gray-600 text-sm">Upload files securely</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Ad Unit */}
        <div className="mt-12">
          <AdUnit adSlot="1234567891" adFormat="rectangle" className="text-center" />
        </div>

        {/* Features Preview */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
              Why Choose AnonTools?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-blue-600 text-2xl">🔒</span>
                </div>
                <h3 className="font-semibold mb-2">Privacy First</h3>
                <p className="text-gray-600 text-sm">No registration, no tracking, no data collection</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-green-600 text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold mb-2">Lightning Fast</h3>
                <p className="text-gray-600 text-sm">Share content instantly with simple codes</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-purple-600 text-2xl">🌍</span>
                </div>
                <h3 className="font-semibold mb-2">Global Access</h3>
                <p className="text-gray-600 text-sm">Access from anywhere with your sharing code</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
