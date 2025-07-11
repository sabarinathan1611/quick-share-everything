import { Helmet } from 'react-helmet';
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Users, Clock, Globe, Code, Zap, Lock, FileText, Upload, Copy, CheckCircle, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import AdUnit from '@/components/AdUnit';

const About = () => (
  <>
    <Helmet>
              <title>About AnonShare – Mission & Privacy</title>
      <meta name="description" content="Learn about AnonShare's mission, privacy-first approach, and commitment to secure, anonymous sharing. Discover our features, security measures, and how we protect your data." />
      <meta name="robots" content="index, follow" />
    </Helmet>
    <main className="min-h-screen bg-sky-50">
      <section className="max-w-4xl mx-auto px-4 py-12">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4 text-foreground">About AnonShare</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AnonShare was created to make secure, anonymous sharing accessible to everyone. Our mission is to empower users to share information, notes, and files without fear of surveillance, tracking, or data misuse.
          </p>
        </header>

        {/* Mission Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-foreground">Our Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <Shield className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>Privacy as a Fundamental Right</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We believe privacy is not a luxury but a fundamental human right. In today's digital landscape, where every click is tracked and every action is monetized, AnonShare provides a sanctuary for genuine privacy.
                </p>
                <p className="text-muted-foreground">
                  Our platform is built on the principle that you should be able to communicate and share freely, without giving up your identity or personal data. We've designed every feature with privacy-first thinking.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Globe className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle>Democratizing Secure Sharing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Secure sharing shouldn't be complicated or expensive. We've made enterprise-grade privacy tools accessible to everyone - from students sharing notes to developers sharing code snippets.
                </p>
                <p className="text-muted-foreground">
                  By eliminating the need for accounts, email addresses, or personal information, we've removed the barriers that prevent people from using secure sharing tools.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why We Exist Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-foreground">Why AnonShare Exists</h2>
          <div className="bg-white rounded-lg p-8 shadow-md border">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">The Problem We Solve</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Most sharing tools require sign-ups, emails, or social logins</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Personal data is collected, stored, and often sold to third parties</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Content remains online indefinitely, creating privacy risks</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Complex interfaces make simple sharing tasks unnecessarily difficult</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Our Solution</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Zero registration required - start sharing immediately</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>No personal data collection or tracking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Automatic content expiration for enhanced privacy</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Simple 4-digit codes make sharing effortless</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-foreground">Our Core Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Copy className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>Anonymous Clipboard</CardTitle>
                <CardDescription>
                  Instant text sharing with privacy protection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Paste any text content instantly</li>
                  <li>• Optional password protection</li>
                  <li>• 24-hour automatic expiration</li>
                  <li>• No character limits</li>
                  <li>• Perfect for code snippets and logs</li>
                </ul>
                <Link to="/clipboard" className="text-primary hover:underline text-sm font-medium mt-4 inline-block">
                  Try Clipboard →
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle>Rich Text Notepad</CardTitle>
                <CardDescription>
                  Create formatted notes with advanced editing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• WYSIWYG rich text editor</li>
                  <li>• Support for headers, lists, links</li>
                  <li>• Text formatting and styling</li>
                  <li>• 7-day content retention</li>
                  <li>• Ideal for collaborative notes</li>
                </ul>
                <Link to="/notepad" className="text-primary hover:underline text-sm font-medium mt-4 inline-block">
                  Create Notes →
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Upload className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle>Secure File Sharing</CardTitle>
                <CardDescription>
                  Anonymous file upload and sharing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Upload files up to 50MB</li>
                  <li>• Download limits and tracking</li>
                  <li>• 48-hour expiration period</li>
                  <li>• Secure temporary storage</li>
                  <li>• No file type restrictions</li>
                </ul>
                <Link to="/file-share" className="text-primary hover:underline text-sm font-medium mt-4 inline-block">
                  Share Files →
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Security & Privacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-foreground">Security & Privacy Commitment</h2>
          <div className="bg-white rounded-lg p-8 shadow-md border">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center">
                  <Lock className="w-6 h-6 text-blue-600 mr-2" />
                  Data Protection
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• End-to-end encryption for sensitive content</li>
                  <li>• Automatic content expiration and deletion</li>
                  <li>• No persistent user data storage</li>
                  <li>• Secure file storage with access controls</li>
                  <li>• Regular security audits and updates</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center">
                  <Shield className="w-6 h-6 text-green-600 mr-2" />
                  Privacy Guarantees
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• No user accounts or personal information</li>
                  <li>• No tracking cookies or analytics</li>
                  <li>• No data sharing with third parties</li>
                  <li>• Transparent privacy policies</li>
                  <li>• GDPR and privacy regulation compliance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-foreground">Who Uses AnonShare?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <Code className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>Developers & IT Professionals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Share code snippets, configuration files, debug logs, and technical documentation without exposing sensitive information or dealing with complex version control systems.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Code snippet sharing</li>
                  <li>• Debug log analysis</li>
                  <li>• Configuration file sharing</li>
                  <li>• API documentation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle>Content Creators & Writers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Share draft articles, creative briefs, collaboration notes, and research materials with clients and team members while maintaining complete privacy.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Draft article sharing</li>
                  <li>• Creative briefs</li>
                  <li>• Research notes</li>
                  <li>• Client collaboration</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle>Students & Educators</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Share study notes, project files, research materials, and educational content with classmates and colleagues without email limitations or privacy concerns.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Study note sharing</li>
                  <li>• Project collaboration</li>
                  <li>• Research materials</li>
                  <li>• Educational resources</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="w-12 h-12 text-orange-600 mb-4" />
                <CardTitle>Business Professionals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Share meeting notes, proposals, documents, and presentations quickly without going through complex approval processes or corporate file sharing systems.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Meeting notes</li>
                  <li>• Business proposals</li>
                  <li>• Document sharing</li>
                  <li>• Quick collaboration</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-foreground">Technology & Infrastructure</h2>
          <div className="bg-white rounded-lg p-8 shadow-md border">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Frontend Technology</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• React 18 with TypeScript</li>
                  <li>• Tailwind CSS for styling</li>
                  <li>• shadcn/ui component library</li>
                  <li>• Vite for fast development</li>
                  <li>• Responsive design for all devices</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Backend & Security</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Supabase for database and storage</li>
                  <li>• PostgreSQL for data management</li>
                  <li>• Automatic content expiration</li>
                  <li>• Secure file handling</li>
                  <li>• Privacy-compliant architecture</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Ad Unit */}
        <div className="mb-12">
          <AdUnit adSlot="1234567890" adFormat="horizontal" className="text-center" />
        </div>

        {/* Contact & Support */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-foreground">Get Started Today</h2>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Ready to Experience True Privacy?</h3>
              <p className="text-lg mb-6 opacity-90">
                Join thousands of users who trust AnonShare for their secure, anonymous sharing needs. 
                No registration required - start sharing immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/clipboard" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Sharing Now
                </Link>
                <Link to="/faq" className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View FAQ
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  </>
);

export default About;
