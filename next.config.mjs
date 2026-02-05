/** @type {import('next').NextConfig} */

import withPlaiceholder from '@plaiceholder/next';
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
      },
    ],
  },
};

export default nextConfig;
