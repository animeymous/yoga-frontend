// // app/send-email/page.tsx
'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function EmailSection() {
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const storedEmail = sessionStorage.getItem('contact_email');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    setStatus('');
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message }),
      });

      if (res.ok) {
        setStatus('Email sent!');
        setMessage('');
      } else {
        setStatus('Failed to send email.');
      }
    } catch (error) {
      setStatus('Error sending email.');
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
      <Button onClick={handleSubmit} disabled={loading || !email || !message}>
        {loading ? 'Sending...' : 'Send Email'}
      </Button>
      {status && <p className="text-sm">{status}</p>}
    </div>
  );
}
