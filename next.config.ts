import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import createMDX from '@next/mdx';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');
const withMDX = createMDX({ extension: /\.mdx?$/ });

const nextConfig: NextConfig = {
  // MDX + vanlige sider
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

  // www → intello.no (301)
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.intello.no' }],
        destination: 'https://intello.no/:path*',
        permanent: true
      }
    ];
  },

  // Enkle sikkerhets-headere
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' }
        ]
      }
    ];
  },

  // Tillat eksterne bilder (utvid etter behov)
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' }
    ]
  },

  // Behold SVGR-oppsettet ditt
  webpack(config) {
    // Exclude SVG from existing asset rule
    const assetRule = (config.module.rules as any[]).find((rule: any) => rule?.test?.test?.('.svg'));
    if (assetRule) {
      assetRule.exclude = /\.svg$/i;
    }

    // Importer .svg som React-komponenter
    (config.module.rules as any[]).push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: true,
            svgoConfig: {
              plugins: [
                { name: 'removeDimensions', active: true },
                { name: 'convertColors', params: { currentColor: true } }
              ]
            },
            prettier: false
          }
        }
      ]
    });

    return config;
  }
};

// Viktig: i18n håndteres av next-intl-pluginen via ./i18n/request.ts
export default withNextIntl(withMDX(nextConfig));
