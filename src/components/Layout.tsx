import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText, ClipboardList, Share2, Upload, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import ThemeToggle from '@/components/ThemeToggle';
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
  return <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-background border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <img src="https://urevqqvsadvafgqehzna.supabase.co/storage/v1/object/public/anonshare//android-chrome-512x512.png" alt="AnonShare Logo" className="h-10 w-10 rounded-full object-cover" />
                <span className="text-2xl font-bold text-foreground">AnonShare</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {navigation.map(item => {
              const Icon = item.icon;
              return <Link key={item.name} to={item.href} className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(item.href) ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground hover:bg-accent'}`}>
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>;
            })}
            </nav>

            {/* Theme Toggle and Mobile menu button */}
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <div className="md:hidden">
                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && <div className="md:hidden border-t border-border">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map(item => {
              const Icon = item.icon;
              return <Link key={item.name} to={item.href} className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive(item.href) ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground hover:bg-accent'}`} onClick={() => setMobileMenuOpen(false)}>
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
      <footer className="bg-muted/50 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <img src="https://urevqqvsadvafgqehzna.supabase.co/storage/v1/object/public/anonshare//android-chrome-512x512.png" alt="AnonShare Logo" className="h-10 w-10 rounded-full object-cover" />
                <span className="text-xl font-bold text-foreground">AnonShare</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Anonymous sharing made simple. No registration required.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link to="/clipboard" className="text-muted-foreground hover:text-primary text-sm">Anonymous Clipboard</Link></li>
                <li><Link to="/notepad" className="text-muted-foreground hover:text-primary text-sm">Online Notepad</Link></li>
                <li><Link to="/file-share" className="text-muted-foreground hover:text-primary text-sm">File Sharing</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-muted-foreground hover:text-primary text-sm">About Us</Link></li>
                <li><Link to="/blog" className="text-muted-foreground hover:text-primary text-sm">Blog</Link></li>
                <li><Link to="/faq" className="text-muted-foreground hover:text-primary text-sm">FAQ</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-muted-foreground hover:text-primary text-sm">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-muted-foreground hover:text-primary text-sm">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8">
            <p className="text-center text-muted-foreground text-sm">
              © 2024 AnonShare. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Layout;