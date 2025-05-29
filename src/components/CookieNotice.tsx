import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Cookie } from 'lucide-react';

const CookieNotice = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    // Initialize analytics/ads here if accepted
    if (typeof window !== 'undefined' && 'gtag' in window) {
      gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted'
      });
    }
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
    // Disable analytics/ads here if rejected
    if (typeof window !== 'undefined' && 'gtag' in window) {
      gtag('consent', 'update', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied'
      });
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Cookie Consent</h3>
              <p className="text-sm text-gray-600">
                We use cookies to personalize content and ads, and to analyze traffic. 
                We also share information about your usage with our advertising and analytics partners 
                to improve AnonShare and provide relevant content.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 flex-shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={handleReject}
              className="text-gray-600 hover:text-gray-800"
            >
              Reject
            </Button>
            <Button
              size="sm"
              onClick={handleAccept}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Accept
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        <div className="mt-3 pt-3 border-t border-gray-100">
          <p className="text-xs text-gray-500">
            By continuing to use AnonShare, you agree to our use of cookies. 
            You can change your preferences anytime in your browser settings.
            <a href="/privacy" className="text-blue-600 hover:underline ml-1">
              Learn more in our Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookieNotice;
