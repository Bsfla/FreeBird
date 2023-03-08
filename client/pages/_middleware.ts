import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const hasCookie = req.cookies['connect.sid'];

  if (!['/login', '/signup'].includes(req.nextUrl.pathname)) {
    if (hasCookie) return NextResponse.next();
    return NextResponse.redirect(new URL('/login', req.url));
  } else {
    return NextResponse.next();
  }
}
