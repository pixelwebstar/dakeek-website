import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  compress: true,
  poweredByHeader: false,
  // Force SWC minification (default in Next 13+, explicit here)
  // swcMinify: true, // Removed due to type error in Next 15+
  // Critical: Optimize CSS delivery
  experimental: {
    optimizeCss: true, // Inline critical CSS
    optimizePackageImports: ['lucide-react', 'framer-motion'], // Tree-shake icons and libs
  },
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    // Added 375, 480 for granular mobile optimization
    deviceSizes: [375, 480, 576, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Headers for performance
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'dakeek.ae',
          },
        ],
        destination: 'https://www.dakeek.ae/:path*',
        permanent: true,
      },
            {
        source: '/areas/dubai-hills',
        destination: '/areas/dubai-hills-estate',
        permanent: true,
      },
      {
        source: '/areas/jlt',
        destination: '/areas/jumeirah-lake-towers-jlt',
        permanent: true,
      },
    ]
  },
};

import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default bundleAnalyzer(nextConfig);
