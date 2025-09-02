import createMiddleware from 'next-intl/middleware';
import { routing } from './next-intl.config';
import { NextRequest } from 'next/server';

const baseMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // If user hasn't explicitly chosen a locale, map Accept-Language "no"/"nb" to Norwegian (nb)
  const hasCookie = Boolean(request.cookies.get('NEXT_LOCALE')?.value);
  if (!hasCookie) {
    const accept = request.headers.get('accept-language') || '';
    // Look for whole-word 'no' or 'nb' (with optional region), case-insensitive
    if (/\b(no|nb|nn)([_-][A-Z]{2})?\b/i.test(accept)) {
      const response = baseMiddleware(request);
      // Persist for a year
      response.cookies.set('NEXT_LOCALE', 'nb', {
        path: '/',
        maxAge: 60 * 60 * 24 * 365,
        sameSite: 'lax'
      });
      return response;
    }
  }

  return baseMiddleware(request);
}

export const config = {
  matcher: ['/', '/(en|nb)/:path*']
};
