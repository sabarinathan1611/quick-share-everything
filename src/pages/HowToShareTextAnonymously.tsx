
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ClipboardList, Shield, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const HowToShareTextAnonymously = () => {
  return (
    <>
      <Helmet>
        <title>How to Share Text Anonymously - Complete Guide | AnonShare</title>
        <meta name="description" content="Learn how to share text anonymously online without registration. Step-by-step guide to anonymous text sharing with privacy protection and secure links." />
        <meta name="keywords" content="share text anonymously, anonymous text sharing, private text sharing, secure text sharing, no registration text sharing" />
        <meta property="og:title" content="How to Share Text Anonymously - Complete Guide | AnonShare" />
        <meta property="og:description" content="Learn how to share text anonymously online without registration. Step-by-step guide to anonymous text sharing with privacy protection." />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://anonshare.app/how-to-share-text-anonymously" />
      </Helmet>

      <div className="min-h-screen bg-sky-50">
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              How to Share Text Anonymously Online
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete guide to sharing text anonymously without registration or personal information. 
              Protect your privacy while sharing sensitive information securely.
            </p>
          </div>

          {/* Quick Start CTA */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-12 text-center">
            <h2 className="text-2xl font-semibold mb-4">Start Sharing Anonymously Now</h2>
            <p className="text-gray-600 mb-4">No registration required. Your text is encrypted and protected.</p>
            <Link to="/clipboard">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <ClipboardList className="mr-2 h-5 w-5" />
                Anonymous Text Sharing Tool
              </Button>
            </Link>
          </div>

          {/* Step-by-step Guide */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Step-by-Step Guide to Anonymous Text Sharing</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
                    Visit the Anonymous Clipboard
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Go to our <Link to="/clipboard" className="text-blue-600 hover:underline">anonymous clipboard tool</Link>. 
                    No account creation or personal information required.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
                    Paste Your Text
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Enter or paste the text you want to share anonymously. Your content is automatically encrypted 
                    before being stored on our secure servers.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
                    Set Privacy Options
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Choose additional privacy settings like password protection and automatic expiration. 
                    Add extra layers of security to your anonymous text sharing.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">4</span>
                    Get Your Anonymous Link
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Receive a unique, anonymous link that you can share with anyone. The link contains no 
                    personal information and can't be traced back to you.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Share Text Anonymously?</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="mr-3 h-6 w-6 text-green-600" />
                    Privacy Protection
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Keep your identity private when sharing sensitive information, feedback, or confidential documents.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="mr-3 h-6 w-6 text-blue-600" />
                    No Registration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Start sharing immediately without creating accounts, providing email addresses, or personal details.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-3 h-6 w-6 text-purple-600" />
                    Whistleblowing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Safely report wrongdoing or share important information without fear of retaliation or identification.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ClipboardList className="mr-3 h-6 w-6 text-orange-600" />
                    Temporary Sharing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Share text that automatically expires, ensuring your information doesn't remain online indefinitely.
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
                  <CardTitle>Anonymous Notepad</CardTitle>
                  <CardDescription>Create and share rich text documents anonymously</CardDescription>
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
                  <CardTitle>Anonymous File Sharing</CardTitle>
                  <CardDescription>Share files securely without revealing your identity</CardDescription>
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

          {/* FAQ */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Is anonymous text sharing really secure?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Yes, all text is encrypted before storage and we don't collect any personal information. 
                    Your content is protected and anonymous.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How long does shared text remain available?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    You can set custom expiration times or use our default retention periods. 
                    Text automatically expires to protect your privacy.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Can I password protect my anonymous text?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Yes, add an extra layer of security with password protection. Only people with the 
                    password can access your shared text.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Share Text Anonymously?</h2>
            <p className="text-gray-600 mb-6">Start protecting your privacy with our secure, anonymous text sharing tool.</p>
            <Link to="/clipboard">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Anonymous Text Sharing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowToShareTextAnonymously;
