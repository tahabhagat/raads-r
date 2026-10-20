import type { NextConfig } from "next";

// Set when deploying to a sub-path (e.g. GitHub Pages at /raads-r). Empty for Tauri and local dev.
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
