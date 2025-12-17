import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',    // Build for Node.js server
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
