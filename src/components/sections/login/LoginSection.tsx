'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, EyeOff } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getApiUrl } from '@/config/env';

export default function LoginSection() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);

    try {
      const res = await fetch(`${getApiUrl('auth/login')}`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await res.json();
      console.log(data);
      if (res.ok) {
        localStorage.setItem('token', data.token);
        console.log(data.token);
        router.push('/admin/contact');
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (err) {
      alert('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-slate-100 dark:from-slate-900 dark:to-black px-4">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-sm shadow-2xl border border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Welcome Back 👋</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
            <div className="relative">
              <Input
                placeholder="Password"
                type={show ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2"
                onClick={() => setShow(!show)}
              >
                {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
            <Button
              onClick={handleLogin}
              disabled={loading || !email || !password}
              className={cn(loading && 'opacity-70')}
            >
              {loading ? 'Logging in...' : 'Login'}
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
