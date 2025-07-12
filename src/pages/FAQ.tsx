import { Helmet } from 'react-helmet';
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Shield, Clock, Lock, FileText, Upload, Copy, Users, Globe, Zap, AlertTriangle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import AdUnit from '@/components/AdUnit';

const faqs = [
  {
    category: "Getting Started",
    icon: <Zap className="w-5 h-5" />,
    questions: [
      {
        q: 'What is AnonShare and how does it work?',
        a: 'AnonShare is a privacy-first platform that lets you share text, notes, and files anonymously without registration. Simply choose a tool (Clipboard, Notepad, or File Share), enter your content, and receive a unique 4-digit code. Share this code with others who can then access your content instantly by entering the code on our homepage.'
      },
      {
        q: 'Do I need to create an account or provide personal information?',
        a: 'No! AnonShare is completely anonymous. We never ask for your name, email address, or any personal information. You can start sharing immediately without any registration process. This is what makes us truly privacy-focused.'
      },
      {
        q: 'How do I access shared content?',
        a: 'To access shared content, simply enter the 4-digit code in the search box on our homepage. The content will be displayed instantly if it hasn\'t expired. No login or account required.'
      },
      {
        q: 'Is AnonShare free to use?',
        a: 'Yes! All features of AnonShare are completely free. There are no hidden fees, premium tiers, or limitations on usage. We believe privacy tools should be accessible to everyone.'
      }
    ]
  },
  {
    category: "Security & Privacy",
    icon: <Shield className="w-5 h-5" />,
    questions: [
      {
        q: 'How secure is my data on AnonShare?',
        a: 'Your data is protected with multiple security layers. We use end-to-end encryption for sensitive content, automatic expiration ensures data doesn\'t linger, and we never store personal information. All content is automatically deleted after expiration periods to maintain privacy.'
      },
      {
        q: 'Do you track or monitor my usage?',
        a: 'No, we do not track your usage, browsing patterns, or collect any analytics about your activity. We don\'t use tracking cookies or store any information about who accesses what content. Your privacy is our top priority.'
      },
      {
        q: 'Can I add password protection to my shared content?',
        a: 'Yes! When sharing content through our tools, you can optionally add a password for additional security. This provides an extra layer of protection, especially for sensitive information.'
      },
      {
        q: 'What happens to my data after it expires?',
        a: 'When content expires, it is permanently deleted from our servers. This includes both the content itself and any associated metadata. We cannot recover expired content, which ensures your privacy is maintained.'
      },
      {
        q: 'Is my data shared with third parties?',
        a: 'Never. We do not share, sell, or provide your data to any third parties. Your content remains private and is only accessible to those with the specific access code you provide.'
      }
    ]
  },
  {
    category: "Features & Usage",
    icon: <Copy className="w-5 h-5" />,
    questions: [
      {
        q: 'What are the differences between Clipboard, Notepad, and File Share?',
        a: 'Clipboard is for quick text sharing. Notepad offers rich text editing with formatting options. File Share allows uploading files up to 50MB with download limits. All content is automatically deleted after 24 hours for maximum privacy.'
      },
      {
        q: 'What file types can I upload?',
        a: 'You can upload any file type up to 50MB. This includes documents, images, videos, audio files, archives, and more. We don\'t restrict file types, making it versatile for various sharing needs.'
      },
      {
        q: 'How long does my content stay available?',
        a: 'All content is automatically deleted after 24 hours for maximum privacy. Files may also be deleted earlier if they reach their download limit. This ensures no data lingers on our servers.'
      },
      {
        q: 'Can I edit or update my shared content?',
        a: 'No, once content is shared and a code is generated, it cannot be edited. This is by design to maintain the integrity of shared information. If you need to update content, you\'ll need to create a new share with a new code.'
      },
      {
        q: 'What if someone guesses my 4-digit code?',
        a: 'The probability of guessing a random 4-digit code is 1 in 10,000. Additionally, our system includes rate limiting and monitoring to prevent brute force attempts. For sensitive content, we recommend using the optional password protection feature.'
      }
    ]
  },
  {
    category: "Technical Details",
    icon: <Globe className="w-5 h-5" />,
    questions: [
      {
        q: 'What browsers and devices are supported?',
        a: 'AnonShare works on all modern browsers including Chrome, Firefox, Safari, and Edge. It\'s fully responsive and works on desktop computers, tablets, and mobile phones. No app installation required.'
      },
      {
        q: 'How are the 4-digit codes generated?',
        a: 'Codes are randomly generated using cryptographically secure methods to ensure uniqueness and prevent collisions. Each code is unique and tied to specific content, making it impossible to accidentally access the wrong content.'
      },
      {
        q: 'Can I share content internationally?',
        a: 'Yes! AnonShare is accessible worldwide. The 4-digit codes work from anywhere in the world, making it perfect for international collaboration and sharing.'
      },
      {
        q: 'What happens if I lose my access code?',
        a: 'Unfortunately, we cannot recover lost access codes. This is a security feature to maintain privacy. If you lose a code, you\'ll need to create a new share. We recommend keeping codes in a secure location.'
      },
      {
        q: 'Is there a limit on how many times I can share content?',
        a: 'No, there\'s no limit on the number of shares you can create. You can share as much content as you need, whenever you need it. Each share gets its own unique code.'
      }
    ]
  },
  {
    category: "Troubleshooting",
    icon: <AlertTriangle className="w-5 h-5" />,
    questions: [
      {
        q: 'What if I get an error when trying to access content?',
        a: 'Common causes include expired content, incorrect code entry, or content that has reached its download limit. Double-check the code and try again. If the problem persists, the content may have expired.'
      },
      {
        q: 'Why can\'t I upload a large file?',
        a: 'File uploads are limited to 50MB. If your file is larger, consider compressing it or splitting it into smaller parts. This limit helps maintain fast upload speeds and server performance.'
      },
      {
        q: 'What if my content disappears before the expiration time?',
        a: 'This could happen if the content reached its download limit (for files) or if there was a technical issue. We recommend creating a new share if this occurs. Our system is designed to be reliable, but we cannot guarantee against all technical issues.'
      },
      {
        q: 'Can I recover accidentally deleted content?',
        a: 'No, we cannot recover deleted or expired content. This is a fundamental privacy feature. Once content is deleted or expires, it is permanently removed from our servers.'
      }
    ]
  }
];

const FAQ = () => (
  <>
    <Helmet>
      <title>FAQ – AnonShare</title>
              <meta name="description" content="FAQ about AnonShare's anonymous clipboard, privacy features, and secure file sharing. Get answers about our platform and how to use it safely." />
        <link rel="canonical" href="https://anonshare.live/faq" />
              <meta name="robots" content="index, follow" />
        <meta property="og:title" content="FAQ – AnonShare" />
        <meta property="og:description" content="FAQ about AnonShare's anonymous clipboard, privacy features, and secure file sharing. Get answers about our platform." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://anonshare.live/faq" />
        <meta property="og:image" content="https://urevqqvsadvafgqehzna.supabase.co/storage/v1/object/public/anonshare//android-chrome-512x512.png" />
        <meta property="og:site_name" content="AnonShare" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FAQ – AnonShare" />
        <meta name="twitter:description" content="FAQ about AnonShare's anonymous clipboard, privacy features, and secure file sharing." />
        <meta name="twitter:image" content="https://urevqqvsadvafgqehzna.supabase.co/storage/v1/object/public/anonshare//android-chrome-512x512.png" />
    </Helmet>
    <main className="min-h-screen bg-sky-50">
      <section className="max-w-4xl mx-auto px-4 py-12">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about AnonShare's features, security, and usage. 
            Can't find what you're looking for? Check our detailed guides or contact us.
          </p>
        </header>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">100%</p>
              <p className="text-sm text-muted-foreground">Anonymous</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Clock className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">24h</p>
              <p className="text-sm text-muted-foreground">Clipboard Expiry</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Upload className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">50MB</p>
              <p className="text-sm text-muted-foreground">File Limit</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Globe className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">Global</p>
              <p className="text-sm text-muted-foreground">Access</p>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <Card key={categoryIndex}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="mr-3 text-primary">{category.icon}</span>
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`}>
                      <AccordionTrigger className="text-left">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Ad Unit */}
        <div className="my-12">
          <AdUnit adSlot="1234567890" adFormat="horizontal" className="text-center" />
        </div>

        {/* Additional Resources */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-foreground">Need More Help?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <FileText className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>User Guides</CardTitle>
                <CardDescription>
                  Step-by-step tutorials and guides
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <Link to="/how-it-works" className="text-primary hover:underline">How It Works</Link></li>
                  <li>• <Link to="/blog/how-to-share-text-anonymously" className="text-primary hover:underline">Text Sharing Guide</Link></li>
                  <li>• <Link to="/blog/pastebin-alternatives-2025" className="text-primary hover:underline">Privacy Tools Guide</Link></li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle>Privacy & Security</CardTitle>
                <CardDescription>
                  Learn about our privacy measures
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link></li>
                  <li>• <Link to="/terms-of-service" className="text-primary hover:underline">Terms of Service</Link></li>
                  <li>• <Link to="/about" className="text-primary hover:underline">About Our Mission</Link></li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle>Get Started</CardTitle>
                <CardDescription>
                  Ready to start sharing?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <Link to="/clipboard" className="text-primary hover:underline">Try Clipboard</Link></li>
                  <li>• <Link to="/notepad" className="text-primary hover:underline">Create Notes</Link></li>
                  <li>• <Link to="/file-share" className="text-primary hover:underline">Share Files</Link></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-semibold mb-4">Still Have Questions?</h2>
          <p className="text-lg mb-6 opacity-90">
            Our comprehensive guides and tutorials cover everything you need to know about 
            secure, anonymous sharing with AnonShare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/how-it-works" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Learn How It Works
            </Link>
            <Link to="/clipboard" className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Start Sharing Now
            </Link>
          </div>
        </section>
      </section>
    </main>
  </>
);

export default FAQ;
