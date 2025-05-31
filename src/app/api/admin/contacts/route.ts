// src/app/api/admin/contacts/route.ts
import { NextRequest } from 'next/server';

export const GET = async (req: NextRequest) => {
  const auth = Buffer.from('admin:admin123').toString('base64');

  const res = await fetch('https://yoga-backend-9w5v.onrender.com/api/v1/contact', {
    headers: {
      Authorization: `Basic ${auth}`,
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