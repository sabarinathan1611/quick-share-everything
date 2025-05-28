
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AdUnit from '@/components/AdUnit';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            Last updated: December 15, 2024
          </p>
        </div>

        {/* Ad Unit */}
        <div className="mb-12">
          <AdUnit adSlot="1234567898" adFormat="horizontal" className="text-center" />
        </div>

        {/* Privacy Policy Content */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Our Privacy Commitment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                AnonTools is built on the principle of privacy by design. We believe that your 
                right to anonymous communication is fundamental, and our entire platform is 
                designed to protect that right. This privacy policy explains exactly what 
                information we collect (spoiler: almost nothing) and how we handle it.
              </p>
              <p className="text-gray-600">
                Unlike most online services, AnonTools operates on a "collect nothing" principle. 
                We don't require accounts, we don't track users, and we don't collect personal 
                information. This policy details our practices and your rights.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Information We Don't Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                To be crystal clear about our privacy practices, here's what we DON'T collect:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Personal information (names, email addresses, phone numbers)</li>
                <li>User accounts or profiles</li>
                <li>IP addresses for content identification</li>
                <li>Tracking cookies or persistent identifiers</li>
                <li>Device fingerprints or browser signatures</li>
                <li>Location data or geographic information</li>
                <li>Search history or usage patterns</li>
                <li>Social media connections or external account links</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Information We Do Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                We collect only the absolute minimum information necessary to provide our service:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  <strong>Content you share:</strong> Text, notes, and files you choose to share 
                  through our platform. This content is stored temporarily and automatically deleted.
                </li>
                <li>
                  <strong>Generated access codes:</strong> Unique codes created for accessing 
                  shared content. These codes are not linked to any personal information.
                </li>
                <li>
                  <strong>Basic analytics:</strong> Anonymized usage statistics (like total 
                  number of shares per day) to maintain service quality. No individual user 
                  data is collected.
                </li>
                <li>
                  <strong>Technical logs:</strong> Minimal server logs for security and 
                  performance monitoring, automatically purged within 7 days.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How We Handle Your Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Your shared content is handled with the utmost care for privacy:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  <strong>Temporary storage:</strong> All content has automatic expiration dates 
                  and is permanently deleted when expired.
                </li>
                <li>
                  <strong>Encrypted transmission:</strong> All data is transmitted using HTTPS 
                  encryption to prevent interception.
                </li>
                <li>
                  <strong>No content analysis:</strong> We don't scan, analyze, or process your 
                  content for advertising or other purposes (except for malware detection).
                </li>
                <li>
                  <strong>Access control:</strong> Only users with the correct access code can 
                  retrieve shared content.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Ad Unit */}
          <div className="my-8">
            <AdUnit adSlot="1234567899" adFormat="rectangle" className="text-center" />
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Data Retention and Deletion</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                We believe in minimal data retention:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Clipboard content: Automatically deleted after 24 hours</li>
                <li>Notepad content: Automatically deleted after 7 days</li>
                <li>File uploads: Automatically deleted after 48 hours or download limit reached</li>
                <li>Access codes: Deleted when associated content expires</li>
                <li>Server logs: Purged automatically after 7 days</li>
              </ul>
              <p className="text-gray-600">
                There is no way to recover deleted content, and we cannot extend expiration 
                times. This is by design to ensure your privacy.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Third-Party Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                AnonTools uses minimal third-party services:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  <strong>Hosting and infrastructure:</strong> We use reputable cloud providers 
                  with strong privacy commitments and data protection measures.
                </li>
                <li>
                  <strong>Advertising:</strong> We display privacy-respecting ads that don't 
                  track users or collect personal information.
                </li>
                <li>
                  <strong>Security services:</strong> Basic malware scanning for uploaded files 
                  to protect users and our platform.
                </li>
              </ul>
              <p className="text-gray-600">
                We carefully vet all third-party services to ensure they align with our 
                privacy principles.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Rights and Choices</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Since we don't collect personal information, traditional data rights (like 
                access requests) don't apply. However, you always have:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>The right to use our service completely anonymously</li>
                <li>The right to delete your content by simply not sharing the access code</li>
                <li>The right to know that your content will be automatically deleted</li>
                <li>The right to use the service without providing any personal information</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Security Measures</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                We implement industry-standard security measures:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>HTTPS encryption for all data transmission</li>
                <li>Secure, randomly generated access codes</li>
                <li>Regular security audits and updates</li>
                <li>Isolated storage systems for uploaded files</li>
                <li>Automated malware scanning</li>
                <li>DDoS protection and rate limiting</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Legal Compliance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                AnonTools complies with applicable privacy laws including GDPR, CCPA, and 
                other regional privacy regulations. Since we don't collect personal information, 
                most data protection requirements don't apply, but we maintain high privacy 
                standards regardless.
              </p>
              <p className="text-gray-600">
                In the rare case of legal requests for information, we can only provide what 
                we actually collect (which is minimal) and cannot identify individual users 
                due to our anonymous design.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                We may update this privacy policy occasionally to reflect changes in our 
                practices or legal requirements. Any changes will be posted on this page 
                with an updated date. Since we don't collect contact information, we cannot 
                notify users directly of changes.
              </p>
              <p className="text-gray-600">
                Our commitment to privacy-by-design will never change, regardless of policy 
                updates. We will always prioritize user privacy and anonymous access.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                If you have questions about this privacy policy or our privacy practices, 
                you can find more information on our About page. We're committed to 
                transparency while maintaining our privacy-first principles.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
