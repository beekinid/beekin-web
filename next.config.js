/** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["via.placeholder.com"], // whitelist host
//   },
// };

// next.config.js
module.exports = {
  images: {
    domains: ["via.placeholder.com"], // whitelist host
  },
  // Untuk mengkonfigurasi output direktori build
  distDir: "build",

  // Mengaktifkan atau menonaktifkan export statis HTML
  exportPathMap: async function () {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      // Tambahkan rute lain di sini
    };
  },

  // Mengkonfigurasi assetPrefix jika proyek di-host di subfolder
  // assetPrefix: "https://example.com/my-subfolder/",

  // Mengkonfigurasi penggunaan path prefix pada rute-rute yang dihasilkan
  // basePath: "/my-subfolder",

  // Mengkonfigurasi environment variables
  env: {
    CUSTOM_ENV_VARIABLE: process.env.CUSTOM_ENV_VARIABLE,
  },

  // Mengkonfigurasi Webpack dan modul lainnya
  webpack: (config, { isServer }) => {
    // Lakukan penyesuaian konfigurasi Webpack di sini
    return config;
  },

  // Mengaktifkan atau menonaktifkan pengoptimalan di luar kotak
  reactStrictMode: true,

  // Mengkonfigurasi modul CSS (contoh: menggunakan CSS Modules)
  // withCSSModules: true,
};

// Tambahkan konfigurasi lain sesuai kebutuhan proyek Anda

module.exports = nextConfig;
