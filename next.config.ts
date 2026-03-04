import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    domains: [
      'github.com',
      'avatars.githubusercontent.com',
      'upload.wikimedia.org',
      'cdn-icons-png.flaticon.com',
      'www.01net.com',
      'www.linkedin.com',
      'cdn2.downdetector.com',
      'ssl.gstatic.com',
      'media.licdn.com',
      'images.unsplash.com',
    ],
  },
};

export default nextConfig;
