import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'nb'],
  defaultLocale: 'en'
});

export const config = {
  matcher: ['/', '/(en|nb)/:path*']
};
