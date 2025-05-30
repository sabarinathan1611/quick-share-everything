
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ClipboardFeatures = () => {
  return (
    <div className="mt-16 grid md:grid-cols-3 gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Instant Sharing</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 text-sm">
            Generate secure sharing codes instantly. No registration required, 
            just paste and share.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">End-to-End Encryption</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 text-sm">
            Optional client-side encryption ensures your sensitive content 
            remains private and secure.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Anonymous Access</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 text-sm">
            No tracking, no accounts, no personal information required. 
            Complete privacy guaranteed.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClipboardFeatures;
