/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['utfs.io', 'aceternity.com','images.pexels.com', 'images.unsplash.com'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'utfs.io',
          port: '',
        }
      ]
    }
  }
  
  module.exports = nextConfig


  