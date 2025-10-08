import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      'i.imgur.com',
      'soalify-image.s3.ap-southeast-1.amazonaws.com'
    ], // allowlist the domain
  },
};

export default nextConfig;
