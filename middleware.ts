import createMiddleware from 'next-intl/middleware';
import { routing } from './next-intl.config';

export default createMiddleware(routing);

export const config = {
  matcher: ['/', '/(en|nb)/:path*']
};
