import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ❌ Don’t block builds on ESLint errors in CI (e.g. Vercel)
    ignoreDuringBuilds: true,
  },
  // you can add other options here too
};

export default nextConfig;
