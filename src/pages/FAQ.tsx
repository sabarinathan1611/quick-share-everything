import { Helmet } from 'react-helmet';
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AdUnit from '@/components/AdUnit';

const faqs = [
  {
    q: 'What is AnonShare?',
    a: 'AnonShare is a privacy-first platform for sharing text, notes, and files anonymously. No registration or login is required.'
  },
  {
    q: 'How do I share something anonymously?',
    a: 'Simply choose a tool (Clipboard, Notepad, or File Share), enter your content, and get a unique code to share with others.'
  },
  {
    q: 'Is my data really private?',
    a: 'Yes. We do not collect personal information, and all content is automatically deleted after expiration. Optional encryption is available for extra security.'
  },
  {
    q: 'How long does my content stay online?',
    a: 'Clipboard content expires in 24 hours and is permanently deleted. Notes expire in 7 days, and files expire in 48 hours or after download limits are reached. All data is deleted according to these timeframes to protect your privacy.'
  },
  {
    q: 'Can I recover deleted or expired content?',
    a: 'No. For privacy, all expired or deleted content is permanently removed from our servers.'
  },
  {
    q: 'Is AnonShare free to use?',
    a: 'Yes! All features are free and available to everyone.'
  }
];

const FAQ = () => (
  <>
    <Helmet>
      <title>FAQ – AnonShare</title>
      <meta name="description" content="Frequently asked questions about AnonShare, anonymous clipboard, privacy, and secure file sharing." />
      <meta name="robots" content="index, follow" />
    </Helmet>
    <main className="min-h-screen bg-sky-50">
      <section className="max-w-4xl mx-auto px-4 py-12">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Frequently Asked Questions</h1>
        </header>
        <dl className="space-y-8">
          {faqs.map((faq, idx) => (
            <div key={idx}>
              <dt className="font-semibold text-lg text-primary mb-2">{faq.q}</dt>
              <dd className="text-muted-foreground text-base">{faq.a}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  </>
);

export default FAQ;
