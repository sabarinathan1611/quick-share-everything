
import React, { useEffect, useRef, useState } from 'react';

interface AdUnitProps {
  adSlot: string;
  adFormat?: 'auto' | 'rectangle' | 'vertical' | 'horizontal';
  style?: React.CSSProperties;
  className?: string;
}

const AdUnit: React.FC<AdUnitProps> = ({ 
  adSlot, 
  adFormat = 'auto', 
  style = {},
  className = ''
}) => {
  const adRef = useRef<HTMLModElement>(null);
  const [hasConsent, setHasConsent] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      // Check if we have advertising consent via Ketch
      if (typeof window !== 'undefined' && (window as any).ketchConsentState) {
        const consentState = (window as any).ketchConsentState;
        setHasConsent(consentState.advertising);
      }
    };

    // Check initial consent
    checkConsent();

    // Listen for consent changes
    const handleConsentChange = () => {
      checkConsent();
    };

    // Listen for custom consent events
    window.addEventListener('ketch-consent-updated', handleConsentChange);

    // Check periodically for consent state changes
    const interval = setInterval(checkConsent, 1000);

    return () => {
      window.removeEventListener('ketch-consent-updated', handleConsentChange);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (hasConsent && !isLoaded) {
      try {
        // Check if adsbygoogle is available
        if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
          ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
          setIsLoaded(true);
        }
      } catch (error) {
        console.error('AdSense error:', error);
      }
    }
  }, [hasConsent, isLoaded]);

  // Don't render ads if no consent
  if (!hasConsent) {
    return (
      <div className={`ad-placeholder ${className}`} style={style}>
        <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 text-center text-gray-500 text-sm">
          Ads will appear here with your consent
        </div>
      </div>
    );
  }

  return (
    <div className={`ad-container ${className}`} style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client="ca-pub-7684542177727792"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
        ref={adRef}
      />
    </div>
  );
};

export default AdUnit;
