
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText, ClipboardList, Share2, Upload, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Layout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const navigation = [{
    name: 'Home',
    href: '/',
    icon: FileText
  }, {
    name: 'Clipboard',
    href: '/clipboard',
    icon: ClipboardList
  }, {
    name: 'Notepad',
    href: '/notepad',
    icon: Share2
  }, {
    name: 'File Share',
    href: '/file-share',
    icon: Upload
  }];

  return <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <img src="https://urevqqvsadvafgqehzna.supabase.co/storage/v1/object/public/anonshare//android-chrome-512x512.png" alt="AnonShare Logo" className="h-10 w-10 rounded-full object-cover" />
                <span className="text-2xl font-bold text-gray-900">AnonShare</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {navigation.map(item => {
              const Icon = item.icon;
              return <Link key={item.name} to={item.href} className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(item.href) ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}>
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>;
            })}
            </nav>

            {/* Mobile menu button */}
            <div className="flex items-center space-x-2">
              <div className="md:hidden">
                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && <div className="md:hidden border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map(item => {
              const Icon = item.icon;
              return <Link key={item.name} to={item.href} className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive(item.href) ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`} onClick={() => setMobileMenuOpen(false)}>
                      <Icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>;
            })}
              </div>
            </div>}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <img src="https://urevqqvsadvafgqehzna.supabase.co/storage/v1/object/public/anonshare//android-chrome-512x512.png" alt="AnonShare Logo" className="h-10 w-10 rounded-full object-cover" />
                <span className="text-xl font-bold text-gray-900">AnonShare</span>
              </div>
              <p className="text-gray-600 text-sm">
                Anonymous sharing made simple. No registration required.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link to="/clipboard" className="text-gray-600 hover:text-blue-600 text-sm">Anonymous Clipboard</Link></li>
                <li><Link to="/notepad" className="text-gray-600 hover:text-blue-600 text-sm">Online Notepad</Link></li>
                <li><Link to="/file-share" className="text-gray-600 hover:text-blue-600 text-sm">File Sharing</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/how-to-share-text-anonymously" className="text-gray-600 hover:text-blue-600 text-sm">How to Share Text Anonymously</Link></li>
                <li><Link to="/pastebin-alternative-no-login" className="text-gray-600 hover:text-blue-600 text-sm">Pastebin Alternative No Login</Link></li>
                <li><Link to="/temporary-file-sharing-tool" className="text-gray-600 hover:text-blue-600 text-sm">Temporary File Sharing Tool</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-gray-600 hover:text-blue-600 text-sm">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-gray-600 hover:text-blue-600 text-sm">Terms of Service</Link></li>
                <li><Link to="/about" className="text-gray-600 hover:text-blue-600 text-sm">About Us</Link></li>
                <li><Link to="/faq" className="text-gray-600 hover:text-blue-600 text-sm">FAQ</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8">
            <p className="text-center text-gray-600 text-sm">
              © 2024 AnonShare. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>;
};

export default Layout;
