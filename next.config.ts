import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/config.ts');

const nextConfig: NextConfig = {
  // Turbopack is now stable in Next.js 15
  turbopack: {
    // Turbopack configuration for development
  },
  compiler: {
    styledComponents: true,
  },
};

export default withNextIntl(nextConfig);
