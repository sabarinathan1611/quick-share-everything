import React, { useState } from 'react';
import AdUnit from '@/components/AdUnit';
import ClipboardHeader from '@/components/ClipboardHeader';
import ClipboardForm from '@/components/ClipboardForm';
import ClipboardSuccess from '@/components/ClipboardSuccess';
import ClipboardFeatures from '@/components/ClipboardFeatures';
import ClipboardUseCases from '@/components/ClipboardUseCases';
import DataRetentionInfo from '@/components/DataRetentionInfo';

const Clipboard = () => {
  const [shareCode, setShareCode] = useState('');
  const [isEncrypted, setIsEncrypted] = useState(false);
  const [recoveryEmail, setRecoveryEmail] = useState<string | undefined>();

  const handleSuccess = (code: string, encrypted: boolean, email?: string) => {
    setShareCode(code);
    setIsEncrypted(encrypted);
    setRecoveryEmail(email);
  };

  const handleReset = () => {
    setShareCode('');
    setIsEncrypted(false);
    setRecoveryEmail(undefined);
  };

  return (
    <div className="min-h-screen bg-sky-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <ClipboardHeader />

        {/* Ad Unit */}
        <div className="mb-12">
          <AdUnit adSlot="1234567812" adFormat="horizontal" className="text-center" />
        </div>

        {!shareCode ? (
          <ClipboardForm onSuccess={handleSuccess} />
        ) : (
          <ClipboardSuccess 
            shareCode={shareCode}
            isEncrypted={isEncrypted}
            recoveryEmail={recoveryEmail}
            onReset={handleReset}
          />
        )}

        {/* Data Retention Information */}
        <DataRetentionInfo />

        {/* Ad Unit */}
        <div className="mt-12">
          <AdUnit adSlot="1234567813" adFormat="rectangle" className="text-center" />
        </div>

        <ClipboardFeatures />
        <ClipboardUseCases />
      </div>
    </div>
  );
};

export default Clipboard;
