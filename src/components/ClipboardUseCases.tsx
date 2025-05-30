
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ClipboardUseCases = () => {
  return (
    <Card className="mt-12">
      <CardHeader>
        <CardTitle>Perfect For</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Developers</h4>
            <p className="text-gray-600">Share code snippets, error logs, and configuration files quickly with team members.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Content Creators</h4>
            <p className="text-gray-600">Share draft content, ideas, and collaboration notes without email limitations.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Students</h4>
            <p className="text-gray-600">Share study notes, research findings, and project updates with classmates.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Business Users</h4>
            <p className="text-gray-600">Share meeting notes, proposals, and quick updates without complex systems.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClipboardUseCases;
