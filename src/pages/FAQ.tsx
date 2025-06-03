import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AdUnit from '@/components/AdUnit';

const FAQ = () => {
  const faqs = [
    {
      question: "How does AnonTools protect my privacy?",
      answer: "AnonTools requires no registration, collects no personal data, and uses no tracking cookies. All content is temporary and automatically deleted after expiration. We use HTTPS encryption and don't store any information that could identify you."
    },
    {
      question: "How long does shared content remain available?",
      answer: "Clipboard content expires after 24 hours, notepad content after 7 days, and files after 48 hours or when download limits are reached (whichever comes first). You can see the exact expiration time when you create or view content."
    },
    {
      question: "What file types can I upload?",
      answer: "You can upload most common file types including documents (PDF, DOC, TXT), images (JPG, PNG, GIF), archives (ZIP, RAR), and code files. Files are scanned for malware and must be under 50MB."
    },
    {
      question: "Are there any usage limits?",
      answer: "Each shared item gets a unique code and reasonable limits: clipboard text up to 100KB, notepad content up to 500KB, and files up to 50MB. There are no daily limits for creating content."
    },
    {
      question: "Can I edit content after sharing?",
      answer: "No, once content is shared and a code is generated, it becomes read-only. This ensures integrity and prevents unauthorized modifications. You can create new content if changes are needed."
    },
    {
      question: "What happens if I lose my sharing code?",
      answer: "Unfortunately, codes cannot be recovered as we don't store any connection between you and your shared content. This is part of our privacy-first design. Always save your codes in a secure location."
    },
    {
      question: "Is AnonTools really free?",
      answer: "Yes, AnonTools is completely free to use. We support the platform through ethical advertising that doesn't track users or compromise privacy. No premium features or hidden fees."
    },
    {
      question: "Can I use AnonTools for commercial purposes?",
      answer: "Yes, you can use AnonTools for commercial purposes as long as you comply with our Terms of Service. Many businesses use it for sharing drafts, proposals, and collaboration documents."
    },
    {
      question: "How secure is the code generation system?",
      answer: "Codes are generated using cryptographically secure random number generation with sufficient entropy to prevent guessing. The 4-6 digit format provides over 1 million possible combinations while remaining user-friendly."
    },
    {
      question: "What happens to my data when it expires?",
      answer: "Expired data is permanently deleted from our servers and cannot be recovered. This automatic cleanup is part of our commitment to privacy and ensures your content doesn't persist longer than necessary."
    },
    {
      question: "Can I share the same content multiple times?",
      answer: "Each time you share content, a new unique code is generated. You can share the same content multiple times, but each instance will have its own code and expiration time."
    },
    {
      question: "Is there an API for developers?",
      answer: "Currently, AnonTools is designed as a web interface for individual use. We're considering API access for developers but want to ensure it maintains our privacy-first principles."
    },
    {
      question: "What if someone shares inappropriate content?",
      answer: "We have automated systems to detect and prevent sharing of inappropriate content. Users can also report violations, and we take swift action to remove harmful content while maintaining user privacy."
    },
    {
      question: "Can I access AnonTools from mobile devices?",
      answer: "Yes, AnonTools is fully responsive and works on all modern mobile browsers. The interface adapts to touch screens and smaller displays for a seamless mobile experience."
    },
    {
      question: "Do you store any analytics or usage data?",
      answer: "We collect minimal, anonymized usage statistics to maintain service quality (like total shares per day) but nothing that could identify individual users or their content. No personal data is ever stored."
    }
  ];

  return (
    <div className="min-h-screen bg-sky-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">
            Everything you need to know about using AnonTools for anonymous sharing
          </p>
        </div>

        {/* Ad Unit */}
        <div className="mb-12">
          <AdUnit adSlot="1234567894" adFormat="horizontal" className="text-center" />
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Ad Unit */}
        <div className="my-12">
          <AdUnit adSlot="1234567895" adFormat="rectangle" className="text-center" />
        </div>

        {/* Additional Help */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Still Have Questions?</CardTitle>
            <CardDescription>
              Can't find what you're looking for? Here are some additional resources.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              For technical issues or feature requests, please check our About page for more 
              information about how AnonTools works and our privacy commitments.
            </p>
            <p className="text-gray-600">
              Remember that AnonTools is designed to be simple and intuitive. Most questions 
              can be answered by trying the tools - they're free and require no registration!
            </p>
            <p className="text-gray-600">
              Our platform is continuously improving based on user feedback while maintaining 
              our core privacy principles. Thank you for choosing AnonTools for your 
              anonymous sharing needs.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FAQ;
