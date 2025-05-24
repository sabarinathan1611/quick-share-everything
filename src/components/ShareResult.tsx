
import React from 'react';
import { Copy, Download, FileText, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Share as ShareType, downloadFile } from '@/utils/shareService';

interface ShareResultProps {
  share: ShareType;
  onBack: () => void;
}

const ShareResult: React.FC<ShareResultProps> = ({ share, onBack }) => {
  const { toast } = useToast();

  const handleCopyContent = () => {
    if (share.content) {
      navigator.clipboard.writeText(share.content);
      toast({
        title: "Copied!",
        description: "Content copied to clipboard",
      });
    }
  };

  const handleDownloadFile = async () => {
    try {
      const downloadUrl = await downloadFile(share);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = share.file_name || 'download';
      link.click();
      
      toast({
        title: "Download started",
        description: `Downloading ${share.file_name}`,
      });
    } catch (error) {
      toast({
        title: "Download failed",
        description: "Failed to download file",
        variant: "destructive"
      });
    }
  };

  const formatFileSize = (bytes: number) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    if (bytes === 0) return '0 Bytes';
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
  };

  const getIcon = () => {
    switch (share.type) {
      case 'clipboard':
        return <Copy className="w-5 h-5" />;
      case 'notepad':
        return <FileText className="w-5 h-5" />;
      case 'file':
        return <Download className="w-5 h-5" />;
    }
  };

  const getTitle = () => {
    switch (share.type) {
      case 'clipboard':
        return 'Shared Clipboard';
      case 'notepad':
        return 'Shared Note';
      case 'file':
        return 'Shared File';
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      <Button variant="outline" onClick={onBack} className="mb-4">
        ← Back to Home
      </Button>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            {getIcon()}
            <span>{getTitle()}</span>
          </CardTitle>
          <CardDescription>
            Code: {share.code} • Created: {new Date(share.created_at).toLocaleDateString()}
            {share.expires_at && (
              <> • Expires: {new Date(share.expires_at).toLocaleDateString()}</>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {share.type === 'clipboard' && (
            <>
              <Textarea
                value={share.content || ''}
                readOnly
                className="min-h-[200px] resize-y"
              />
              <Button onClick={handleCopyContent} className="w-full">
                <Copy className="w-4 h-4 mr-2" />
                Copy to Clipboard
              </Button>
            </>
          )}

          {share.type === 'notepad' && (
            <>
              <div className="p-4 bg-gray-50 rounded-lg border">
                <pre className="whitespace-pre-wrap text-sm">{share.content}</pre>
              </div>
              <Button onClick={handleCopyContent} variant="outline">
                <Copy className="w-4 h-4 mr-2" />
                Copy Note
              </Button>
            </>
          )}

          {share.type === 'file' && (
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{share.file_name}</p>
                    <p className="text-sm text-gray-500">
                      {share.file_size && formatFileSize(share.file_size)}
                    </p>
                    <p className="text-xs text-gray-400">
                      Downloads: {share.download_count}
                      {share.max_downloads && ` / ${share.max_downloads}`}
                    </p>
                  </div>
                </div>
              </div>
              <Button onClick={handleDownloadFile} className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Download File
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ShareResult;
