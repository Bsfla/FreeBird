/** @type {import('next').NextConfig} */
const withImages = require('next-images');
const path = require('path');

module.exports = withImages({
  images: {
    disableStaticImages: true,
  },
  esModule: true,
  fileExtensions: ['jpg', 'jpeg', 'png', 'gif'],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    config.resolve = {
      alias: {
        '@components': path.resolve(__dirname, './components'),
        '@assets': path.resolve(__dirname, './assets'),
        '@apis': path.resolve(__dirname, './apis'),
        '@consts': path.resolve(__dirname, './consts'),
        '@lib': path.resolve(__dirname, './lib'),
        '@hooks': path.resolve(__dirname, './hooks'),
        '@recoil': path.resolve(__dirname, './recoil'),
      },
      ...config.resolve,
    };
    return config;
  },
});
