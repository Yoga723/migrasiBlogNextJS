import type { NextConfig } from "next";

export const basePath = "/blog";

const isStaticExport = process.env.NEXT_EXPORT === "true";

const nextConfig: NextConfig = {
  trailingSlash: true,
  ...(isStaticExport ? { output: "export" } : {}),

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
