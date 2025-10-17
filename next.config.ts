import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  ...(process.env.NODE_ENV === 'production' && {
    basePath: '/WEB3_KIT_starting_point',
    assetPrefix: '/WEB3_KIT_starting_point/',
  }),
  images: {
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NODE_ENV === 'production' ? '/WEB3_KIT_starting_point' : ''
  }
};

export default nextConfig;
