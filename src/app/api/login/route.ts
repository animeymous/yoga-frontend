import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()
  const { email, password } = body

  // Call backend auth API
  const res = await fetch('http://localhost:8080/api/v1/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })

  if (!res.ok) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
  }

  const data = await res.json()
  const token = data.token

  const response = NextResponse.json({ success: true })
  response.cookies.set({
    name: 'token',
    value: token,
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 24, // 1 day
  })

  return response
}