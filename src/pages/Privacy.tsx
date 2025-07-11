import { Helmet } from 'react-helmet-async';
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, Eye, Trash2, Globe, Users, Clock, AlertTriangle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import AdUnit from '@/components/AdUnit';
import { Button } from '@/components/ui/button';

const Privacy = () => (
  <>
    <Helmet>
      <title>Privacy Policy - AnonShare</title>
      <meta
        name="description"
        content="Our comprehensive privacy policy details our commitment to your anonymity. We do not collect personal data, use tracking cookies, or store user information. All shared content is automatically deleted for your privacy."
      />
      <link rel="canonical" href="https://anonshare.live/privacy" />
    </Helmet>
    <main className="min-h-screen bg-sky-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your privacy is our fundamental principle. This policy explains how we protect your data and maintain true anonymity.
          </p>
        </header>

        {/* Privacy Overview */}
        <section className="mb-12">
          <div className="bg-white rounded-lg p-8 shadow-md border">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">Our Privacy Commitment</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2 text-foreground">Zero Data Collection</h3>
                <p className="text-sm text-muted-foreground">
                  We do not collect, store, or process any personal information about our users.
                </p>
              </div>
              <div className="text-center">
                <Lock className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2 text-foreground">Automatic Deletion</h3>
                <p className="text-sm text-muted-foreground">
                  All shared content is automatically deleted after expiration periods.
                </p>
              </div>
              <div className="text-center">
                <Eye className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2 text-foreground">No Tracking</h3>
                <p className="text-sm text-muted-foreground">
                  We do not use tracking cookies or monitor user activity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Information We Do Not Collect */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="w-6 h-6 text-red-500 mr-2" />
                Information We Do Not Collect
              </CardTitle>
              <CardDescription>
                We are committed to true anonymity and do not collect any personal data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-foreground">Personal Information</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>No names or email addresses</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>No phone numbers or addresses</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>No social media accounts</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>No account creation required</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-foreground">Technical Data</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>No IP address logging</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>No browser fingerprinting</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>No device information</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>No usage analytics</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Data Handling */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="w-6 h-6 text-blue-600 mr-2" />
                How We Handle Your Data
              </CardTitle>
              <CardDescription>
                Transparent information about our data handling practices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3 text-foreground">Content Storage</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    When you share content through AnonShare, we temporarily store it on secure servers with the following protections:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Encryption:</strong> All data is encrypted in transit and at rest</li>
                    <li>• <strong>Temporary Storage:</strong> Content is only stored for the specified expiration period</li>
                    <li>• <strong>Access Control:</strong> Only those with the correct code can access content</li>
                    <li>• <strong>No Metadata:</strong> We don't store information about who created or accessed content</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 text-foreground">Expiration and Deletion</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <Clock className="w-8 h-8 text-blue-600 mb-2" />
                      <h4 className="font-semibold text-sm mb-1">Clipboard Content</h4>
                      <p className="text-xs text-muted-foreground">Automatically deleted after 24 hours</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <Clock className="w-8 h-8 text-green-600 mb-2" />
                      <h4 className="font-semibold text-sm mb-1">Notepad Content</h4>
                      <p className="text-xs text-muted-foreground">Automatically deleted after 7 days</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <Clock className="w-8 h-8 text-purple-600 mb-2" />
                      <h4 className="font-semibold text-sm mb-1">File Content</h4>
                      <p className="text-xs text-muted-foreground">Automatically deleted after 48 hours</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 text-foreground">Security Measures</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>End-to-End Encryption:</strong> Optional password protection encrypts content</li>
                    <li>• <strong>Secure Servers:</strong> All data is stored on secure, encrypted servers</li>
                    <li>• <strong>Access Logs:</strong> We do not maintain logs of who accesses content</li>
                    <li>• <strong>Regular Audits:</strong> Our security practices are regularly reviewed</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Third-Party Services */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="w-6 h-6 text-green-600 mr-2" />
                Third-Party Services
              </CardTitle>
              <CardDescription>
                Information about external services we use
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">Advertising Services</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    We use Google AdSense to display advertisements on our platform. This service may use cookies and similar technologies.
                  </p>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-foreground flex items-center">
                      <AlertTriangle className="w-4 h-4 text-yellow-600 mr-2" />
                      Important Note
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      While we don't collect personal data, third-party advertising services may use cookies. 
                      You can opt out of personalized advertising by visiting{' '}
                      <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        Google Ads Settings
                      </a>.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 text-foreground">Infrastructure Services</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Supabase:</strong> Database and file storage services</li>
                    <li>• <strong>Hosting Provider:</strong> Secure cloud hosting infrastructure</li>
                    <li>• <strong>CDN Services:</strong> Content delivery for fast access</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* User Rights */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-6 h-6 text-purple-600 mr-2" />
                Your Privacy Rights
              </CardTitle>
              <CardDescription>
                Understanding your rights regarding your data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-foreground">Since We Don't Collect Personal Data</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Because we don't collect or store personal information, traditional privacy rights don't apply. However, you have these rights:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>No Data to Access:</strong> We have no personal data to provide</li>
                    <li>• <strong>No Data to Correct:</strong> We don't store personal information</li>
                    <li>• <strong>No Data to Delete:</strong> Personal data is never collected</li>
                    <li>• <strong>Complete Anonymity:</strong> Your identity is never known to us</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-foreground">Content Control</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    You maintain full control over your shared content:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Automatic Expiration:</strong> Content deletes itself</li>
                    <li>• <strong>Password Protection:</strong> Optional encryption for sensitive data</li>
                    <li>• <strong>No Persistent Storage:</strong> Content is temporary by design</li>
                    <li>• <strong>No Tracking:</strong> We can't see what you share</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Compliance */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-6 h-6 text-orange-600 mr-2" />
                Privacy Compliance
              </CardTitle>
              <CardDescription>
                Our commitment to privacy regulations and standards
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">GDPR Compliance</h3>
                  <p className="text-sm text-muted-foreground">
                    While GDPR primarily applies to personal data collection, our privacy-first approach exceeds GDPR requirements by not collecting any personal data at all.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">CCPA Compliance</h3>
                  <p className="text-sm text-muted-foreground">
                    Our zero-data collection policy means we don't have personal information to disclose, sell, or delete under CCPA requirements.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">Industry Standards</h3>
                  <p className="text-sm text-muted-foreground">
                    We follow industry best practices for data security, encryption, and privacy protection, even though we don't collect personal data.
                  </p>
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
              <CardTitle>Contact Us</CardTitle>
              <CardDescription>
                Questions about our privacy practices? We're here to help.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong>Email:</strong>{' '}
                    <a href="mailto:support@anonshare.live" className="text-primary hover:underline">
                      support@anonshare.live
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    We aim to respond to all privacy-related inquiries within 48 hours.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Policy Updates */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Policy Updates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  This Privacy Policy may be updated from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-foreground">Last Updated</h4>
                  <p className="text-sm text-muted-foreground">
                    This policy was last updated on January 15, 2025. Any material changes will be prominently displayed on this page.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-semibold mb-4">Your Privacy is Protected</h2>
          <p className="text-lg mb-6 opacity-90">
            Start sharing securely with complete confidence that your data and privacy are protected.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/clipboard">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Start Sharing Now
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  </>
);

export default Privacy; 