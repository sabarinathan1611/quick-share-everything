
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ClipboardList, UserX, Lock, Zap, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const PastebinAlternativeNoLogin = () => {
  return (
    <>
      <Helmet>
        <title>Pastebin Alternative No Login Required - Anonymous Text Sharing | AnonShare</title>
        <meta name="description" content="Best Pastebin alternative with no login required. Share text, code, and documents anonymously without registration. Free, secure, and private text sharing." />
        <meta name="keywords" content="pastebin alternative, no login pastebin, anonymous pastebin, text sharing no registration, code sharing no login" />
        <meta property="og:title" content="Pastebin Alternative No Login Required - Anonymous Text Sharing | AnonShare" />
        <meta property="og:description" content="Best Pastebin alternative with no login required. Share text and code anonymously without registration." />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://anonshare.live/pastebin-alternative-no-login" />
      </Helmet>

      <div className="min-h-screen bg-sky-50">
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Best Pastebin Alternative - No Login Required
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Share text, code snippets, and documents instantly without creating an account. 
              The privacy-focused Pastebin alternative that respects your anonymity.
            </p>
          </div>

          {/* Quick Start CTA */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-12 text-center">
            <h2 className="text-2xl font-semibold mb-4">Try Our No-Login Pastebin Alternative</h2>
            <p className="text-gray-600 mb-4">Start sharing text immediately - no registration, no personal info required</p>
            <Link to="/clipboard">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <ClipboardList className="mr-2 h-5 w-5" />
                Start Sharing Now
              </Button>
            </Link>
          </div>

          {/* Why Choose Our Alternative */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our Pastebin Alternative?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <UserX className="mr-3 h-6 w-6 text-blue-600" />
                    No Registration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Unlike traditional pastebin services, we never ask for accounts, emails, or personal information.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lock className="mr-3 h-6 w-6 text-green-600" />
                    End-to-End Privacy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Your content is encrypted and we don't track users or collect browsing data.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="mr-3 h-6 w-6 text-yellow-600" />
                    Instant Sharing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Paste your content and get a shareable link in seconds - no waiting or verification.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Features Comparison */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Features That Make Us Different</h2>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Feature</th>
                      <th className="px-6 py-3 text-center text-sm font-medium text-gray-900">AnonShare</th>
                      <th className="px-6 py-3 text-center text-sm font-medium text-gray-900">Traditional Pastebin</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">No Registration Required</td>
                      <td className="px-6 py-4 text-center text-green-600">✓</td>
                      <td className="px-6 py-4 text-center text-red-600">✗</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">Anonymous Sharing</td>
                      <td className="px-6 py-4 text-center text-green-600">✓</td>
                      <td className="px-6 py-4 text-center text-yellow-600">Limited</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">Encrypted Content</td>
                      <td className="px-6 py-4 text-center text-green-600">✓</td>
                      <td className="px-6 py-4 text-center text-red-600">✗</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">Password Protection</td>
                      <td className="px-6 py-4 text-center text-green-600">✓</td>
                      <td className="px-6 py-4 text-center text-yellow-600">Paid Only</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">Auto-Expiration</td>
                      <td className="px-6 py-4 text-center text-green-600">✓</td>
                      <td className="px-6 py-4 text-center text-yellow-600">Limited</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Perfect for These Use Cases</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Code Sharing</CardTitle>
                  <CardDescription>Share code snippets without revealing your identity</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Bug reports and stack traces</li>
                    <li>• Code reviews and collaboration</li>
                    <li>• Tutorial examples</li>
                    <li>• Configuration files</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Anonymous Communication</CardTitle>
                  <CardDescription>Share sensitive information safely</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Whistleblowing documents</li>
                    <li>• Anonymous feedback</li>
                    <li>• Sensitive reports</li>
                    <li>• Confidential tips</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Text Sharing</CardTitle>
                  <CardDescription>Share any text content instantly</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Meeting notes</li>
                    <li>• Log files</li>
                    <li>• Documentation drafts</li>
                    <li>• Temporary messages</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Privacy-First Sharing</CardTitle>
                  <CardDescription>When anonymity matters most</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Legal documents</li>
                    <li>• Medical information</li>
                    <li>• Personal stories</li>
                    <li>• Research data</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">How Our No-Login Pastebin Alternative Works</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Paste Your Content</h3>
                  <p className="text-gray-600">
                    Visit our <Link to="/clipboard" className="text-blue-600 hover:underline">anonymous clipboard</Link> and 
                    paste your text, code, or any content you want to share.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Configure Privacy Settings</h3>
                  <p className="text-gray-600">
                    Set optional password protection and expiration time. Your content is automatically encrypted.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Get Your Anonymous Link</h3>
                  <p className="text-gray-600">
                    Receive a unique, untraceable link that you can share with anyone. No registration required.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Share Securely</h3>
                  <p className="text-gray-600">
                    Your recipients can access the content without any tracking or data collection on our part.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Security Features */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Advanced Security Features</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="mr-3 h-6 w-6 text-green-600" />
                    Automatic Encryption
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    All content is encrypted before storage using industry-standard encryption protocols.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="mr-3 h-6 w-6 text-blue-600" />
                    Self-Destructing Links
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Set custom expiration times or use default retention periods for automatic content deletion.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Related Tools */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">More Anonymous Sharing Tools</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Rich Text Notepad</CardTitle>
                  <CardDescription>Create formatted documents with our anonymous notepad</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/notepad">
                    <Button variant="outline" className="w-full">
                      Try Anonymous Notepad
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>File Sharing</CardTitle>
                  <CardDescription>Share files securely without registration</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/file-share">
                    <Button variant="outline" className="w-full">
                      Share Files Anonymously
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Try the Best Pastebin Alternative?</h2>
            <p className="text-gray-600 mb-6">Start sharing text anonymously without any registration requirements.</p>
            <Link to="/clipboard">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <ClipboardList className="mr-2 h-5 w-5" />
                Start Using Our Pastebin Alternative
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PastebinAlternativeNoLogin;
