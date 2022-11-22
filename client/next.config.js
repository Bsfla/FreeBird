/** @type {import('next').NextConfig} */
const withImages = require('next-images');
const path = require('path');
const { config } = require('process');

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
      },
      ...config.resolve,
    };
    return config;
  },
});
