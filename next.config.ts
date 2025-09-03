import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    unoptimized: true,
    deviceSizes: [430, 860, 1290, 1625],
  },
  output: 'export',
  basePath: isProd ? '/love' : '',
  assetPrefix: isProd ? '/love/' : '',
}

export default nextConfig
