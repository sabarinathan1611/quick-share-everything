import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Users, Clock, Globe, Code, Zap } from 'lucide-react';
import AdUnit from '@/components/AdUnit';

const About = () => {
  return (
    <div className="min-h-screen bg-sky-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About AnonShare</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AnonShare was built to make anonymous sharing easier, safer, and private—without needing accounts.
          </p>
        </div>

        {/* Ad Unit */}
        <div className="mb-12">
          <AdUnit adSlot="1234567892" adFormat="horizontal" className="text-center" />
        </div>

        {/* Mission Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600 space-y-4">
            <p>
              In a world where digital privacy is increasingly under threat, AnonShare provides 
              a simple solution for sharing content without compromising personal information. 
              We believe that sharing text, notes, and files should be instant, secure, and 
              completely anonymous.
            </p>
            <p>
              Our platform eliminates the friction of traditional sharing methods while 
              prioritizing user privacy. No accounts, no tracking, no data collection – 
              just simple, code-based sharing that works for everyone.
            </p>
            <p>
              Whether you're a developer sharing code snippets, a student collaborating on 
              projects, or someone who needs to share sensitive information securely, 
              AnonShare provides the tools you need while respecting your privacy.
            </p>
          </CardContent>
        </Card>

        {/* Features Overview */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Platform Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Code className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>Anonymous Clipboard</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Share text snippets instantly with 4-digit codes. Perfect for developers, 
                  writers, and anyone who needs quick text sharing without email.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle>Rich Notepad</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Create formatted notes with our rich text editor. Add headers, lists, 
                  and styling to share professional documents anonymously.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle>Secure File Sharing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Upload files up to 50MB with download limits and automatic expiration. 
                  Share documents, images, and files securely.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* How It Works */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">How AnonShare Works</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">1. Share Your Content</h3>
              <p className="text-gray-600">
                Use our clipboard, notepad, or file share features to upload your content. 
                Everything is processed securely and temporarily stored.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">2. Get a Short Code</h3>
              <p className="text-gray-600">
                Receive a unique 4-digit code (like 3453) that provides access to your 
                shared content. These codes are randomly generated and secure.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">3. Share the Code</h3>
              <p className="text-gray-600">
                Give the code to anyone who needs access. No accounts, passwords, or 
                personal information required from recipients.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">4. Automatic Cleanup</h3>
              <p className="text-gray-600">
                Content expires automatically based on type and usage. Your data doesn't 
                persist longer than necessary on our servers.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Technology & Privacy */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Technology & Privacy</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <Shield className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>Privacy by Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Built with privacy as the foundation. No user tracking, minimal data 
                  collection, and automatic content deletion ensure your privacy is protected.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle>Modern Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Built with React, TypeScript, and Supabase for a fast, reliable, and 
                  secure user experience. Hosted on robust infrastructure for global access.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle>Temporary Storage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  All content has automatic expiration dates. Clipboard content expires in 
                  24 hours, notes in 7 days, and files in 48 hours or after download limits.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="w-12 h-12 text-orange-600 mb-4" />
                <CardTitle>Global Accessibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Available worldwide with fast content delivery. Access your shared content 
                  from anywhere with simple 4-digit codes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Ad Unit */}
        <div className="mb-12">
          <AdUnit adSlot="1234567893" adFormat="rectangle" className="text-center" />
        </div>

        {/* Development & Open Source */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Development & Community</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600 space-y-4">
            <p>
              AnonShare is leveraging modern web 
              technologies including React, TypeScript, Tailwind CSS, and Supabase. 
              The platform is designed for scalability, security, and user privacy.
            </p>
            <p>
              We welcome feedback from our community of users who value privacy and 
              anonymous sharing. The platform serves thousands of users daily, from 
              developers and content creators to students and professionals.
            </p>
            <p>
              Our commitment to privacy-first design means we continuously evaluate 
              and improve our security measures while maintaining the simplicity that 
              makes AnonShare accessible to everyone.
            </p>
          </CardContent>
        </Card>

        {/* Contact & Support */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Support & Feedback</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600 space-y-4">
            <p>
              While we maintain minimal data collection practices, we're always 
              interested in improving the platform based on user feedback and needs.
            </p>
            <p>
              For questions about our privacy practices, terms of service, or general 
              platform feedback, please review our documentation pages or reach out 
              through appropriate channels.
            </p>
            <p>
              We're committed to maintaining AnonShare as a free, privacy-focused 
              platform that serves the global community's need for anonymous content sharing.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
