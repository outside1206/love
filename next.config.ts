import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/love',

  /* config options here */
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
