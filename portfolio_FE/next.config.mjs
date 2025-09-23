/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  // Only use basePath and assetPrefix for production builds (GitHub Pages)
  ...(isProd && {
    basePath: '/Portfolio-builder',
    assetPrefix: '/Portfolio-builder',
  }),
}

export default nextConfig
