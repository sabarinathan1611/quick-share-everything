import { Helmet } from 'react-helmet';
import React from 'react';

const PrivacyPolicy = () => (
  <>
    <Helmet>
      <title>Privacy Policy – AnonShare</title>
      <meta name="description" content="Read the privacy policy for AnonShare. Learn how we protect your data and privacy." />
      <meta name="robots" content="index, follow" />
    </Helmet>
    <main className="min-h-screen bg-sky-50">
      <section className="max-w-4xl mx-auto px-4 py-12">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Privacy Policy</h1>
        </header>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-foreground">Your Privacy Matters</h2>
          <p className="text-muted-foreground">We value your privacy. AnonShare does not collect personal information or track users. All content is stored temporarily and deleted after expiration. For most shares, data is stored for 24 hours before being permanently deleted. For more information, contact <a href="mailto:support@anonshare.live" className="text-blue-600 underline">support@anonshare.live</a>.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-foreground">Full Privacy Policy</h2>
          <p className="text-muted-foreground">[Placeholder for full legal privacy policy text. Replace with your actual policy as needed.]</p>
        </section>
      </section>
    </main>
  </>
);

export default PrivacyPolicy; 