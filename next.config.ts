import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '/form-example',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
