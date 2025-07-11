import { Helmet } from 'react-helmet';
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ClipboardList, FileText, Upload, Key, Clock, Trash2, Shield, Users, Globe, Zap, Lock, CheckCircle, AlertTriangle, Copy, Download, Eye, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import AdUnit from '@/components/AdUnit';

const HowItWorks = () => (
  <>
    <Helmet>
      <title>How It Works – AnonShare</title>
      <meta name="description" content="Learn how AnonShare lets you share text, notes, and files anonymously. A comprehensive step-by-step guide to using our clipboard, notepad, and secure file sharing tools with privacy protection." />
      <meta name="robots" content="index, follow" />
    </Helmet>
    <main className="min-h-screen bg-sky-50">
      <section className="max-w-4xl mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">How AnonShare Works</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AnonShare is designed for simplicity, speed, and privacy. Follow these steps to share content securely and anonymously in seconds. 
            No accounts, no tracking, just simple and secure sharing.
          </p>
        </header>

        {/* Quick Overview */}
        <section className="mb-16">
          <div className="bg-white rounded-lg p-8 shadow-md border">
            <h2 className="text-2xl font-semibold mb-6 text-center text-foreground">The AnonShare Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Upload className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">1. Upload Content</h3>
                <p className="text-sm text-muted-foreground">Paste text, create notes, or upload files</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-green-600 text-xl font-bold">3453</span>
                </div>
                <h3 className="font-semibold mb-2 text-foreground">2. Get Code</h3>
                <p className="text-sm text-muted-foreground">Receive unique 4-digit access code</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">3. Share Code</h3>
                <p className="text-sm text-muted-foreground">Send code to intended recipients</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Download className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">4. Access Content</h3>
                <p className="text-sm text-muted-foreground">Enter code to retrieve shared content</p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Steps */}
        <section className="space-y-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Step-by-Step Guide</h2>
          
          {/* Step 1 */}
          <div className="bg-white rounded-lg p-8 shadow-md border">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-2xl font-bold">1</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Choose Your Sharing Tool</h3>
                <p className="text-muted-foreground mb-6">
                  We offer three specialized tools designed for different sharing needs. Each tool is optimized for its specific use case:
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
                        <li>• 7-day retention</li>
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
                      <CardTitle className="text-lg">Secure File Share</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        Upload and share files up to 50MB with download tracking.
                      </p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• 50MB file limit</li>
                        <li>• Download limits</li>
                        <li>• 48-hour expiration</li>
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

          {/* Step 2 */}
          <div className="bg-white rounded-lg p-8 shadow-md border">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-2xl font-bold">2</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Add Your Content Securely</h3>
                <p className="text-muted-foreground mb-6">
                  Simply paste your text, write in the rich editor, or drag and drop files. No personal information required - your privacy is guaranteed from the start.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground flex items-center">
                      <Shield className="w-5 h-5 text-blue-600 mr-2" />
                      Security Features
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Optional password protection for sensitive content</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>End-to-end encryption for enhanced security</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>No personal data collection or tracking</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Secure file handling and storage</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground flex items-center">
                      <Zap className="w-5 h-5 text-green-600 mr-2" />
                      What You Can Share
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Text snippets and code</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Formatted notes and documents</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Files up to 50MB (any type)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Links and references</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="bg-white rounded-lg p-8 shadow-md border">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 text-2xl font-bold">3</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Get Your Unique Share Code</h3>
                <p className="text-muted-foreground mb-6">
                  Once you submit your content, our system generates a unique, 4-digit numeric code (e.g., 3453). This code is your content's key and is designed to be easy to share and remember.
                </p>
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold mb-3 text-foreground">Code Generation Process</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <Key className="w-6 h-6 text-blue-600" />
                      </div>
                      <p className="font-semibold text-foreground">Cryptographically Secure</p>
                      <p className="text-muted-foreground">Random generation prevents guessing</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <Eye className="w-6 h-6 text-green-600" />
                      </div>
                      <p className="font-semibold text-foreground">Unique & Unpredictable</p>
                      <p className="text-muted-foreground">Each code is tied to specific content</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <Globe className="w-6 h-6 text-purple-600" />
                      </div>
                      <p className="font-semibold text-foreground">Global Access</p>
                      <p className="text-muted-foreground">Works from anywhere in the world</p>
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-foreground flex items-center">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                    Important Security Note
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Keep your share code secure. Anyone with the code can access your content until it expires. 
                    For sensitive information, consider using the optional password protection feature.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 4 */}
          <div className="bg-white rounded-lg p-8 shadow-md border">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 text-2xl font-bold">4</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Share and Retrieve Content</h3>
                <p className="text-muted-foreground mb-6">
                  Share the 4-digit code with your intended recipients through any communication method. They can then access the content instantly by entering the code on our homepage.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">For Content Creators</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Share the code via messaging apps</li>
                      <li>• Include in emails or documents</li>
                      <li>• Post in team collaboration tools</li>
                      <li>• Use in presentations or meetings</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">For Content Recipients</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Visit AnonShare homepage</li>
                      <li>• Enter the 4-digit code</li>
                      <li>• Access content instantly</li>
                      <li>• Download or copy as needed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security & Privacy Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Security & Privacy Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Clock className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <CardTitle>Automatic Expiration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  All content has built-in expiration periods to protect your privacy:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• <strong>Clipboard:</strong> 24 hours</li>
                  <li>• <strong>Notepad:</strong> 7 days</li>
                  <li>• <strong>Files:</strong> 48 hours</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Trash2 className="w-10 h-10 text-green-600 mx-auto mb-4" />
                <CardTitle>Permanent Deletion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Once content expires or reaches download limits, it is permanently and irrecoverably erased from our servers.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Complete data removal</li>
                  <li>• No backup retention</li>
                  <li>• Secure deletion protocols</li>
                  <li>• Privacy compliance</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Lock className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                <CardTitle>No Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  We don't track your activity or collect personal information:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• No tracking cookies</li>
                  <li>• No IP logging</li>
                  <li>• No usage analytics</li>
                  <li>• No personal data collection</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ad Unit */}
        <div className="mb-16">
          <AdUnit adSlot="1234567890" adFormat="horizontal" className="text-center" />
        </div>

        {/* Use Cases Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Common Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="w-6 h-6 text-blue-600 mr-2" />
                  For Developers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Share code snippets with team members</li>
                  <li>• Debug log analysis and troubleshooting</li>
                  <li>• Configuration file sharing</li>
                  <li>• API documentation distribution</li>
                  <li>• Quick code reviews and feedback</li>
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
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Share draft articles with editors</li>
                  <li>• Creative briefs and project notes</li>
                  <li>• Research materials and sources</li>
                  <li>• Client collaboration documents</li>
                  <li>• Content review and feedback</li>
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
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Share study notes with classmates</li>
                  <li>• Project collaboration files</li>
                  <li>• Research materials and papers</li>
                  <li>• Assignment submissions</li>
                  <li>• Group project coordination</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-6 h-6 text-orange-600 mr-2" />
                  For Business
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Quick document sharing</li>
                  <li>• Meeting notes and minutes</li>
                  <li>• Proposal and presentation files</li>
                  <li>• Temporary file transfers</li>
                  <li>• Client document delivery</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Start Sharing Securely?</h2>
          <p className="text-lg mb-6 opacity-90">
            Experience the simplicity and security of anonymous sharing with AnonShare. 
            No registration required - start sharing immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/clipboard">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Start Sharing Now
              </Button>
            </Link>
            <Link to="/faq">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600">
                View FAQ
              </Button>
            </Link>
          </div>
        </section>
      </section>
    </main>
  </>
);

export default HowItWorks; 