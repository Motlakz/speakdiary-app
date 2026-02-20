import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "global-uploads.webflow.com",
      },
      {
        protocol: "https",
        hostname: "speakdiary-assets.s3.us-east-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "peerlist.io",
      },
      {
        protocol: "https",
        hostname: "cdn-b.saashub.com",
      },
    ],
  },
};

export default nextConfig;
