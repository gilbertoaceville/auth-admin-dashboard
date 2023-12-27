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
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: false,
      }
    ]
  }
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
