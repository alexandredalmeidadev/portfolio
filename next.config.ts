import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'github.com',
      'avatars.githubusercontent.com',
      'upload.wikimedia.org',
      'cdn-icons-png.flaticon.com',
      'www.01net.com',
      'www.linkedin.com',
    ],
  },
};

export default nextConfig;
