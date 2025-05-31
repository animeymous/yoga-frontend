// src/app/api/send-email/route.ts
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { email, message } = await req.json();

    const backendURL = 'https://yoga-backend-9w5v.onrender.com/api/v1/email'; // or your deployed backend URL
    const auth = Buffer.from('admin:admin123').toString('base64');

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