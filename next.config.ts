import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    unoptimized: true,
    deviceSizes: [360, 480, 640, 750, 828, 1080],
  },
  output: 'export',
  basePath: isProd ? '/love' : '',
  assetPrefix: isProd ? '/love/' : '',
}

export default nextConfig
