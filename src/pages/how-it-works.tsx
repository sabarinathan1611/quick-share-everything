import { Helmet } from 'react-helmet';
import React from 'react';
import { ClipboardList, FileText, Upload, Key, Clock, Trash2 } from 'lucide-react';

const HowItWorks = () => (
  <>
    <Helmet>
      <title>How It Works – AnonShare</title>
      <meta name="description" content="Learn how AnonShare lets you share text, notes, and files anonymously. A step-by-step guide to using our clipboard, notepad, and secure file sharing tools." />
      <meta name="robots" content="index, follow" />
    </Helmet>
    <main className="min-h-screen bg-sky-50">
      <section className="max-w-4xl mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">How It Works</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AnonShare is designed for simplicity, speed, and privacy. Follow these steps to share content securely and anonymously in seconds.
          </p>
        </header>

        <section className="space-y-10">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-primary text-2xl font-bold">1</span>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-2 text-foreground">Choose Your Sharing Tool</h2>
              <p className="text-muted-foreground">
                We offer three distinct tools tailored to your sharing needs. Select the one that fits best:
              </p>
              <ul className="mt-2 space-y-2 text-muted-foreground list-disc list-inside">
                <li><strong>Anonymous Clipboard:</strong> For quickly sharing snippets of plain text or links.</li>
                <li><strong>Rich Notepad:</strong> For creating formatted notes with headers, lists, and styles.</li>
                <li><strong>Secure File Sharing:</strong> For uploading and sharing files up to 50MB.</li>
              </ul>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-primary text-2xl font-bold">2</span>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-2 text-foreground">Add Your Content</h2>
              <p className="text-muted-foreground">
                Paste your text, write a note in the editor, or drag and drop a file to upload. You never need to provide personal information. For sensitive content, you can add password protection for an extra layer of security.
              </p>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-primary text-2xl font-bold">3</span>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-2 text-foreground">Get a Unique Share Code</h2>
              <p className="text-muted-foreground">
                Once you submit your content, our system generates a unique, 4-digit numeric code (e.g., 3453). This code is the key to accessing your shared content and is designed to be easy to share and remember.
              </p>
            </div>
          </div>
          
          {/* Step 4 */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary text-2xl font-bold">4</span>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-2 text-foreground">Share and Retrieve</h2>
              <p className="text-muted-foreground">
                Give the 4-digit code to your recipient. They can enter it on the homepage to instantly access the content. There are no complicated links or access procedures.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Expiration and Privacy Logic</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-card p-6 rounded-lg border border-border">
                    <Clock className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Automatic Expiration</h3>
                    <p className="text-muted-foreground text-sm">All content, including clipboard shares, notes, and files, is automatically deleted after 24 hours to protect your privacy.</p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border">
                    <Trash2 className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Permanent Deletion</h3>
                    <p className="text-muted-foreground text-sm">Once content expires or reaches its download limit, it is permanently and irrecoverably erased from our servers.</p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border">
                    <Key className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No Tracking</h3>
                    <p className="text-muted-foreground text-sm">We don't use tracking cookies or log IP addresses. Your activity on AnonShare remains anonymous.</p>
                </div>
            </div>
        </section>

      </section>
    </main>
  </>
);

export default HowItWorks; 