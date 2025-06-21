import { Helmet } from 'react-helmet';
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Users, Clock, Globe, Code, Zap } from 'lucide-react';
import AdUnit from '@/components/AdUnit';

const About = () => (
  <>
    <Helmet>
      <title>About AnonShare – Mission, Privacy, and Purpose</title>
      <meta name="description" content="Learn about AnonShare's mission, privacy-first approach, and commitment to secure, anonymous sharing." />
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
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-foreground">Our Mission</h2>
          <p className="text-muted-foreground">
            We believe privacy is a fundamental right. AnonShare is built on the principle that you should be able to communicate and share freely, without giving up your identity or personal data. Our platform is designed to minimize data retention, avoid tracking, and provide a safe space for anonymous sharing.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-foreground">Why We Exist</h2>
          <p className="text-muted-foreground">
            In a world where most online tools require sign-ups, emails, or social logins, AnonShare stands apart. We don't ask for your name, email, or any personal information. Our tools are open to everyone, and your data is never sold or shared with third parties.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-foreground">Privacy Commitment</h2>
          <p className="text-muted-foreground">
            We use end-to-end encryption, automatic content expiration, and never store more than necessary. Our code and policies are transparent, and we continuously improve our security to keep your information safe.
          </p>
        </section>
      </section>
    </main>
  </>
);

export default About;
