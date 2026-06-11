import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["10.0.0.89"],
  images: {
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "files.cdn.printful.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
    qualities: [50, 60, 75],
  },
};

export default nextConfig;
