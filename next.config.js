/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['source.unsplash.com'],
  },
}
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
module.exports = nextConfig
