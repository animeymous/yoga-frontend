// src/app/api/send-email/route.ts
import { NextRequest } from 'next/server';
import { getApiUrl, getAdminUsername, getAdminPassword } from '@/config/env';

export async function POST(req: NextRequest) {
  try {
    const { email, message } = await req.json();

    const username = process.env.ADMIN_USERNAME;
    const password = process.env.ADMIN_PASSWORD;

    const backendURL = `${getApiUrl('email')}`; // or your deployed backend URL
    const auth = Buffer.from(`${getAdminUsername()}:${getAdminPassword()}`).toString('base64');

    const res = await fetch(backendURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${auth}`,
      },
      body: JSON.stringify({ email, message }),
    });

    const text = await res.text();

    return new Response(text, {
      status: res.status,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Failed to call backend email API:', error);
    return new Response(
      JSON.stringify({ error: 'Internal Server Error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}