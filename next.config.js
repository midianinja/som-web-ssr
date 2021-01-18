// next.config.js
const path = require('path');
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  env: {
    GRAPHQL_URI: process.env.GRAPHQL_URI,
    STORAGE_API_URI: process.env.STORAGE_API_URI,
    INSTAGRAM_API_URI: process.env.INSTAGRAM_API_URI,
    API_KEY: process.env.API_KEY,
    IDA_API_ID: process.env.IDA_API_ID,
    IDA_API_KEY: process.env.IDA_API_KEY,
  },
  cssLoaderOptions: {
    url: false,
  },
  webpack: (config) => {
    config.resolve.modules.push(path.resolve('./'));
    return config;
  },
});
