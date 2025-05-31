// src/app/api/admin/contacts/route.ts
import { NextRequest } from 'next/server';
import { getAdminUsername, getAdminPassword, getApiUrl } from '@/config/env';

export const GET = async (req: NextRequest) => {

  const username = process.env.ADMIN_USERNAME;
  const password = process.env.ADMIN_PASSWORD;

  console.log("process.env.ADMIN_USERNAME", process.env.ADMIN_USERNAME);
  console.log("process.env.ADMIN_PASSWORD", process.env.ADMIN_PASSWORD);

  const auth = Buffer.from(`${username}:${password}`).toString('base64');

  const res = await fetch(`${getApiUrl}/api/v1/contact`, {
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