import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Single Lenis instance in dev (StrictMode double-mounts it) — DESIGN_LESSONS 06-03
  reactStrictMode: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
