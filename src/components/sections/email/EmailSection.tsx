// app/send-email/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { getApiUrl } from '@/config/env';

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
    setLoading(true);
    try {

      const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];
      console.log('token', token);

      const res = await fetch(`${getApiUrl('contact/email')}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ email, message }),
      });
  
      const data = await res.json();
      if (res.ok) {
        toast.success(data.message || "Thank you for your message! We'll get back to you soon.");
      } else {
        toast.error(data.message || 'Failed to send email.');
      }
    } catch (error) {
      toast.error('Error sending email.');
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