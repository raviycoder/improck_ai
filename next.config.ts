import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["ik.imagekit.io", "randomuser.me", 'user-gen-media-assets.s3.amazonaws.com'],
  },
  /* config options here */
};

export default nextConfig;
