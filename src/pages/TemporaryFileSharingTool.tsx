
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Upload, Clock, Shield, Trash2, FileText, Image, Archive } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const TemporaryFileSharingTool = () => {
  return (
    <>
      <Helmet>
        <title>Temporary File Sharing Tool - AnonShare</title>
        <meta name="description" content="Share files temporarily with automatic deletion. Anonymous file sharing tool with no registration. Upload documents, images, and files securely with expiration dates." />
        <meta name="keywords" content="temporary file sharing, anonymous file upload, secure file sharing, file sharing no registration, temporary file upload" />
        <meta property="og:title" content="Temporary File Sharing Tool - AnonShare" />
        <meta property="og:description" content="Share files temporarily with automatic deletion. Anonymous file sharing tool with no registration required." />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://anonshare.live/temporary-file-sharing-tool" /> 
      </Helmet>

      <div className="min-h-screen bg-sky-50">
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Temporary File Sharing Tool
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Share files securely with automatic expiration. Upload documents, images, and files 
              anonymously without registration - perfect for temporary file sharing needs.
            </p>
          </div>

          {/* Quick Start CTA */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-12 text-center">
            <h2 className="text-2xl font-semibold mb-4">Start Sharing Files Temporarily</h2>
            <p className="text-gray-600 mb-4">Upload any file and get a secure, temporary sharing link that automatically expires</p>
            <Link to="/file-share">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Upload className="mr-2 h-5 w-5" />
                Upload Files Now
              </Button>
            </Link>
          </div>

          {/* Key Features */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our Temporary File Sharing Tool?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="mr-3 h-6 w-6 text-blue-600" />
                    Auto-Expiration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Files automatically delete after your chosen time period - from hours to days.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="mr-3 h-6 w-6 text-green-600" />
                    Anonymous Upload
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    No registration required. Upload files without revealing your identity.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Trash2 className="mr-3 h-6 w-6 text-red-600" />
                    Secure Deletion
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Files are permanently deleted from our servers when they expire.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">How Temporary File Sharing Works</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
                    Upload Your File
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Visit our <Link to="/file-share" className="text-purple-600 hover:underline">file sharing tool</Link> and 
                    upload any document, image, or file up to the size limit.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
                    Set Expiration Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Choose how long the file should remain available - up to 24 hours maximum. 
                    Files automatically delete when the time expires.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
                    Share the Link
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Get a unique download link that you can share with anyone. The link stops working 
                    when the file expires.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">4</span>
                    Automatic Cleanup
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our system automatically and permanently deletes expired files, ensuring 
                    your data doesn't remain online longer than intended.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Supported File Types */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Supported File Types</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="mr-3 h-6 w-6 text-blue-600" />
                    Documents
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-600 space-y-1">
                    <li>• PDF files</li>
                    <li>• Word documents</li>
                    <li>• Excel spreadsheets</li>
                    <li>• PowerPoint presentations</li>
                    <li>• Text files</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Image className="mr-3 h-6 w-6 text-green-600" />
                    Images & Media
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-600 space-y-1">
                    <li>• JPEG, PNG, GIF images</li>
                    <li>• Video files (MP4, AVI)</li>
                    <li>• Audio files (MP3, WAV)</li>
                    <li>• SVG graphics</li>
                    <li>• WebP images</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Archive className="mr-3 h-6 w-6 text-purple-600" />
                    Archives & Code
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-600 space-y-1">
                    <li>• ZIP, RAR archives</li>
                    <li>• Source code files</li>
                    <li>• Configuration files</li>
                    <li>• Database backups</li>
                    <li>• Log files</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Perfect Use Cases for Temporary File Sharing</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Sensitive Document Sharing</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Confidential reports that should auto-delete</li>
                    <li>• Legal documents with time limits</li>
                    <li>• Medical records requiring privacy</li>
                    <li>• Financial documents for review</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Project Collaboration</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Draft designs and mockups</li>
                    <li>• Code reviews and patches</li>
                    <li>• Meeting recordings</li>
                    <li>• Temporary project files</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Event & Media Sharing</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Event photos with limited access</li>
                    <li>• Video content for review</li>
                    <li>• Press releases with embargoes</li>
                    <li>• Promotional materials</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Technical Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Log files for debugging</li>
                    <li>• Screenshots of issues</li>
                    <li>• Configuration backups</li>
                    <li>• Troubleshooting documents</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Security & Privacy */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Security & Privacy Features</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Anonymous Uploads</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    No registration, email, or personal information required. Upload files completely anonymously.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Automatic Deletion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Files are permanently deleted from our servers when they expire - no manual cleanup needed.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Secure Transmission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    All file uploads and downloads use encrypted HTTPS connections for maximum security.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>No Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We don't track users, store IP addresses, or collect any personal data about file uploads.
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
                  <CardTitle>Anonymous Text Sharing</CardTitle>
                  <CardDescription>Share text and code snippets without registration</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/clipboard">
                    <Button variant="outline" className="w-full">
                      Try Anonymous Clipboard
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Rich Text Notepad</CardTitle>
                  <CardDescription>Create formatted documents anonymously</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/notepad">
                    <Button variant="outline" className="w-full">
                      Use Anonymous Notepad
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
                  <CardTitle>What happens when my file expires?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    When your file reaches its expiration time, it's automatically and permanently deleted from 
                    our servers. The download link stops working immediately.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What's the maximum file size?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We support files up to reasonable limits for temporary sharing. Large files may have 
                    shorter maximum expiration times.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Can I extend the expiration time?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Expiration times are set when uploading and cannot be changed. This ensures predictable 
                    deletion and protects your privacy.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Share Files Temporarily?</h2>
            <p className="text-gray-600 mb-6">Upload files with automatic expiration for secure, temporary sharing.</p>
            <Link to="/file-share">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Upload className="mr-2 h-5 w-5" />
                Start Temporary File Sharing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TemporaryFileSharingTool;
