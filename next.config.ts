import type {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import createMDX from '@next/mdx';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');
const withMDX = createMDX({extension: /\.mdx?$/});

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  webpack(config) {
    // Exclude SVG from the existing asset rule
    const assetRule = (config.module.rules as any[]).find((rule: any) => rule?.test?.test?.('.svg'));
    if (assetRule) {
      assetRule.exclude = /\.svg$/i;
    }

    // Add SVGR loader to import SVGs as React components
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

export default withNextIntl(withMDX(nextConfig));
