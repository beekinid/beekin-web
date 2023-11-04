// Import images module
const images = require("next-images");

module.exports = images({
  images: {
    domains: ["via.placeholder.com"], // whitelist host
    loader: 'imgix', // atau gunakan 'default' jika lebih sesuai
    path: '/_next/image', // atau sesuaikan path berdasarkan kebutuhan Anda
  },
  basePath: "", // Tambahkan basePath kosong untuk deploy ke root domain
  assetPrefix: "", // Tambahkan assetPrefix kosong untuk deploy ke root domain
});