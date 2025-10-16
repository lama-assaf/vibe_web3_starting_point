import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  ...(process.env.NODE_ENV === 'production' && {
    basePath: '/vibe_web3_starting_point',
    assetPrefix: '/vibe_web3_starting_point/',
  }),
  images: {
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NODE_ENV === 'production' ? '/vibe_web3_starting_point' : ''
  }
};

export default nextConfig;
