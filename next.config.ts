import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,       // <-- add this
  images: { unoptimized: true }
};

export default nextConfig;
