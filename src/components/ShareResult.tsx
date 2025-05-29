import React, { useState } from 'react';
import { Copy, Download, FileText, Share, Edit, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Share as ShareType, downloadFile } from '@/utils/shareService';
import RichTextEditor from '@/components/RichTextEditor';

interface ShareResultProps {
  share: ShareType;
  onBack: () => void;
}

const ShareResult: React.FC<ShareResultProps> = ({ share, onBack }) => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(share.content || '');

  const handleCopyContent = () => {
    const contentToCopy = isEditing ? editedContent : share.content;
    if (contentToCopy) {
      navigator.clipboard.writeText(contentToCopy);
      toast({
        title: "Copied!",
        description: "Content copied to clipboard",
      });
    }
  };

  const handleSaveEdit = () => {
    // TODO: Implement save functionality to update the share in the database
    // For now, just show a toast message
    toast({
      title: "Edit saved locally",
      description: "Note: This is a local edit only. Save to database will be implemented.",
    });
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditedContent(share.content || '');
    setIsEditing(false);
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
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {getIcon()}
              <span>{getTitle()}</span>
            </div>
            {share.type === 'notepad' && (
              <div className="flex items-center space-x-2">
                {!isEditing ? (
                  <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Note
                  </Button>
                ) : (
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" onClick={handleSaveEdit}>
                      <Save className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                    <Button variant="outline" size="sm" onClick={handleCancelEdit}>
                      <X className="w-4 h-4 mr-2" />
                      Cancel
                    </Button>
                  </div>
                )}
              </div>
            )}
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
              <div className="border rounded-lg">
                <RichTextEditor
                  value={isEditing ? editedContent : (share.content || '')}
                  onChange={isEditing ? setEditedContent : () => {}}
                  className={isEditing ? "" : "pointer-events-none"}
                  placeholder={isEditing ? "Edit your note here..." : ""}
                />
              </div>
              <div className="flex space-x-2">
                <Button onClick={handleCopyContent} variant="outline" className="flex-1">
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Note
                </Button>
                {isEditing && (
                  <div className="text-sm text-gray-500 flex items-center">
                    Editing mode - changes are local only
                  </div>
                )}
              </div>
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
