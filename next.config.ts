import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    // Optimize image formats
    formats: ['image/avif', 'image/webp'],
    // Reduce image quality for faster loading
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
  // Enable experimental optimizations - DISABLING optimizeCss as it caused TBT regression
  experimental: {
    optimizeCss: false,
    optimizePackageImports: ['lucide-react', 'date-fns', 'lodash'],
  },
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
