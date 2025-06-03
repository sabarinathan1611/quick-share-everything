import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AdUnit from '@/components/AdUnit';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-sky-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            Last updated: December 15, 2024
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Effective immediately for all users of AnonShare
          </p>
        </div>

        {/* Ad Unit */}
        <div className="mb-12">
          <AdUnit adSlot="1234567898" adFormat="horizontal" className="text-center" />
        </div>

        {/* Privacy Policy Content */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Our Privacy Commitment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                AnonShare is built on the principle of privacy by design. We collect minimal 
                data necessary to provide our anonymous sharing services and automatically 
                delete all content according to our retention schedules. This policy explains 
                our data practices in detail.
              </p>
              <p className="text-gray-600">
                We believe in transparency about data collection and processing. Unlike many 
                platforms, AnonShare operates on a "minimal collection" principle, gathering 
                only what's necessary to deliver our sharing services.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                We collect only the minimal information necessary to provide our services:
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Content You Share</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600">
                    <li>Text content from clipboard sharing</li>
                    <li>Rich text notes and formatting</li>
                    <li>Uploaded files (up to 50MB)</li>
                    <li>Generated access codes for content retrieval</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Optional Information</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600">
                    <li>Email addresses (only when you choose to receive notifications)</li>
                    <li>Password protection settings for shared content</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Technical Information</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600">
                    <li>Anonymous usage statistics for service improvement</li>
                    <li>Error logs for debugging (automatically purged)</li>
                    <li>Basic performance metrics</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What We Don't Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                To ensure maximum privacy, we explicitly do NOT collect:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Personal identification information (names, addresses, phone numbers)</li>
                <li>User accounts or persistent profiles</li>
                <li>IP addresses for content identification purposes</li>
                <li>Device fingerprints or browser signatures</li>
                <li>Location data or geographic information</li>
                <li>Social media connections or external account links</li>
                <li>Browsing history or cross-site tracking data</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Use of Cookies and Tracking</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                AnonShare uses minimal cookies and tracking technologies:
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Essential Cookies</h4>
                  <p className="text-gray-600">
                    Required for basic functionality including session management and 
                    security features. These cannot be disabled.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Analytics Cookies</h4>
                  <p className="text-gray-600">
                    Anonymous usage analytics to understand how our service is used 
                    and improve performance. No personal identification.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Advertising Cookies</h4>
                  <p className="text-gray-600">
                    Used by Google AdSense to display relevant advertisements. These 
                    are managed by Google according to their privacy policies.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Storage and Retention</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                All content on AnonShare is temporary by design:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li><strong>Clipboard content:</strong> Automatically deleted after 24 hours</li>
                <li><strong>Notepad content:</strong> Automatically deleted after 7 days</li>
                <li><strong>File uploads:</strong> Automatically deleted after 48 hours or when download limits are reached</li>
                <li><strong>Access codes:</strong> Deleted when associated content expires</li>
                <li><strong>Email notifications:</strong> Email addresses are deleted immediately after sending</li>
                <li><strong>Server logs:</strong> Technical logs are automatically purged after 7 days</li>
              </ul>
              <p className="text-gray-600">
                There is no way to recover deleted content, and expiration times cannot 
                be extended. This is by design to ensure your privacy and data security.
              </p>
            </CardContent>
          </Card>

          {/* Ad Unit */}
          <div className="my-8">
            <AdUnit adSlot="1234567899" adFormat="rectangle" className="text-center" />
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Third-Party Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                AnonShare integrates with carefully selected third-party services:
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Supabase (Database & Storage)</h4>
                  <p className="text-gray-600">
                    Provides secure database and file storage services with encryption 
                    and row-level security. Data is stored temporarily according to our retention policy.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Resend (Email Service)</h4>
                  <p className="text-gray-600">
                    Used only for sending optional recovery emails when requested. Email 
                    addresses are not stored after sending.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Google AdSense</h4>
                  <p className="text-gray-600">
                    Displays privacy-respecting advertisements to support the free service. 
                    Managed according to Google's privacy policies.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Lovable Platform</h4>
                  <p className="text-gray-600">
                    Hosting and development platform that provides the infrastructure 
                    for AnonShare with security and privacy protections.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>GDPR and CCPA Compliance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                AnonShare is designed to comply with major privacy regulations:
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">GDPR Compliance (EU)</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600">
                    <li>Minimal data collection by design</li>
                    <li>Automatic data deletion within specified timeframes</li>
                    <li>No personal data processing without user consent</li>
                    <li>Transparent privacy practices</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">CCPA Compliance (California)</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600">
                    <li>No sale of personal information</li>
                    <li>Transparent data collection practices</li>
                    <li>Automatic deletion of data</li>
                    <li>User control over data sharing</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-600">
                Since we collect minimal personal information and delete all data 
                automatically, traditional data subject rights (like access requests) 
                are largely unnecessary, but we maintain compliance with applicable regulations.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Privacy Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                While AnonShare collects minimal personal information, you have these rights:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>The right to use our service completely anonymously</li>
                <li>The right to control who accesses your content through code sharing</li>
                <li>The right to know that your content will be automatically deleted</li>
                <li>The right to opt-out of optional features like email notifications</li>
                <li>The right to expect transparent privacy practices</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Security Measures</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                We implement comprehensive security measures to protect your data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>HTTPS encryption for all data transmission</li>
                <li>Secure, randomly generated access codes</li>
                <li>Automated malware scanning for uploaded files</li>
                <li>Row-level security policies in our database</li>
                <li>Regular security audits and updates</li>
                <li>DDoS protection and rate limiting</li>
                <li>Isolated storage systems for different content types</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                We may update this privacy policy to reflect changes in our practices 
                or legal requirements. Updates will be posted on this page with a new 
                revision date. Continued use of AnonShare after changes constitutes 
                acceptance of the updated policy.
              </p>
              <p className="text-gray-600">
                Our core commitment to privacy-by-design and minimal data collection 
                will remain unchanged regardless of policy updates.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact and Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Questions about this privacy policy or our privacy practices can be 
                addressed through the information provided on our About page. We're 
                committed to maintaining transparency while protecting user privacy.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
