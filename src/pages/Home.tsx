
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, FileText, Upload, Shield, Zap, Globe, Users, Clock, Lock } from 'lucide-react';
import AdUnit from '@/components/AdUnit';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Share Notes, Files & Text Instantly — Anonymously
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Use our online notepad, clipboard, and file drop — 100% private, no signup needed. 
            Perfect for anonymous clipboard sharing, paste without login, and secure file sharing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/clipboard">
              <Button size="lg" className="text-lg px-8 py-3">
                Start Sharing Now
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Ad Unit */}
      <div className="max-w-4xl mx-auto px-4 mb-12">
        <AdUnit adSlot="1234567890" adFormat="horizontal" className="text-center" />
      </div>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-4">
            Anonymous Sharing Tools for Everyone
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Enter short codes like 3453 to receive shared content instantly. No accounts, no tracking, completely anonymous.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Copy className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>Anonymous Clipboard</CardTitle>
                <CardDescription>
                  Perfect anonymous clipboard tool. Paste text and get a 4-digit code to share instantly. 
                  No login required - ideal for quick text sharing across devices.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/clipboard">
                  <Button className="w-full">Try Clipboard</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle>Online Notepad</CardTitle>
                <CardDescription>
                  Create formatted notes with our rich text editor. Add headers, lists, links, and 
                  styling. Share with generated codes - perfect for collaboration.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/notepad">
                  <Button className="w-full">Create Notes</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Upload className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle>Secure File Share</CardTitle>
                <CardDescription>
                  Upload and share files up to 50MB with download limits and expiration dates. 
                  Perfect secure file share solution without email attachments.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/file-share">
                  <Button className="w-full">Share Files</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How Short Codes Work */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            How Short Codes Work
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Upload className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">1. Share Content</h3>
              <p className="text-muted-foreground text-sm">
                Upload text, notes, or files using our anonymous sharing tools
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-green-600 text-xl font-bold">3453</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">2. Get Short Code</h3>
              <p className="text-muted-foreground text-sm">
                Receive a unique 4-digit code (e.g. 3453) for your shared content
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">3. Share Code</h3>
              <p className="text-muted-foreground text-sm">
                Give the code to anyone who needs access to your content
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">4. Instant Access</h3>
              <p className="text-muted-foreground text-sm">
                Enter 3453 on our homepage to instantly receive the shared content
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose AnonShare Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Why Choose AnonShare?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Privacy First</h3>
              <p className="text-muted-foreground">
                No registration required. No tracking. No data collection. Your privacy is 
                guaranteed with our anonymous sharing platform.
              </p>
            </div>
            <div className="text-center">
              <Zap className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Share content instantly with auto-generated 4-digit codes. No waiting, no complex 
                setup - just fast, efficient sharing tools.
              </p>
            </div>
            <div className="text-center">
              <Globe className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Globally Accessible</h3>
              <p className="text-muted-foreground">
                Access your shared content from anywhere in the world with our simple 
                code-based retrieval system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Unit */}
      <div className="max-w-4xl mx-auto px-4 my-12">
        <AdUnit adSlot="1234567891" adFormat="rectangle" className="text-center" />
      </div>

      {/* Use Cases Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Perfect for Every Anonymous Sharing Need
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg p-6 border">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mr-4">
                  <Copy className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">For Developers</h3>
              </div>
              <p className="text-muted-foreground">
                Share code snippets, configuration files, and debug logs with team members 
                instantly. Perfect anonymous clipboard for developers who need paste without login.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 border">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mr-4">
                  <FileText className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold">For Content Creators</h3>
              </div>
              <p className="text-muted-foreground">
                Share draft articles, creative briefs, and collaboration notes with clients 
                and team members without exposing sensitive information.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 border">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mr-4">
                  <Upload className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold">For Students</h3>
              </div>
              <p className="text-muted-foreground">
                Share study notes, project files, and research materials with classmates 
                while maintaining privacy and avoiding email limitations.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 border">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mr-4">
                  <Lock className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold">For Business Professionals</h3>
              </div>
              <p className="text-muted-foreground">
                Share meeting notes, proposals, and documents quickly without going through 
                complex approval processes or corporate file sharing systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Anonymous Sharing?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of users who trust AnonShare for their privacy-first sharing needs.
          </p>
          <Link to="/clipboard">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Start Sharing Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
