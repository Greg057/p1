/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/p1' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/p1' : '',
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
  compress: false,
  poweredByHeader: false,
}

module.exports = nextConfig