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
  // Reduce dev-time filesystem churn: keep webpack cache in memory to avoid
  // ENOENT rename issues when multiple processes or sync tools (e.g., OneDrive) interfere
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = { type: 'memory' }
    }
    return config
  },
  // Only use basePath and assetPrefix for production builds (GitHub Pages)
  ...(isProd && {
    basePath: '/Portfolio-builder',
    assetPrefix: '/Portfolio-builder',
  }),
}

export default nextConfig
