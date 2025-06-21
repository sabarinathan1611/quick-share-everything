import { Helmet } from 'react-helmet-async';
import React from 'react';

const Terms = () => (
  <>
    <Helmet>
      <title>Terms of Service - AnonShare</title>
      <meta name="description" content="Read the terms of service for AnonShare. Understand your rights and responsibilities when using our anonymous sharing platform." />
      <link rel="canonical" href="https://anonshare.live/terms" />
    </Helmet>
    <main className="min-h-screen bg-sky-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
        <div className="prose lg:prose-xl max-w-none text-gray-700 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">1. Acceptance of Terms</h2>
          <p>
            By using AnonShare ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">2. Description of Service</h2>
          <p>
            AnonShare provides a platform for anonymous and temporary sharing of text and files. All content uploaded to the Service is automatically deleted after 24 hours.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">3. User Conduct</h2>
          <p>
            You are solely responsible for the content you share through the Service. You agree not to use the Service to upload, post, or otherwise transmit any material that is illegal, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">4. Privacy and Data</h2>
          <p>
            We respect your privacy. We do not collect or store any personal data, and we do not use cookies for tracking. Please review our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a> for more details.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800">5. Advertising</h2>
          <p>
            The Service is supported by advertisements served by Google AdSense. By using the Service, you agree to the presence of these advertisements.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">6. Disclaimer of Warranties</h2>
          <p>
            The Service is provided "as is" and "as available" without any warranties of any kind. We do not guarantee that the service will be error-free or uninterrupted.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">7. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Your continued use of the Service after any such changes constitutes your acceptance of the new terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at <a href="mailto:support@anonshare.live" className="text-primary hover:underline">support@anonshare.live</a>.
          </p>
        </div>
      </div>
    </main>
  </>
);

export default Terms;
