import { withContentlayer } from 'next-contentlayer2';

/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler:{
        removeConsole: true
    }
};
module.exports = {
    webpack: (config) => {
      config.cache = false; // Disable Webpack caching
      return config;
    },
  };

export default withContentlayer(nextConfig);
