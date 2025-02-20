import type { NextConfig } from "next";

export const basePath = "/blog";

const nextConfig: NextConfig = {
  trailingSlash: true,
  // output: "export",

  // Sesuaikan basePath dengan nama dari repository di github. Jika reponya about, maka "/about"
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
