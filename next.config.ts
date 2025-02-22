import type { NextConfig } from "next";

export const basePath = "/blog";

const isStaticExport = process.env.NEXT_EXPORT === "true";

const nextConfig: NextConfig = {
  trailingSlash: true,
  ...(isStaticExport ? { output: "export" } : {}),

  // Sesuaikan basePath dengan nama dari repository di github. Jika reponya about, maka "/about"
  basePath: "/blog",
  assetPrefix: process.env.NODE_ENV === "production" ? "/blog/" : undefined,
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
  webpack: (config) => {
    config.output.publicPath = `${process.env.ASSET_PREFIX || ""}${config.output.publicPath}`;
    return config;
  },
};

export default nextConfig;
