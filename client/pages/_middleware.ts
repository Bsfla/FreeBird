import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const hasCookie = req.cookies['connect.sid'];

  if (req.nextUrl.pathname.startsWith('/follow')) {
    if (hasCookie) return NextResponse.next();

    return NextResponse.redirect(new URL('/login', req.url));
  }

  if (['/login', '/signup'].includes(req.nextUrl.pathname)) {
    if (hasCookie) return NextResponse.redirect(new URL('/', req.url));
    return NextResponse.next();
  }
}
