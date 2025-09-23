/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/FSAD-S104',
  assetPrefix: '/FSAD-S104/',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig