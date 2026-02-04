import nextMDX from '@next/mdx'
import type { NextConfig } from 'next'

const withMDX = nextMDX({
  extension: /\.mdx?$/,
})

const nextConfig: NextConfig = withMDX({
  pageExtensions: [
    'mdx',
    'tsx',
    'jsx',
    'md',
    'ts',
    'js',
  ],
  experimental: {
    globalNotFound: true,
  },
})

export default nextConfig
