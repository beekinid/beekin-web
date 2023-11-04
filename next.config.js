// Import images module
const images = require("next-images");

module.exports = images({
  images: {
    domains: ["via.placeholder.com"], // whitelist host
  },
  basePath: "", // Tambahkan basePath kosong untuk deploy ke root domain
  assetPrefix: "", // Tambahkan assetPrefix kosong untuk deploy ke root domain
});