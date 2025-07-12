
import { Helmet } from 'react-helmet-async';
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, Shield, Zap, Globe, Users, Lock, FileText, Upload, Copy, Clock, AlertTriangle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import AdUnit from '@/components/AdUnit';

const PastebinAlternativeNoLogin = () => (
  <>
    <Helmet>
      <title>Pastebin Alternative No Login - AnonShare</title>
      <meta name="description" content="Discover AnonShare as the best Pastebin alternative with no login required. Compare features, privacy, and ease of use. Share text, code, and files anonymously without registration." />
      <meta name="robots" content="index, follow" />
    </Helmet>
    <main className="min-h-screen bg-sky-50">
      <section className="max-w-4xl mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">The Best Pastebin Alternative - No Login Required</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tired of creating accounts just to share a simple text snippet? AnonShare is the privacy-first alternative 
            that lets you share text, code, and files instantly without any registration or personal information.
          </p>
        </header>

        {/* Why Choose AnonShare */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Why Choose AnonShare Over Traditional Pastebin?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>True Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No accounts, no tracking, no personal data collection. Your privacy is guaranteed from the moment you start sharing.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Zap className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Instant Sharing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Share content in seconds with simple 4-digit codes. No complex URLs or account setup required.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Globe className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Global Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access your shared content from anywhere in the world with just a code. Works on all devices and browsers.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Feature Comparison</h2>
          <div className="bg-white rounded-lg shadow-md border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Feature</th>
                    <th className="px-6 py-4 text-center font-semibold text-foreground">AnonShare</th>
                    <th className="px-6 py-4 text-center font-semibold text-foreground">Traditional Pastebin</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium text-foreground">Account Required</td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <XCircle className="w-5 h-5 text-red-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-foreground">Personal Data Collection</td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <XCircle className="w-5 h-5 text-red-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-foreground">Tracking & Analytics</td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <XCircle className="w-5 h-5 text-red-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-foreground">Simple Access Codes</td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <XCircle className="w-5 h-5 text-red-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-foreground">File Sharing</td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <XCircle className="w-5 h-5 text-red-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-foreground">Rich Text Editor</td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <XCircle className="w-5 h-5 text-red-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-foreground">Automatic Expiration</td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <XCircle className="w-5 h-5 text-red-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-foreground">Password Protection</td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Perfect Use Cases for AnonShare</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Copy className="w-6 h-6 text-blue-600 mr-2" />
                  Code Sharing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Share code snippets, configuration files, and debug logs with team members instantly.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Quick code reviews and feedback</li>
                  <li>• Debug log analysis</li>
                  <li>• Configuration file sharing</li>
                  <li>• API documentation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-6 h-6 text-green-600 mr-2" />
                  Content Collaboration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Share draft articles, creative briefs, and collaboration notes with clients and team members.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Draft article sharing</li>
                  <li>• Creative briefs</li>
                  <li>• Research notes</li>
                  <li>• Client collaboration</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Upload className="w-6 h-6 text-purple-600 mr-2" />
                  File Sharing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Upload and share files up to 50MB with automatic expiration and download tracking.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Document sharing</li>
                  <li>• Image and media files</li>
                  <li>• Archive files</li>
                  <li>• Temporary file transfers</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-6 h-6 text-orange-600 mr-2" />
                  Team Communication
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Share meeting notes, project updates, and important information with team members.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Meeting notes and minutes</li>
                  <li>• Project updates</li>
                  <li>• Important announcements</li>
                  <li>• Quick information sharing</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Advantages Over Traditional Tools */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Advantages Over Traditional Sharing Tools</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Privacy & Security</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">No Personal Data Collection</h4>
                    <p className="text-sm text-muted-foreground">
                      Unlike traditional tools, we don't collect names, emails, or any personal information.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">No Tracking</h4>
                    <p className="text-sm text-muted-foreground">
                      We don't use tracking cookies or monitor your activity on our platform.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Automatic Expiration</h4>
                    <p className="text-sm text-muted-foreground">
                      All content is automatically deleted after expiration periods for enhanced privacy.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Ease of Use</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">No Registration Required</h4>
                    <p className="text-sm text-muted-foreground">
                      Start sharing immediately without creating accounts or providing personal information.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Simple Access Codes</h4>
                    <p className="text-sm text-muted-foreground">
                      Share content with easy-to-remember 4-digit codes instead of complex URLs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Multiple Sharing Options</h4>
                    <p className="text-sm text-muted-foreground">
                      Choose from clipboard, notepad, or file sharing based on your needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ad Unit */}
        <div className="mb-16">
          <AdUnit adSlot="1234567890" adFormat="horizontal" className="text-center" />
        </div>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">How AnonShare Works</h2>
          <div className="bg-white rounded-lg p-8 shadow-md border">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Upload className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">1. Share Content</h3>
                <p className="text-sm text-muted-foreground">
                  Paste text, create notes, or upload files using our anonymous tools
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-green-600 text-xl font-bold">1234</span>
                </div>
                <h3 className="font-semibold mb-2 text-foreground">2. Get Code</h3>
                <p className="text-sm text-muted-foreground">
                  Receive a unique 4-digit code for your shared content
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">3. Share Code</h3>
                <p className="text-sm text-muted-foreground">
                  Give the code to anyone who needs access to your content
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Clock className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">4. Auto-Expire</h3>
                <p className="text-sm text-muted-foreground">
                  Content automatically expires and is permanently deleted
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">What Users Say About AnonShare</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500" />
                </div>
                <p className="text-muted-foreground mb-4">
                  "Perfect for sharing code snippets with my team. No account creation needed, and the 4-digit codes are so much easier than long URLs."
                </p>
                <p className="text-sm font-semibold text-foreground">- Developer</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500" />
                </div>
                <p className="text-muted-foreground mb-4">
                  "Finally, a sharing tool that respects privacy. No tracking, no accounts, just simple and secure sharing."
                </p>
                <p className="text-sm font-semibold text-foreground">- Privacy Advocate</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500" />
                </div>
                <p className="text-muted-foreground mb-4">
                  "The file sharing feature is amazing. I can share documents with clients without worrying about email size limits."
                </p>
                <p className="text-sm font-semibold text-foreground">- Business Professional</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Try the Best Pastebin Alternative?</h2>
          <p className="text-lg mb-6 opacity-90">
            Experience the simplicity and privacy of AnonShare. No registration required - start sharing immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/clipboard">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Start Sharing Now
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600">
                Learn How It Works
              </Button>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Is AnonShare really free?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! All features of AnonShare are completely free. There are no hidden fees, premium tiers, or limitations on usage.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How secure is my data?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your data is protected with encryption, automatic expiration, and no personal data collection. Optional password protection adds extra security.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Can I recover expired content?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No, expired content is permanently deleted for privacy reasons. We cannot recover deleted or expired content.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What file types are supported?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You can upload any file type up to 50MB. This includes documents, images, videos, audio files, and archives.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </section>
    </main>
  </>
);

export default PastebinAlternativeNoLogin;
