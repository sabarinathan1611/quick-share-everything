
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ClipboardUseCases = () => {
  return (
    <div className="mt-12">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Perfect For</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Developers</h4>
              <p className="text-gray-600 mb-3">Share code snippets, error logs, and configuration files quickly with team members. Perfect for debugging sessions and code reviews.</p>
              <Link to="/notepad">
                <Button variant="outline" size="sm">
                  Try Rich Text Editor
                </Button>
              </Link>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Content Creators</h4>
              <p className="text-gray-600 mb-3">Share draft content, ideas, and collaboration notes without email limitations. Ideal for writers and creative teams.</p>
              <Link to="/file-share">
                <Button variant="outline" size="sm">
                  Share Files
                </Button>
              </Link>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Students</h4>
              <p className="text-gray-600 mb-3">Share study notes, research findings, and project updates with classmates. No account creation required.</p>
              <Link to="/how-it-works">
                <Button variant="outline" size="sm">
                  Learn How It Works
                </Button>
              </Link>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Business Users</h4>
              <p className="text-gray-600 mb-3">Share meeting notes, proposals, and quick updates without complex systems. Streamline your workflow.</p>
              <Link to="/about">
                <Button variant="outline" size="sm">
                  About AnonShare
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Use Cases */}
      <div className="bg-gray-50 rounded-lg p-8">
        <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900">
          More Anonymous Sharing Solutions
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6">
            <h4 className="text-lg font-semibold mb-3 text-gray-900">Rich Text Notepad</h4>
            <p className="text-gray-600 text-sm mb-4">
              Create formatted documents with headers, lists, and styling. Perfect for longer content and structured notes.
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
      <div className="mt-8 text-center">
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

export default ClipboardUseCases;
