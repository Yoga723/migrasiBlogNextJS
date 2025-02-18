import type { NextConfig } from "next";

export const basePath = "/blog";

const nextConfig: NextConfig = {
  output: "standalone",
  trailingSlash: true,

  // Sesuaikan basePath dengan nama dari repository di github. Jika reponya article, maka "/article"
  basePath: "/blog",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
