
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Users, Clock, Globe } from 'lucide-react';
import AdUnit from '@/components/AdUnit';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About AnonTools</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe in privacy-first digital tools that empower users to share content 
            without compromising their personal information or digital footprint.
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
              In an era where digital privacy is increasingly under threat, AnonTools was created 
              to provide a safe haven for anonymous content sharing. We understand that sometimes 
              you need to share information quickly without leaving a digital trail or going 
              through complex registration processes.
            </p>
            <p>
              Our platform serves developers, content creators, students, and professionals who 
              need fast, secure, and anonymous ways to share text, notes, and files. Whether 
              you're sharing a code snippet with a colleague, collaborating on a document, or 
              sending a file to a client, AnonTools ensures your privacy remains intact.
            </p>
          </CardContent>
        </Card>

        {/* Core Values */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <Shield className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>Privacy by Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We built our platform with privacy as the foundation. No user accounts, 
                  no tracking cookies, no data collection. Your content is yours alone.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle>User-Centric Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Every feature is designed with user experience in mind. Simple interfaces, 
                  intuitive workflows, and powerful functionality without complexity.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle>Temporary by Nature</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Content expires automatically to ensure your data doesn't linger on our 
                  servers longer than necessary. Clean, secure, and temporary storage.
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
                  Available worldwide with fast, reliable infrastructure. Share content 
                  across continents with the same simple code-based system.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* How It Works */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">How AnonTools Works</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">1. Create & Share</h3>
              <p className="text-gray-600">
                Paste your text, write a note, or upload a file. Our system automatically 
                generates a unique 4-6 digit code for easy sharing.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">2. Share the Code</h3>
              <p className="text-gray-600">
                Share the generated code with anyone who needs access. No usernames, 
                passwords, or personal information required.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">3. Retrieve Content</h3>
              <p className="text-gray-600">
                Recipients enter the code on our homepage to instantly access the shared 
                content. Simple, fast, and secure.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">4. Automatic Cleanup</h3>
              <p className="text-gray-600">
                Content automatically expires after a set period or download limit, 
                ensuring your data doesn't persist unnecessarily on our servers.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Ad Unit */}
        <div className="mb-12">
          <AdUnit adSlot="1234567893" adFormat="rectangle" className="text-center" />
        </div>

        {/* Technology & Security */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Technology & Security</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600 space-y-4">
            <p>
              AnonTools is built using modern web technologies including React, TypeScript, 
              and Tailwind CSS for a fast, responsive user experience. Our backend 
              infrastructure uses Supabase for secure data storage with row-level security 
              and automatic data cleanup.
            </p>
            <p>
              All content is stored temporarily and encrypted in transit using HTTPS. 
              We don't track users, store personal information, or use analytics cookies. 
              Our code-based sharing system ensures that only people with the correct 
              code can access shared content.
            </p>
            <p>
              File uploads are scanned for malware and stored in isolated containers. 
              Download limits and expiration dates provide additional security layers 
              to prevent misuse of the platform.
            </p>
          </CardContent>
        </Card>

        {/* Community & Support */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Community & Support</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600 space-y-4">
            <p>
              AnonTools is maintained by a team of privacy advocates and developers who 
              believe in the importance of anonymous, secure communication tools. We're 
              committed to keeping the platform free, fast, and privacy-focused.
            </p>
            <p>
              While we don't collect user data, we welcome feedback and suggestions 
              for improving the platform. Our goal is to create the best possible 
              anonymous sharing experience for users worldwide.
            </p>
            <p>
              The platform serves thousands of users daily, from individual developers 
              sharing code snippets to teams collaborating on projects. We're proud to 
              be part of the privacy-first movement in web applications.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
