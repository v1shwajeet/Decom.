import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Explicitly set the Turbopack root so Next.js doesn't infer it
    // from other lockfiles outside this project directory.
    root: __dirname,
  },
  images: {
    qualities: [100, 75],
  },
};

export default nextConfig;
