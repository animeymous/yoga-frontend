import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// List of routes that should NOT be protected
const publicRoutes = ['/admin/auth/login']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get('token')?.value

  // Skip middleware for public routes
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next()
  }

  const isProtected =
    pathname.startsWith('/admin') ||
    pathname.startsWith('/dashboard') ||
    pathname.startsWith('/settings')

  if (isProtected && !token) {
    const loginUrl = new URL('/admin/auth/login', request.url)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/dashboard/:path*', '/settings/:path*'],
}