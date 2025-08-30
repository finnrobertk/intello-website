// app/robots.ts
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // Finn base-URL: bruk prod-url hvis vi kjører på Vercel,
  // ellers fallback til localhost under utvikling
  const siteUrl =
    process.env.VERCEL_ENV === 'production'
      ? 'https://intello.no'
      : 'http://localhost:3000';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/', // tillat alt
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
