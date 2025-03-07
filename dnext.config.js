/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.imgur.com", "imgur.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // Add favicon configuration
  webpack(config) {
    return config
  },
}

module.exports = nextConfig

