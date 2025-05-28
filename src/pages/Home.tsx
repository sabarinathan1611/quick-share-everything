
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clipboard, FileText, Upload, Shield, Zap, Globe } from 'lucide-react';
import AdUnit from '@/components/AdUnit';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Anonymous Online Tools for Privacy-First Sharing
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Share text snippets, create rich notes, and upload files securely without any signup required. 
            Your privacy is our priority with temporary, encrypted sharing solutions.
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
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Powerful Tools for Anonymous Sharing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clipboard className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>Anonymous Clipboard</CardTitle>
                <CardDescription>
                  Share text snippets instantly with auto-generated codes. Perfect for quick text sharing 
                  across devices or with others without leaving traces.
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
                <CardTitle>Rich Text Notepad</CardTitle>
                <CardDescription>
                  Create formatted notes with our rich text editor. Add headers, lists, links, and 
                  styling to create professional-looking shared documents.
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
                <CardTitle>Secure File Sharing</CardTitle>
                <CardDescription>
                  Upload and share files up to 50MB with download limits and expiration dates. 
                  Perfect for temporary file sharing without email attachments.
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

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose AnonTools?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Privacy First</h3>
              <p className="text-gray-600">
                No registration required. No tracking. No data collection. Your privacy is 
                guaranteed with our anonymous sharing platform.
              </p>
            </div>
            <div className="text-center">
              <Zap className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
              <p className="text-gray-600">
                Share content instantly with auto-generated codes. No waiting, no complex 
                setup - just fast, efficient sharing tools.
              </p>
            </div>
            <div className="text-center">
              <Globe className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Globally Accessible</h3>
              <p className="text-gray-600">
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
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Perfect for Every Sharing Need
          </h2>
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">For Developers</h3>
              <p className="text-gray-600">
                Share code snippets, configuration files, and debug logs with team members 
                instantly. No need to clutter chat apps with long code blocks.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">For Content Creators</h3>
              <p className="text-gray-600">
                Share draft articles, creative briefs, and collaboration notes with clients 
                and team members without exposing sensitive information.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">For Students</h3>
              <p className="text-gray-600">
                Share study notes, project files, and research materials with classmates 
                while maintaining privacy and avoiding email limitations.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">For Business Professionals</h3>
              <p className="text-gray-600">
                Share meeting notes, proposals, and documents quickly without going through 
                complex approval processes or corporate file sharing systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Sharing Anonymously?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of users who trust AnonTools for their privacy-first sharing needs.
          </p>
          <Link to="/clipboard">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Get Started for Free
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
