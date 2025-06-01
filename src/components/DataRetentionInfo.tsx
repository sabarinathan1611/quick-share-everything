
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Shield, Trash2, Download } from 'lucide-react';

const DataRetentionInfo = () => {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Shield className="w-5 h-5 text-green-600" />
          <span>Smart Data Management</span>
        </CardTitle>
        <CardDescription>
          Automatic cleanup rules ensure your privacy and optimize storage
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Automatic Cleanup Rules</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-blue-500 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium">24-Hour Auto-Delete</p>
                  <p className="text-gray-600">All data is automatically deleted after 24 hours, regardless of type</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Download className="w-4 h-4 text-orange-500 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium">Download Limit Protection</p>
                  <p className="text-gray-600">Files are deleted immediately when download limit is reached</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Trash2 className="w-4 h-4 text-red-500 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium">Expiry Time Enforcement</p>
                  <p className="text-gray-600">Content is removed when custom expiry time is reached</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Privacy Benefits</h4>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <ul className="text-sm text-green-800 space-y-2">
                <li>• No permanent data storage</li>
                <li>• Automatic security cleanup</li>
                <li>• Minimal digital footprint</li>
                <li>• Enhanced privacy protection</li>
                <li>• Compliance with data retention best practices</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>Note:</strong> Our smart cleanup system runs automatically every hour to ensure 
            optimal performance and maximum privacy protection. No action is required from you.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DataRetentionInfo;
