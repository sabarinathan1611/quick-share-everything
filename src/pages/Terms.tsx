import { Helmet } from 'react-helmet-async';
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle, Users, Clock, Globe, Lock, FileText, Upload, Copy, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import AdUnit from '@/components/AdUnit';
import { Button } from '@/components/ui/button';

const Terms = () => (
  <>
    <Helmet>
      <title>Terms of Service - AnonShare</title>
      <meta name="description" content="Read the comprehensive terms of service for AnonShare. Understand your rights, responsibilities, and the rules for using our anonymous sharing platform." />
      <link rel="canonical" href="https://anonshare.live/terms" />
    </Helmet>
    <main className="min-h-screen bg-sky-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            These terms govern your use of AnonShare. By using our service, you agree to these terms and our privacy practices.
          </p>
        </header>

        {/* Terms Overview */}
        <section className="mb-12">
          <div className="bg-white rounded-lg p-8 shadow-md border">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">Service Overview</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2 text-foreground">Anonymous Platform</h3>
                <p className="text-sm text-muted-foreground">
                  No registration required. Share content without revealing your identity.
                </p>
              </div>
              <div className="text-center">
                <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2 text-foreground">Temporary Storage</h3>
                <p className="text-sm text-muted-foreground">
                  All content is automatically deleted after expiration periods.
                </p>
              </div>
              <div className="text-center">
                <Globe className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2 text-foreground">Global Access</h3>
                <p className="text-sm text-muted-foreground">
                  Available worldwide with simple 4-digit access codes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Acceptance of Terms */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
                1. Acceptance of Terms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                By accessing and using AnonShare ("the Service"), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service ("Terms"). If you do not agree to these terms, please do not use the Service.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-foreground">Important Notice</h4>
                <p className="text-sm text-muted-foreground">
                  These terms constitute a legally binding agreement between you and AnonShare. Your continued use of the service indicates your acceptance of any modifications to these terms.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Service Description */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-6 h-6 text-blue-600 mr-2" />
                2. Description of Service
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3 text-foreground">What We Provide</h3>
                  <p className="text-muted-foreground mb-4">
                    AnonShare is a privacy-first platform that enables anonymous and temporary sharing of text, notes, and files. Our service includes:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <Copy className="w-8 h-8 text-blue-600 mb-2" />
                      <h4 className="font-semibold text-sm mb-1">Anonymous Clipboard</h4>
                      <p className="text-xs text-muted-foreground">Text sharing with 24-hour expiration</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <FileText className="w-8 h-8 text-green-600 mb-2" />
                      <h4 className="font-semibold text-sm mb-1">Rich Notepad</h4>
                      <p className="text-xs text-muted-foreground">Formatted notes with 7-day retention</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <Upload className="w-8 h-8 text-purple-600 mb-2" />
                      <h4 className="font-semibold text-sm mb-1">File Sharing</h4>
                      <p className="text-xs text-muted-foreground">File uploads up to 50MB</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 text-foreground">Service Limitations</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>No Registration:</strong> We do not require user accounts or personal information</li>
                    <li>• <strong>Temporary Storage:</strong> All content is automatically deleted after expiration</li>
                    <li>• <strong>File Size Limits:</strong> Maximum 50MB per file upload</li>
                    <li>• <strong>No Persistent Data:</strong> We do not store personal or usage data</li>
                    <li>• <strong>Code-Based Access:</strong> Content is accessed via 4-digit codes only</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* User Conduct */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-6 h-6 text-green-600 mr-2" />
                3. User Conduct and Responsibilities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3 text-foreground">Your Responsibilities</h3>
                  <p className="text-muted-foreground mb-4">
                    You are solely responsible for the content you share through the Service. You agree to use the Service only for lawful purposes and in accordance with these Terms.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 text-foreground">Prohibited Content</h3>
                  <p className="text-muted-foreground mb-3">
                    You agree not to use the Service to share content that is:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground text-red-600">Illegal Content</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Copyrighted material without permission</li>
                        <li>• Malware, viruses, or harmful code</li>
                        <li>• Content that violates laws or regulations</li>
                        <li>• Stolen or unauthorized data</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground text-red-600">Harmful Content</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Threats, harassment, or abuse</li>
                        <li>• Defamatory or libelous material</li>
                        <li>• Obscene or pornographic content</li>
                        <li>• Content that promotes violence</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-foreground flex items-center">
                    <AlertTriangle className="w-4 h-4 text-yellow-600 mr-2" />
                    Content Monitoring
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    While we do not actively monitor content, we reserve the right to remove any content that violates these terms or applicable laws. 
                    We may also report illegal content to appropriate authorities.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Privacy and Data */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="w-6 h-6 text-purple-600 mr-2" />
                4. Privacy and Data Protection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  We are committed to protecting your privacy. Our privacy practices are detailed in our{' '}
                  <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>, 
                  which is incorporated into these Terms by reference.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">What We Don't Collect</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Personal information or identification</li>
                      <li>• IP addresses or location data</li>
                      <li>• Usage patterns or analytics</li>
                      <li>• Persistent tracking cookies</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Data Handling</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Temporary storage only</li>
                      <li>• Automatic deletion after expiration</li>
                      <li>• Encryption for sensitive content</li>
                      <li>• No data sharing with third parties</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Service Availability */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="w-6 h-6 text-orange-600 mr-2" />
                5. Service Availability and Limitations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">Service Availability</h3>
                  <p className="text-muted-foreground">
                    We strive to maintain high availability but cannot guarantee uninterrupted service. The Service may be temporarily unavailable due to maintenance, updates, or technical issues.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 text-foreground">Technical Limitations</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>File Size:</strong> Maximum 50MB per file upload</li>
                    <li>• <strong>Content Expiration:</strong> Automatic deletion after specified periods</li>
                    <li>• <strong>Access Method:</strong> 4-digit codes only</li>
                    <li>• <strong>No Recovery:</strong> Expired content cannot be restored</li>
                    <li>• <strong>No Editing:</strong> Content cannot be modified after sharing</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-foreground">Service Updates</h4>
                  <p className="text-sm text-muted-foreground">
                    We may update, modify, or discontinue features of the Service at any time. We will provide reasonable notice for significant changes that affect your use of the Service.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Advertising */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>6. Advertising and Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  The Service is supported by advertising revenue. We use Google AdSense to display advertisements on our platform.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Advertising Practices</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Google AdSense integration</li>
                      <li>• Non-intrusive ad placement</li>
                      <li>• No personal data shared with advertisers</li>
                      <li>• Ad blocking detection may apply</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">User Consent</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• By using the service, you consent to ads</li>
                      <li>• Third-party cookies may be used</li>
                      <li>• You can opt out of personalized ads</li>
                      <li>• Ad preferences can be managed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Disclaimers */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="w-6 h-6 text-red-600 mr-2" />
                7. Disclaimers and Limitations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">Service Disclaimer</h3>
                  <p className="text-muted-foreground">
                    The Service is provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not guarantee that the service will be error-free, uninterrupted, or secure.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 text-foreground">Limitation of Liability</h3>
                  <p className="text-muted-foreground">
                    In no event shall AnonShare be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 text-foreground">Content Responsibility</h3>
                  <p className="text-muted-foreground">
                    We are not responsible for the content shared through our platform. Users are solely responsible for ensuring their content complies with applicable laws and these Terms.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Changes to Terms */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>8. Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  We reserve the right to modify these Terms at any time. When we make changes, we will update the "Last Updated" date at the bottom of this page.
                </p>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-foreground">Continued Use</h4>
                  <p className="text-sm text-muted-foreground">
                    Your continued use of the Service after any changes to these Terms constitutes your acceptance of the new terms. If you do not agree to the modified terms, you should discontinue using the Service.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Notification of Changes</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Material changes will be prominently displayed</li>
                    <li>• Users will be notified of significant updates</li>
                    <li>• Previous versions will be archived</li>
                    <li>• Changes take effect immediately upon posting</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Ad Unit */}
        <div className="mb-12">
          <AdUnit adSlot="1234567890" adFormat="horizontal" className="text-center" />
        </div>

        {/* Contact Information */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong>Email:</strong>{' '}
                    <a href="mailto:support@anonshare.live" className="text-primary hover:underline">
                      support@anonshare.live
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    We aim to respond to all inquiries within 48 hours.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Terms Summary */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Terms Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Your Rights</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Use the service anonymously</li>
                    <li>• Share content without registration</li>
                    <li>• Access content with valid codes</li>
                    <li>• Privacy protection guaranteed</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Your Responsibilities</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Share only legal content</li>
                    <li>• Respect others' privacy</li>
                    <li>• Keep access codes secure</li>
                    <li>• Accept service limitations</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Start Sharing?</h2>
          <p className="text-lg mb-6 opacity-90">
            By using AnonShare, you agree to these terms and our commitment to privacy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/clipboard">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Start Sharing Now
              </Button>
            </Link>
            <Link to="/privacy">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600">
                Read Privacy Policy
              </Button>
            </Link>
          </div>
        </section>

        {/* Last Updated */}
        <div className="text-center text-sm text-muted-foreground">
          <p>Last Updated: January 15, 2025</p>
        </div>
      </div>
    </main>
  </>
);

export default Terms;
