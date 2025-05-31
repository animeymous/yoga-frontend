// app/send-email/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { emailService } from '@/services/email';
import { toast } from 'sonner';

export default function EmailSection() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedEmail = sessionStorage.getItem('contact_email');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const handleSubmit = async () => {
    if (!email || !message) {
      toast.error('Email and message are required.');
      return;
    }

    try {
      setLoading(true);
      const response = await emailService.sendEmail({ email, message });
      console.log(response);

      if (response.success) {
        toast.success('Email sent successfully!');
        setMessage('');
      } else {
        toast.error(response.message || 'Failed to send email.');
      }
    } catch (error) {
      console.error('Send email error:', error);
      toast.error('An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 space-y-4">
      <Input
        type="email"
        placeholder="Recipient Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        readOnly
      />
      <Textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button onClick={handleSubmit} disabled={loading || !message}>
        {loading ? 'Sending...' : 'Send Email'}
      </Button>
    </div>
  );
}