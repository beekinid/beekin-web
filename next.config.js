/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  }
  // images: {
  //   domains: ["via.placeholder.com"], // whitelist host
  // },
};

module.exports = nextConfig;