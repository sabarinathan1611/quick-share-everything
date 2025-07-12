
import { Helmet } from 'react-helmet-async';
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Zap, Globe, Users, Lock, FileText, Upload, Copy, Clock, AlertTriangle, CheckCircle, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import AdUnit from '@/components/AdUnit';

const HowToShareTextAnonymously = () => (
  <>
    <Helmet>
      <title>How to Share Text Anonymously - Complete Guide</title>
      <meta name="description" content="Learn how to share text anonymously without registration. Complete guide to secure text sharing, privacy protection, and anonymous communication tools." />
      <meta name="robots" content="index, follow" />
    </Helmet>
    <main className="min-h-screen bg-sky-50">
      <section className="max-w-4xl mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">How to Share Text Anonymously</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive guide to sharing text securely and anonymously without revealing your identity. 
            Learn the best practices for privacy-first text sharing.
          </p>
        </header>

        {/* Why Share Anonymously */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Why Share Text Anonymously?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Protect Your Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Avoid leaving digital footprints and protect your personal information from being collected, stored, or sold to third parties.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Instant Sharing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Share text immediately without the hassle of creating accounts, verifying emails, or dealing with complex registration processes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Global Accessibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access your shared content from anywhere in the world with simple codes that work on all devices and browsers.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Step-by-Step Guide to Anonymous Text Sharing</h2>
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-8 shadow-md border">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-xl font-bold">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">Choose Your Sharing Method</h3>
                  <p className="text-muted-foreground mb-6">
                    AnonShare offers three different tools for anonymous text sharing, each optimized for specific use cases:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader>
                        <Copy className="w-8 h-8 text-blue-600 mb-2" />
                        <CardTitle className="text-lg">Anonymous Clipboard</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-3">
                          Perfect for quick text sharing, code snippets, and temporary notes.
                        </p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• 24-hour expiration</li>
                          <li>• No character limits</li>
                          <li>• Optional password protection</li>
                          <li>• Instant sharing</li>
                        </ul>
                        <Link to="/clipboard">
                          <Button size="sm" className="w-full mt-3">Try Clipboard</Button>
                        </Link>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <FileText className="w-8 h-8 text-green-600 mb-2" />
                        <CardTitle className="text-lg">Rich Notepad</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-3">
                          Create formatted notes with headers, lists, links, and styling.
                        </p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• 24-hour retention</li>
                          <li>• Rich text editor</li>
                          <li>• Formatting options</li>
                          <li>• Collaborative notes</li>
                        </ul>
                        <Link to="/notepad">
                          <Button size="sm" className="w-full mt-3">Create Notes</Button>
                        </Link>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <Upload className="w-8 h-8 text-purple-600 mb-2" />
                        <CardTitle className="text-lg">File Sharing</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-3">
                          Upload text files and documents up to 50MB for sharing.
                        </p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• 50MB file limit</li>
                          <li>• Download limits</li>
                          <li>• 24-hour expiration</li>
                          <li>• All file types</li>
                        </ul>
                        <Link to="/file-share">
                          <Button size="sm" className="w-full mt-3">Share Files</Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md border">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-xl font-bold">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">Prepare Your Content</h3>
                  <p className="text-muted-foreground mb-6">
                    Before sharing, consider these important factors for secure and effective anonymous text sharing:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Content Preparation</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Remove any personal identifiers from your text</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Check for sensitive information that shouldn't be shared</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Format your text appropriately for the tool you're using</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Consider using password protection for sensitive content</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Security Considerations</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <AlertTriangle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Never share passwords or sensitive credentials</span>
                        </li>
                        <li className="flex items-start">
                          <AlertTriangle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Avoid sharing personal or financial information</span>
                        </li>
                        <li className="flex items-start">
                          <AlertTriangle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Be aware that content will expire automatically</span>
                        </li>
                        <li className="flex items-start">
                          <AlertTriangle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Keep your access codes secure and private</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md border">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 text-xl font-bold">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">Share and Get Your Code</h3>
                  <p className="text-muted-foreground mb-6">
                    Once you've prepared your content, follow these steps to share it anonymously:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="font-semibold mb-3 text-foreground">Sharing Process</h4>
                      <ol className="space-y-3 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
                          <span>Navigate to your chosen tool (Clipboard, Notepad, or File Share)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
                          <span>Paste or enter your text content in the provided area</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
                          <span>Optionally add a password for additional security</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">4</span>
                          <span>Click the share button to generate your unique 4-digit code</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">5</span>
                          <span>Copy or note down your 4-digit access code</span>
                        </li>
                      </ol>
                    </div>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <h4 className="font-semibold mb-2 text-foreground flex items-center">
                        <AlertTriangle className="w-4 h-4 text-yellow-600 mr-2" />
                        Important Security Note
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Keep your access code secure. Anyone with the code can access your content until it expires. 
                        For sensitive information, always use password protection.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md border">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 text-xl font-bold">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">Distribute Your Access Code</h3>
                  <p className="text-muted-foreground mb-6">
                    Share your 4-digit code with intended recipients through any communication method:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Sharing Methods</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• <strong>Messaging Apps:</strong> WhatsApp, Telegram, Signal, etc.</li>
                        <li>• <strong>Email:</strong> Include the code in email body or subject</li>
                        <li>• <strong>Team Platforms:</strong> Slack, Microsoft Teams, Discord</li>
                        <li>• <strong>Phone:</strong> Call or text the code to recipients</li>
                        <li>• <strong>In Person:</strong> Share the code verbally or on paper</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Best Practices</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• <strong>Verify Recipients:</strong> Ensure you're sharing with the right person</li>
                        <li>• <strong>Secure Channels:</strong> Use encrypted messaging when possible</li>
                        <li>• <strong>Clear Instructions:</strong> Tell recipients to visit AnonShare homepage</li>
                        <li>• <strong>Time Sensitivity:</strong> Remind recipients about expiration times</li>
                        <li>• <strong>Backup Plan:</strong> Have alternative sharing methods ready</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Best Practices for Anonymous Text Sharing</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-6 h-6 text-blue-600 mr-2" />
                  Privacy Protection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Use password protection for sensitive content</li>
                  <li>• Avoid sharing personal or identifying information</li>
                  <li>• Be aware of content expiration times</li>
                  <li>• Don't reuse access codes for different content</li>
                  <li>• Consider using VPN for additional privacy</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-6 h-6 text-green-600 mr-2" />
                  Efficiency Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Choose the right tool for your content type</li>
                  <li>• Format text appropriately before sharing</li>
                  <li>• Keep access codes handy for quick sharing</li>
                  <li>• Use clear, descriptive content titles</li>
                  <li>• Plan for content expiration in advance</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-6 h-6 text-purple-600 mr-2" />
                  Collaboration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Communicate expiration times to recipients</li>
                  <li>• Provide clear instructions for accessing content</li>
                  <li>• Use secure channels to share access codes</li>
                  <li>• Have backup sharing methods available</li>
                  <li>• Follow up to ensure content was received</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="w-6 h-6 text-orange-600 mr-2" />
                  Security Measures
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Never share passwords or credentials</li>
                  <li>• Avoid sharing financial information</li>
                  <li>• Be cautious with sensitive business data</li>
                  <li>• Monitor who has access to your codes</li>
                  <li>• Report any security concerns immediately</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ad Unit */}
        <div className="mb-16">
          <AdUnit adSlot="1234567890" adFormat="horizontal" className="text-center" />
        </div>

        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Common Use Cases for Anonymous Text Sharing</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Copy className="w-6 h-6 text-blue-600 mr-2" />
                  For Developers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Share code snippets, configuration files, and debug logs with team members instantly.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Code snippet sharing and reviews</li>
                  <li>• Debug log analysis</li>
                  <li>• Configuration file sharing</li>
                  <li>• API documentation</li>
                  <li>• Error message sharing</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-6 h-6 text-green-600 mr-2" />
                  For Content Creators
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Share draft articles, creative briefs, and collaboration notes with clients and team members.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Draft article sharing</li>
                  <li>• Creative briefs and concepts</li>
                  <li>• Research notes and sources</li>
                  <li>• Client feedback and revisions</li>
                  <li>• Content collaboration</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-6 h-6 text-purple-600 mr-2" />
                  For Students
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Share study notes, project files, and research materials with classmates and colleagues.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Study notes and summaries</li>
                  <li>• Project collaboration</li>
                  <li>• Research materials</li>
                  <li>• Assignment submissions</li>
                  <li>• Group project coordination</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="w-6 h-6 text-orange-600 mr-2" />
                  For Business
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Share meeting notes, proposals, and documents quickly without complex approval processes.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Meeting notes and minutes</li>
                  <li>• Business proposals</li>
                  <li>• Document sharing</li>
                  <li>• Quick information sharing</li>
                  <li>• Client communication</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Start Sharing Text Anonymously?</h2>
          <p className="text-lg mb-6 opacity-90">
            Experience the simplicity and security of anonymous text sharing with AnonShare. 
            No registration required - start sharing immediately.
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
      </section>
    </main>
  </>
);

export default HowToShareTextAnonymously;
