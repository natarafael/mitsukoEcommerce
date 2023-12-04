/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "source.unsplash.com" },
      { hostname: "unsplash.com" },
      { hostname: "lh3.googleusercontent.com" },
      { hostname: "storage.googleapis.com" },
      { hostname: "storage.cloud.google.com" },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
