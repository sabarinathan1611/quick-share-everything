import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AdUnit from '@/components/AdUnit';

const Terms = () => {
  return (
    <div className="min-h-screen bg-sky-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          <p className="text-lg text-gray-600">
            Last updated: June 04, 2025
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Effective immediately for all users of AnonShare
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
                By accessing and using AnonShare, you agree to be bound by these Terms of 
                Service and all applicable laws and regulations. If you do not agree with 
                any of these terms, you are prohibited from using or accessing this service.
              </p>
              <p className="text-gray-600">
                These terms apply to all users of AnonShare, including individuals and 
                organizations that use our anonymous sharing services for text, notes, 
                and file sharing.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Service Description</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                AnonShare provides anonymous, temporary content sharing services including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Anonymous clipboard for sharing text snippets with 4-digit codes</li>
                <li>Rich text notepad for creating and sharing formatted documents</li>
                <li>Secure file sharing with upload limits and automatic expiration</li>
                <li>Code-based content retrieval system for accessing shared content</li>
                <li>Optional email notifications for content access</li>
              </ul>
              <p className="text-gray-600">
                All content shared through AnonShare is temporary and automatically expires 
                according to our retention policies. We do not provide permanent storage 
                or backup services.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Acceptable Use Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                You agree to use AnonShare only for lawful purposes and in accordance with 
                these Terms. Prohibited uses include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Sharing illegal, harmful, threatening, abusive, or objectionable content</li>
                <li>Violating any applicable local, state, national, or international laws</li>
                <li>Sharing copyrighted material without proper authorization</li>
                <li>Distributing malware, viruses, or other malicious code</li>
                <li>Sharing personal information of others without their consent</li>
                <li>Attempting to gain unauthorized access to our systems or other users' content</li>
                <li>Interfering with or disrupting the service, servers, or networks</li>
                <li>Using the service for spam, phishing, or fraudulent activities</li>
                <li>Attempting to circumvent security measures or access controls</li>
                <li>Using automated tools to abuse or overload our services</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Content Guidelines and Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                While we respect privacy and don't routinely monitor content, we reserve 
                the right to remove content that violates these terms:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Content must comply with all applicable laws and regulations</li>
                <li>Content must not infringe on intellectual property rights</li>
                <li>Content must not contain malicious code or security threats</li>
                <li>Content must not be used for harassment, abuse, or hate speech</li>
                <li>Content must not be used for commercial spam or unsolicited advertising</li>
                <li>Content must not violate the privacy or rights of others</li>
              </ul>
              <p className="text-gray-600">
                You are solely responsible for the content you share through AnonShare. 
                We use automated systems to detect potentially harmful content but do 
                not routinely review user content for privacy reasons.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Temporary Content and Data Deletion</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                <strong>Important:</strong> All content shared through AnonShare is temporary 
                and will be automatically deleted according to the following schedule:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Clipboard content: Deleted after 24 hours</li>
                <li>Notepad content: Deleted after 7 days</li>
                <li>File uploads: Deleted after 48 hours or when download limits are reached</li>
                <li>All access codes: Deleted when associated content expires</li>
              </ul>
              <p className="text-gray-600">
                <strong>No Backup or Recovery:</strong> Once content is deleted, it cannot 
                be recovered. We do not maintain backups of user content. You are 
                responsible for keeping your own copies of important content.
              </p>
              <p className="text-gray-600">
                We reserve the right to delete content at any time for violations of 
                these terms, security reasons, or technical requirements.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Intellectual Property Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                You retain all ownership rights to content you share through AnonShare. 
                By using our service, you grant us only the minimal rights necessary to 
                provide the sharing service:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>The right to store your content temporarily</li>
                <li>The right to transmit your content to users with valid access codes</li>
                <li>The right to automatically delete expired content</li>
                <li>The right to scan content for security threats</li>
              </ul>
              <p className="text-gray-600">
                We do not claim ownership of your content, analyze it for commercial 
                purposes, or use it for any purpose other than providing the requested 
                sharing service.
              </p>
            </CardContent>
          </Card>

          {/* Ad Unit */}
          <div className="my-8">
            <AdUnit adSlot="1234567811" adFormat="rectangle" className="text-center" />
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Limitation of Liability and Disclaimers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                <strong>AnonShare is provided "as is" without warranties of any kind.</strong> 
                We explicitly disclaim liability for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Loss of data due to automatic expiration, technical issues, or user error</li>
                <li>Unauthorized access to content due to shared access codes</li>
                <li>Service interruptions, downtime, or technical difficulties</li>
                <li>Any damages arising from use or inability to use the service</li>
                <li>Actions of other users or third parties</li>
                <li>Content shared by other users</li>
                <li>Security breaches or data loss</li>
                <li>Incompatibility with other software or services</li>
              </ul>
              <p className="text-gray-600">
                <strong>Your use of AnonShare is at your own risk.</strong> We strongly 
                recommend keeping local backups of important content and being cautious 
                about the access codes you share.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Service Availability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                While we strive to maintain high availability, we cannot guarantee 
                uninterrupted service. AnonShare may be temporarily unavailable due to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Scheduled maintenance and updates</li>
                <li>Technical difficulties or server issues</li>
                <li>Security incidents requiring immediate response</li>
                <li>Force majeure events beyond our control</li>
                <li>High traffic or system overload</li>
              </ul>
              <p className="text-gray-600">
                We will make reasonable efforts to notify users of planned maintenance 
                but cannot guarantee advance notice for emergency situations.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>User Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                As a user of AnonShare, you are responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Ensuring your content complies with all applicable laws</li>
                <li>Keeping access codes secure and sharing them responsibly</li>
                <li>Understanding that content expires automatically</li>
                <li>Maintaining your own backups of important content</li>
                <li>Not attempting to circumvent security measures</li>
                <li>Reporting abuse or violations of these terms</li>
                <li>Using the service in good faith and for legitimate purposes</li>
                <li>Respecting the privacy and rights of others</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Content Deletion Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                We reserve the right to delete content at any time without notice for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Violations of these Terms of Service</li>
                <li>Suspected illegal activity or content</li>
                <li>Security threats or malicious content</li>
                <li>Technical issues or system maintenance</li>
                <li>Abuse of service resources</li>
                <li>Complaints from rights holders</li>
              </ul>
              <p className="text-gray-600">
                Content deletion is permanent and cannot be undone. We are not required 
                to provide advance notice or explanations for content removal, though 
                we may do so when appropriate.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Termination</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                We reserve the right to terminate or suspend access to our service 
                immediately, without prior notice, for violations of these Terms of 
                Service or for any other reason at our discretion.
              </p>
              <p className="text-gray-600">
                Upon termination, your right to use the service will cease immediately, 
                and any content you have shared may be removed from our systems.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                We reserve the right to update these Terms of Service at any time. 
                Changes will be posted on this page with an updated revision date. 
                Your continued use of AnonShare after changes constitutes acceptance 
                of the new terms.
              </p>
              <p className="text-gray-600">
                We encourage you to review these terms periodically to stay informed 
                of any updates or changes to our policies.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Governing Law and Disputes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                These Terms of Service are governed by and construed in accordance with 
                applicable laws. Any disputes arising from these terms or use of 
                AnonShare will be resolved through appropriate legal channels.
              </p>
              <p className="text-gray-600">
                If any provision of these terms is found to be unenforceable, the 
                remaining provisions will continue to be valid and enforceable.
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
                fair and transparent terms while protecting user privacy and providing 
                reliable service.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Terms;
