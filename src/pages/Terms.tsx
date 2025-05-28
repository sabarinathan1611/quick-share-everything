
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AdUnit from '@/components/AdUnit';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          <p className="text-lg text-gray-600">
            Last updated: December 15, 2024
          </p>
        </div>

        {/* Ad Unit */}
        <div className="mb-12">
          <AdUnit adSlot="1234567810" adFormat="horizontal" className="text-center" />
        </div>

        {/* Terms Content */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Agreement to Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                By accessing and using AnonTools, you agree to be bound by these Terms of 
                Service and all applicable laws and regulations. If you do not agree with 
                any of these terms, you are prohibited from using or accessing this service.
              </p>
              <p className="text-gray-600">
                These terms apply to all users of the service, including without limitation 
                users who are browsers, vendors, customers, merchants, and/or contributors 
                of content.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Description of Service</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                AnonTools provides anonymous sharing services including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Anonymous clipboard for sharing text snippets</li>
                <li>Rich text notepad for creating formatted documents</li>
                <li>Secure file sharing with temporary access</li>
                <li>Code-based content retrieval system</li>
              </ul>
              <p className="text-gray-600">
                All content shared through AnonTools is temporary and automatically expires 
                according to our retention policies. We do not guarantee permanent storage 
                of any content.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Acceptable Use Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                You agree to use AnonTools only for lawful purposes and in accordance with 
                these Terms. You agree NOT to use the service:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>To share illegal, harmful, threatening, abusive, or objectionable content</li>
                <li>To violate any applicable local, state, national, or international law</li>
                <li>To share copyrighted material without proper authorization</li>
                <li>To distribute malware, viruses, or other malicious code</li>
                <li>To share personal information of others without consent</li>
                <li>To attempt to gain unauthorized access to our systems</li>
                <li>To interfere with or disrupt the service or servers</li>
                <li>To share spam, phishing attempts, or fraudulent content</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Content Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                While we respect privacy and don't monitor content routinely, we reserve 
                the right to remove content that violates these terms:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Content must not violate any laws or regulations</li>
                <li>Content must not infringe on intellectual property rights</li>
                <li>Content must not contain malicious code or security threats</li>
                <li>Content must not be used for harassment or abuse</li>
                <li>Content must not be used for commercial spam or advertising</li>
              </ul>
              <p className="text-gray-600">
                We use automated systems to detect potentially harmful content, but do 
                not routinely monitor or review user content for privacy reasons.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Intellectual Property Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                You retain all rights to content you share through AnonTools. By using our 
                service, you grant us only the minimal rights necessary to provide the service:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>The right to store your content temporarily</li>
                <li>The right to transmit your content to authorized recipients</li>
                <li>The right to automatically delete expired content</li>
              </ul>
              <p className="text-gray-600">
                We do not claim ownership of your content and do not use it for any purpose 
                other than providing the sharing service you requested.
              </p>
            </CardContent>
          </Card>

          {/* Ad Unit */}
          <div className="my-8">
            <AdUnit adSlot="1234567811" adFormat="rectangle" className="text-center" />
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Privacy and Data Protection</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Your privacy is fundamental to our service. We collect minimal information 
                and automatically delete all content according to our retention schedule. 
                Please review our Privacy Policy for detailed information about our data 
                practices.
              </p>
              <p className="text-gray-600">
                You are responsible for the privacy and security of the access codes we 
                generate. Sharing these codes grants access to your content.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Service Availability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                We strive to maintain high availability but cannot guarantee uninterrupted 
                service. AnonTools may be temporarily unavailable due to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Scheduled maintenance and updates</li>
                <li>Technical difficulties or server issues</li>
                <li>Security incidents requiring immediate response</li>
                <li>Force majeure events beyond our control</li>
              </ul>
              <p className="text-gray-600">
                We recommend keeping local copies of important content as we cannot guarantee 
                retrieval during service interruptions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                AnonTools is provided "as is" without warranties of any kind. We are not 
                liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Loss of data due to expiration, technical issues, or user error</li>
                <li>Unauthorized access to content due to shared codes</li>
                <li>Service interruptions or technical difficulties</li>
                <li>Any damages arising from use of the service</li>
                <li>Actions of other users or third parties</li>
              </ul>
              <p className="text-gray-600">
                Your use of AnonTools is at your own risk. We recommend keeping backups 
                of important content.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>User Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                As a user of AnonTools, you are responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Ensuring your content complies with all applicable laws</li>
                <li>Keeping access codes secure and sharing them responsibly</li>
                <li>Understanding that content expires automatically</li>
                <li>Not attempting to circumvent security measures</li>
                <li>Reporting abuse or violations of these terms</li>
                <li>Using the service in good faith and for legitimate purposes</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Termination</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                We reserve the right to terminate or suspend access to our service 
                immediately, without prior notice, for any reason including breach of 
                these Terms of Service.
              </p>
              <p className="text-gray-600">
                Upon termination, your right to use the service will cease immediately. 
                Any content you have shared may be removed at our discretion.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                We reserve the right to update these Terms of Service at any time. Changes 
                will be posted on this page with an updated revision date. Your continued 
                use of the service after changes constitutes acceptance of the new terms.
              </p>
              <p className="text-gray-600">
                We encourage you to review these terms periodically to stay informed of 
                any updates.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Governing Law</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                These Terms of Service are governed by and construed in accordance with 
                applicable laws. Any disputes arising from these terms or use of the 
                service will be resolved through appropriate legal channels.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Questions about these Terms of Service can be addressed through the 
                information provided on our About page. We're committed to maintaining 
                fair and transparent terms while protecting user privacy.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Terms;
