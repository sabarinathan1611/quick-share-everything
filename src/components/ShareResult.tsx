import React, { useState, useEffect } from 'react';
import { Copy, Download, FileText, Share, Edit, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Share as ShareType, downloadFile, deleteShare } from '@/utils/shareService';
import { decryptContent } from '@/utils/encryption';
import RichTextEditor from '@/components/RichTextEditor';
import PasswordInput from '@/components/PasswordInput';

interface ShareResultProps {
  share: ShareType;
  onBack: () => void;
}

const ShareResult: React.FC<ShareResultProps> = ({ share, onBack }) => {
  const [currentShare, setCurrentShare] = useState(share);
  const [decryptedContent, setDecryptedContent] = useState<string | null>(null);
  const [decryptedFileName, setDecryptedFileName] = useState(share.file_name || 'file');
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (share.is_encrypted && !decryptedContent) {
      // Initially, don't try to decrypt. Wait for password.
      return;
    }
    if (!share.is_encrypted) {
      setDecryptedContent(share.content || '');
    }
  }, [share, decryptedContent]);

  const handlePasswordSubmit = async (password: string) => {
    setIsLoading(true);
    try {
      if (share.encrypted_payload) {
        const content = await decryptContent(share.encrypted_payload, password);
        setDecryptedContent(content);
        if (share.type === 'file') {
          setDecryptedFileName(content);
        }
      }
    } catch (error) {
      toast({
        title: "Decryption failed",
        description: "Invalid password or corrupted data.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyContent = () => {
    const contentToCopy = isEditing ? editedContent : (decryptedContent || share.content);
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
    setEditedContent(decryptedContent || share.content || '');
    setIsEditing(false);
  };

  const handleDownloadFile = async () => {
    try {
      const { downloadUrl, newDownloadCount } = await downloadFile(currentShare);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = decryptedFileName;
      link.click();
      
      toast({
        title: "Download started",
        description: `Downloading ${decryptedFileName}`,
      });

      const updatedShare = { ...currentShare, download_count: newDownloadCount };
      setCurrentShare(updatedShare);
      
      if (updatedShare.max_downloads && newDownloadCount >= updatedShare.max_downloads) {
        toast({
          title: "Download limit reached",
          description: "This file has now been deleted.",
          variant: "destructive",
        });
        await deleteShare(updatedShare);
        onBack();
      }
    } catch (error) {
      toast({
        title: "Download failed",
        description: (error as Error).message || "Failed to download file",
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
    const baseTitle = (() => {
      switch (share.type) {
        case 'clipboard':
          return 'Shared Clipboard';
        case 'notepad':
          return 'Shared Note';
        case 'file':
          return 'Shared File';
      }
    })();
    
    return share.is_encrypted ? `🔒 ${baseTitle}` : baseTitle;
  };

  // Show password input if content is encrypted and not yet decrypted
  if (share.is_encrypted && !decryptedContent) {
    return (
      <div className="max-w-4xl mx-auto space-y-4">
        <Button variant="outline" onClick={onBack} className="mb-4">
          ← Back to Home
        </Button>
        
        <PasswordInput
          onPasswordSubmit={handlePasswordSubmit}
          isLoading={isLoading}
          error=""
          onCancel={onBack}
          shareCode={share.code}
          recoveryEmail={share.recovery_email}
        />
      </div>
    );
  }

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
            {share.type === 'notepad' && isEditing && (
              <div className="flex items-center space-x-2">
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
          </CardTitle>
          <CardDescription>
            Code: {share.code} • Created: {new Date(share.created_at).toLocaleDateString()}
            {share.expires_at && (
              <> • Expires: {new Date(share.expires_at).toLocaleDateString()}</>
            )}
            {share.is_encrypted && <> • Protected with E2EE</>}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {share.type === 'clipboard' && (
            <>
              <Textarea
                value={decryptedContent || share.content || ''}
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
                  value={isEditing ? editedContent : (decryptedContent || share.content || '')}
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
                    <p className="font-medium">{decryptedFileName}</p>
                    <p className="text-sm text-gray-500">
                      {share.file_size && formatFileSize(share.file_size)}
                    </p>
                    <p className="text-xs text-gray-400">
                      Downloads: {currentShare.download_count}
                      {currentShare.max_downloads && ` / ${currentShare.max_downloads}`}
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
