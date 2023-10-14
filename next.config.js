/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      's2.coinmarketcap.com',
      'sr3.coinmarketcap.com',
      'encrypted-tbn0.gstatic.com'
    ]
  }
}

module.exports = nextConfig
