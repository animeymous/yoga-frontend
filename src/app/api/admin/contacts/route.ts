// src/app/api/admin/contacts/route.ts
import { NextRequest } from 'next/server';
import { getAdminUsername, getAdminPassword, getApiUrl } from '@/config/env';

export const GET = async (req: NextRequest) => {

  const auth = Buffer.from(`${getAdminUsername()}:${getAdminPassword()}`).toString('base64');

  const res = await fetch(`${getApiUrl('contact')}`, {
    headers: {
      Authorization: `Basic ${auth}`
    },
  });

  const data = await res.json();

  return new Response(JSON.stringify(data), {
    status: res.status,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};