const images = require("next-images");

module.exports = images({
  images: {
    domains: ["via.placeholder.com"],
  },
  basePath: "",
  assetPrefix: "",
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  distDir: "out", // Menambahkan pengaturan distDir
});