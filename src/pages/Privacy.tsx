import { Helmet } from 'react-helmet-async';
import React from 'react';

const Privacy = () => (
  <>
    <Helmet>
      <title>Privacy Policy - AnonShare</title>
      <meta
        name="description"
        content="Our privacy policy details our commitment to your anonymity. We do not collect personal data or use cookies. All shared content is deleted after 24 hours."
      />
      <link rel="canonical" href="https://anonshare.live/privacy" />
    </Helmet>
    <main className="min-h-screen bg-sky-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        <div className="prose lg:prose-xl max-w-none text-gray-700 space-y-6">
          <p>
            Your privacy is our top priority. This Privacy Policy explains how we handle your information when you use AnonShare.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">Information We Do Not Collect</h2>
          <p>
            We are committed to true anonymity, which means we do not collect, store, or process any personal data. Specifically:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>No Personal Information:</strong> We do not require you to create an account or provide any personal information like your name, email address, or IP address.</li>
            <li><strong>No Cookies:</strong> We do not use cookies or any other tracking technologies to monitor your activity on our site.</li>
            <li><strong>No User Data:</strong> The content you share—whether it's text, notes, or files—is end-to-end encrypted (if password protected) and automatically deleted from our servers after 24 hours. We have no access to it.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800">Third-Party Services</h2>
          <p>
            To support our service, we use Google AdSense to display advertisements.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Google AdSense:</strong> Google may use cookies to serve ads based on a user's prior visits to this website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet. Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Ads Settings</a>.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800">Data Security</h2>
          <p>
            All data shared through our platform is temporary. We do not retain any information beyond the 24-hour expiration period. For an added layer of security, we strongly recommend using the password protection feature, which encrypts your data end-to-end, making it unreadable to anyone but the person with the password.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@anonshare.live" className="text-primary hover:underline">support@anonshare.live</a>.
          </p>
        </div>
      </div>
    </main>
  </>
);

export default Privacy; 