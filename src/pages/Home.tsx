
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, FileText, Upload, Shield, Zap, Globe, Users, Clock, Lock } from 'lucide-react';
import AdUnit from '@/components/AdUnit';
import { useAnime } from '@/hooks/useAnime';
import { 
  AnimatedPrivacyShield, 
  AnimatedLock, 
  AnimatedEye, 
  AnimatedKey,
  AnimatedCodeDigits,
  AnimatedFeatureIcon,
  AnimatedParticles,
  AnimatedTextReveal
} from '@/components/AnimatedElements';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';

const Home = () => {
  const {
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    staggerFadeIn,
    floatingAnimation
  } = useAnime();

  const heroRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLElement>(null);
  const whyChooseRef = useRef<HTMLElement>(null);
  const useCasesRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Hero section animations
    if (heroRef.current) {
      const title = heroRef.current.querySelector('h1');
      const subtitle = heroRef.current.querySelector('p');
      const buttons = Array.from(heroRef.current.querySelectorAll('a')).filter(x => x instanceof HTMLElement) as HTMLElement[];

      if (title instanceof HTMLElement) fadeInUp(title, 200);
      if (subtitle instanceof HTMLElement) fadeInUp(subtitle, 400);
      staggerFadeIn(buttons, 600);
    }

    // Features section animations
    if (featuresRef.current) {
      const cards = Array.from(featuresRef.current.querySelectorAll('.feature-card')).filter(x => x instanceof HTMLElement) as HTMLElement[];
      staggerFadeIn(cards, 200);
    }

    // Steps section animations
    if (stepsRef.current) {
      const steps = Array.from(stepsRef.current.querySelectorAll('.step-item')).filter(x => x instanceof HTMLElement) as HTMLElement[];
      staggerFadeIn(steps, 300);
    }

    // Why Choose section animations
    if (whyChooseRef.current) {
      const items = Array.from(whyChooseRef.current.querySelectorAll('.why-item')).filter(x => x instanceof HTMLElement) as HTMLElement[];
      staggerFadeIn(items, 250);
    }

    // Use Cases section animations
    if (useCasesRef.current) {
      const cases = Array.from(useCasesRef.current.querySelectorAll('.use-case')).filter(x => x instanceof HTMLElement) as HTMLElement[];
      staggerFadeIn(cases, 200);
    }

    // CTA section animations
    if (ctaRef.current) {
      const ctaContent = ctaRef.current.querySelector('.cta-content');
      if (ctaContent instanceof HTMLElement) scaleIn(ctaContent, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-sky-50 relative overflow-hidden">
      {/* Animated Background Particles */}
      <AnimatedParticles />

      {/* Hero Section with Beams */}
      <BackgroundBeamsWithCollision>
        <section ref={heroRef} className="py-20 px-4 relative bg-transparent">
          <div className="max-w-6xl mx-auto text-center">
            {/* Animated Privacy Shield */}
            <div className="flex justify-center mb-8">
              <AnimatedPrivacyShield />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              <AnimatedTextReveal 
                text="Share Notes, Files & Text Instantly — Anonymously"
                className="inline-block"
                delay={200}
              />
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              <AnimatedTextReveal 
                text="Use our online notepad, clipboard, and file drop — 100% private, no signup needed. Perfect for anonymous clipboard sharing, paste without login, and secure file sharing."
                className="inline-block"
                delay={400}
              />
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/clipboard">
                <Button size="lg" className="text-lg px-8 py-3 transform hover:scale-105 transition-transform">
                  Start Sharing Now
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="text-lg px-8 py-3 transform hover:scale-105 transition-transform">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </BackgroundBeamsWithCollision>

      {/* Ad Unit */}
      <div className="max-w-4xl mx-auto px-4 mb-12">
        <AdUnit adSlot="1234567890" adFormat="horizontal" className="text-center" />
      </div>

      {/* Features Section */}
      <section ref={featuresRef} className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Anonymous Sharing Tools for Everyone
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Enter 4-digit codes to receive shared content instantly. No accounts, no tracking, completely anonymous.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="feature-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <AnimatedFeatureIcon 
                  icon={<Copy className="w-6 h-6 text-white" />}
                  color="bg-blue-600"
                  delay={200}
                  className="mb-4"
                />
                <CardTitle>Anonymous Clipboard</CardTitle>
                <CardDescription>
                  Perfect anonymous clipboard tool. Paste text and get a 4-digit code to share instantly. 
                  No login required - ideal for quick text sharing across devices.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/clipboard">
                  <Button className="w-full">Try Clipboard</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="feature-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <AnimatedFeatureIcon 
                  icon={<FileText className="w-6 h-6 text-white" />}
                  color="bg-green-600"
                  delay={400}
                  className="mb-4"
                />
                <CardTitle>Online Notepad</CardTitle>
                <CardDescription>
                  Create formatted notes with our rich text editor. Add headers, lists, links, and 
                  styling. Share with generated codes - perfect for collaboration.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/notepad">
                  <Button className="w-full">Create Notes</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="feature-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <AnimatedFeatureIcon 
                  icon={<Upload className="w-6 h-6 text-white" />}
                  color="bg-purple-600"
                  delay={600}
                  className="mb-4"
                />
                <CardTitle>Secure File Share</CardTitle>
                <CardDescription>
                  Upload and share files up to 50MB with download limits and expiration dates. 
                  Perfect secure file share solution without email attachments.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/file-share">
                  <Button className="w-full">Share Files</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How 4-Digit Codes Work */}
      <section ref={stepsRef} className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How 4-Digit Codes Work
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="step-item text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Upload className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">1. Share Content</h3>
              <p className="text-gray-600 text-sm">
                Upload text, notes, or files using our anonymous sharing tools
              </p>
            </div>
            <div className="step-item text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <AnimatedCodeDigits code="1234" />
              </div>
              <h3 className="text-lg font-semibold mb-3">2. Get 4-Digit Code</h3>
              <p className="text-gray-600 text-sm">
                Receive a unique 4-digit code for your shared content
              </p>
            </div>
            <div className="step-item text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">3. Share Code</h3>
              <p className="text-gray-600 text-sm">
                Give the code to anyone who needs access to your content
              </p>
            </div>
            <div className="step-item text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">4. Instant Access</h3>
              <p className="text-gray-600 text-sm">
                Enter the 4-digit code on our homepage to instantly receive the shared content
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose AnonShare Section */}
      <section ref={whyChooseRef} className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose AnonShare?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="why-item text-center">
              <div className="flex justify-center mb-4">
                <AnimatedPrivacyShield />
              </div>
              <h3 className="text-xl font-semibold mb-3">Privacy First</h3>
              <p className="text-gray-600">
                No registration required. No tracking. No data collection. Your privacy is 
                guaranteed with our anonymous sharing platform.
              </p>
            </div>
            <div className="why-item text-center">
              <div className="flex justify-center mb-4">
                <AnimatedLock />
              </div>
              <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
              <p className="text-gray-600">
                Share content instantly with auto-generated 4-digit codes. No waiting, no complex 
                setup - just fast, efficient sharing tools.
              </p>
            </div>
            <div className="why-item text-center">
              <div className="flex justify-center mb-4">
                <AnimatedEye />
              </div>
              <h3 className="text-xl font-semibold mb-3">Globally Accessible</h3>
              <p className="text-gray-600">
                Access your shared content from anywhere in the world with our simple 
                code-based retrieval system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Unit */}
      <div className="max-w-4xl mx-auto px-4 my-12">
        <AdUnit adSlot="1234567891" adFormat="rectangle" className="text-center" />
      </div>

      {/* Use Cases Section */}
      <section ref={useCasesRef} className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Perfect for Every Anonymous Sharing Need
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="use-case bg-white rounded-lg p-6 border hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Copy className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">For Developers</h3>
              </div>
              <p className="text-gray-600">
                Share code snippets, configuration files, and debug logs with team members 
                instantly. Perfect anonymous clipboard for developers who need paste without login.
              </p>
            </div>
            <div className="use-case bg-white rounded-lg p-6 border hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <FileText className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold">For Content Creators</h3>
              </div>
              <p className="text-gray-600">
                Share draft articles, creative briefs, and collaboration notes with clients 
                and team members without exposing sensitive information.
              </p>
            </div>
            <div className="use-case bg-white rounded-lg p-6 border hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <Upload className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold">For Students</h3>
              </div>
              <p className="text-gray-600">
                Share study notes, project files, and research materials with classmates 
                while maintaining privacy and avoiding email limitations.
              </p>
            </div>
            <div className="use-case bg-white rounded-lg p-6 border hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <Lock className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold">For Business Professionals</h3>
              </div>
              <p className="text-gray-600">
                Share meeting notes, proposals, and documents quickly without going through 
                complex approval processes or corporate file sharing systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center cta-content">
          <div className="flex justify-center mb-6">
            <AnimatedKey />
          </div>
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Anonymous Sharing?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of users who trust AnonShare for their privacy-first sharing needs.
          </p>
          <Link to="/clipboard">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3 transform hover:scale-105 transition-transform">
              Start Sharing Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
