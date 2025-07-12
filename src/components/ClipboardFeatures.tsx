
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Zap, Users, ArrowRight } from 'lucide-react';

const ClipboardFeatures = () => {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
        Why Choose Our Anonymous Clipboard?
      </h2>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Zap className="w-5 h-5 text-blue-600 mr-2" />
              Instant Sharing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-sm mb-4">
              Generate secure sharing codes instantly. No registration required, 
              just paste and share. Perfect for quick text sharing across devices.
            </p>
            <Link to="/how-it-works">
              <Button variant="outline" size="sm" className="w-full">
                Learn How It Works
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Shield className="w-5 h-5 text-green-600 mr-2" />
              End-to-End Encryption
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-sm mb-4">
              Optional client-side encryption ensures your sensitive content 
              remains private and secure. Your data is protected at every step.
            </p>
            <Link to="/privacy-policy">
              <Button variant="outline" size="sm" className="w-full">
                Privacy Policy
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Users className="w-5 h-5 text-purple-600 mr-2" />
              Anonymous Access
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-sm mb-4">
              No tracking, no accounts, no personal information required. 
              Complete privacy guaranteed with automatic content expiration.
            </p>
            <Link to="/about">
              <Button variant="outline" size="sm" className="w-full">
                About Our Mission
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Additional Features Section */}
      <div className="bg-gray-50 rounded-lg p-8">
        <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900">
          More Anonymous Sharing Tools
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
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

      {/* Help Section */}
      <div className="mt-12 text-center">
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
  );
};

export default ClipboardFeatures;
