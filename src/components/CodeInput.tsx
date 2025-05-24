
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface CodeInputProps {
  onCodeSubmit: (code: string) => void;
  isLoading?: boolean;
}

const CodeInput: React.FC<CodeInputProps> = ({ onCodeSubmit, isLoading = false }) => {
  const [code, setCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim()) {
      onCodeSubmit(code.trim());
    }
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center space-x-2">
          <Search className="w-5 h-5" />
          <span>Retrieve Shared Content</span>
        </CardTitle>
        <CardDescription>
          Enter a code to access shared clipboard, notes, or files
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Enter 4-6 digit code..."
            value={code}
            onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
            className="text-center text-lg tracking-wider"
            maxLength={6}
          />
          <Button 
            type="submit" 
            className="w-full" 
            disabled={!code.trim() || isLoading}
          >
            {isLoading ? 'Searching...' : 'Retrieve Content'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CodeInput;
