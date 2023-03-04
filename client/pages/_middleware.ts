import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const hasCookie = req.cookies['connect.sid'];

  if (['/follow'].includes(req.nextUrl.pathname)) {
    if (hasCookie) return NextResponse.next();

    return NextResponse.redirect(new URL('/login', req.url));
  }

  if (['/login', '/signup'].includes(req.nextUrl.pathname)) {
    if (hasCookie) return NextResponse.redirect(new URL('/', req.url));
    return NextResponse.next();
  }

  console.log(hasCookie);
}
