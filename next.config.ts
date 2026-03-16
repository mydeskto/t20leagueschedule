import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    output: 'export',
  reactStrictMode: true,
  allowedDevOrigins: ['*'],
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  trailingSlash: true,
  experimental: {
    optimizePackageImports: [
      'framer-motion',
      'lucide-react',
      'react-icons',
      '@radix-ui/react-popover',
      '@radix-ui/react-slot',
      'clsx',
      'tailwind-merge'
    ],
    optimizeCss: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  compress: true,
}

export default nextConfig
