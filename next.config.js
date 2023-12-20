/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

module.exports = (phase, { defaultConfig }) => {
  if ('sassOptions' in defaultConfig)
    defaultConfig['sassOptions'] = {
      includePaths: [path.join(__dirname, 'app/styles')],
      prependData: `@import "app/styles/_base.scss";`,
    };

  const config = {
    ...defaultConfig,
    ...nextConfig,
  };

  return config;
};
