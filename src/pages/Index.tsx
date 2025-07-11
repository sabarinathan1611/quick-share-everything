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
import { Helmet } from 'react-helmet';

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

  return (
    <>
      <Helmet>
        <title>AnonShare – Anonymous Clipboard & File Sharing</title>
        <meta name="description" content="Share text, notes, and files anonymously with AnonShare. No login needed. Get 4-digit codes for instant sharing. Secure, private, and completely free." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="AnonShare – Anonymous Clipboard & File Sharing" />
        <meta property="og:description" content="Share text, notes, and files anonymously with AnonShare. No login needed. Get 4-digit codes for instant sharing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://anonshare.live" />
        <meta property="og:image" content="https://urevqqvsadvafgqehzna.supabase.co/storage/v1/object/public/anonshare//android-chrome-512x512.png" />
        <meta property="og:site_name" content="AnonShare" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AnonShare – Anonymous Clipboard & File Sharing" />
        <meta name="twitter:description" content="Share text, notes, and files anonymously with AnonShare. No login needed. Get 4-digit codes for instant sharing." />
        <meta name="twitter:image" content="https://urevqqvsadvafgqehzna.supabase.co/storage/v1/object/public/anonshare//android-chrome-512x512.png" />
        <link rel="canonical" href="https://anonshare.live" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "AnonShare",
            "description": "Anonymous clipboard and file sharing tool with 4-digit codes. No login required.",
            "url": "https://anonshare.live",
            "applicationCategory": "ProductivityApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "featureList": [
              "Anonymous text sharing",
              "Rich text notepad",
              "Secure file sharing",
              "4-digit access codes",
              "No registration required",
              "Automatic content expiration"
            ]
          })}
        </script>
      </Helmet>
      <main className="min-h-screen bg-sky-50">
        <section className="container mx-auto px-4 py-16">
          <header className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <img alt="AnonShare Logo" src="https://urevqqvsadvafgqehzna.supabase.co/storage/v1/object/public/anonshare//android-chrome-512x512.png" className="h-16 w-16 rounded-full mr-4 object-cover" />
              <h1 className="text-5xl font-bold text-foreground">AnonShare</h1>
            </div>
            <p className="text-2xl font-semibold text-primary mb-4">Instant Anonymous Sharing. No Login.</p>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              AnonShare is your privacy-first platform for sharing text, notes, and files without registration. Whether you need a secure online clipboard, a private notepad, or a fast file sharing tool, AnonShare keeps your data safe and anonymous. No accounts, no tracking, just simple and secure sharing.
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
          </header>

          {/* Code Input moved to the top */}
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

          {/* Error Display moved up with Code Input */}
          {error && <div className="max-w-md mx-auto text-center mb-12">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-600">
                Content not found or has expired. Please check the code and try again.
              </p>
            </div>
          </div>}

          <section className="mb-12" id="what-is-anonshare">
            <h2 className="text-3xl font-bold mb-4 text-foreground">What is AnonShare?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              AnonShare is a free, privacy-focused web app that lets you share text, notes, and files instantly using short codes. Unlike traditional sharing tools, AnonShare never asks for your email or personal details. Everything is anonymous, temporary, and protected by design. Whether you want to send a quick note, paste code, or share a file, AnonShare makes it effortless and secure.
            </p>
          </section>

          <section className="mb-12" id="how-it-works">
            <h2 className="text-3xl font-bold mb-4 text-foreground">How It Works</h2>
            <ol className="list-decimal list-inside text-lg text-muted-foreground max-w-3xl mx-auto space-y-2">
              <li><strong>Choose a Tool:</strong> Select Clipboard, Notepad, or File Share based on your need.</li>
              <li><strong>Paste or Upload:</strong> Enter your text, write a note, or upload a file (up to 50MB).</li>
              <li><strong>Get a Code:</strong> Receive a unique 4-digit code for your content.</li>
              <li><strong>Share the Code:</strong> Give the code to anyone who needs access.</li>
              <li><strong>Retrieve & Expire:</strong> Recipients enter the code to access the content. All shares expire automatically for privacy.</li>
            </ol>
          </section>

          <section className="mb-12" id="why-use-anonshare">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Why Use This Tool?</h2>
            <ul className="list-disc list-inside text-lg text-muted-foreground max-w-3xl mx-auto space-y-2">
              <li><strong>Privacy-First:</strong> No accounts, no tracking, no personal data collected.</li>
              <li><strong>Anonymous:</strong> Share anything without revealing your identity.</li>
              <li><strong>End-to-End Security:</strong> Optional encryption and automatic expiration for all content.</li>
              <li><strong>Simple & Fast:</strong> Share in seconds with just a code.</li>
              <li><strong>Multi-Device:</strong> Works on desktop, mobile, and tablets.</li>
            </ul>
          </section>

          <section className="mb-12" id="supported-features">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Supported Features</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card rounded-lg p-6 shadow-md border border-border">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Anonymous Clipboard</h3>
                <p className="text-muted-foreground">Paste text and share a short code. Perfect for quick, private text sharing without email or login.</p>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-md border border-border">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Rich Notepad</h3>
                <p className="text-muted-foreground">Create formatted notes with our rich text editor. Share instantly with generated codes.</p>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-md border border-border">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Secure File Sharing</h3>
                <p className="text-muted-foreground">Upload & share files up to 50MB. Automatic expiration and download limits for complete privacy.</p>
              </div>
            </div>
          </section>

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
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <Copy className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">Clipboard Share</h3>
                    <p className="text-gray-600">Paste text and share a short code (e.g. 3453). Perfect for quick text sharing without email.</p>
                  </div>
                </div>
              </Link>

              <Link to="/notepad" className="block">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <FileText className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">Notepad</h3>
                    <p className="text-gray-600">Save quick notes anonymously with rich formatting. Share instantly with generated codes.</p>
                  </div>
                </div>
              </Link>

              <Link to="/file-share" className="block">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <Upload className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">File Sharing</h3>
                    <p className="text-gray-600">Upload & share files instantly, automatic expiration, completely secure.</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* How It Works */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-md border border-gray-200">
              <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
                How Short Codes Work
              </h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-blue-600 text-2xl font-bold">1</span>
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-900">Share Content</h3>
                  <p className="text-gray-600 text-sm">Upload text, notes, or files to get a unique 4-digit code</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-green-600 text-2xl font-bold">2</span>
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-900">Share the Code</h3>
                  <p className="text-gray-600 text-sm">Give the code (e.g. 3453) to anyone who needs access</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-purple-600 text-2xl font-bold">3</span>
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-900">Instant Access</h3>
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
            <div className="bg-white rounded-lg p-8 shadow-md border border-gray-200">
              <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
                Why Choose AnonShare?
              </h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-900">100% Anonymous</h3>
                  <p className="text-gray-600 text-sm">No registration, no tracking, no data collection. Complete privacy guaranteed.</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Zap className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-900">Lightning Fast</h3>
                  <p className="text-gray-600 text-sm">Share content instantly with simple 4-digit codes. No complex setup required.</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Globe className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-900">Global Access</h3>
                  <p className="text-gray-600 text-sm">Access from anywhere with your sharing code. Works on all devices.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <CookieNotice />
    </>
  );
};

export default Index;
