import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["ec2-52-79-242-171.ap-northeast-2.compute.amazonaws.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co"
      },
      {
        protocol: "http",
        hostname: "img1.kakaocdn.net"
      }
    ]
  }
}

export default nextConfig
