/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["via.placeholder.com", '*'], // whitelist host
  },
};

module.exports = nextConfig;
