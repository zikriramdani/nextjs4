const webpack = require('webpack')
const withPWA = require("next-pwa");

module.exports = {
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    config.plugins.push(
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
        })
    )
    return config
  }
  // eslint: {
  //   // Warning: This allows production builds to successfully complete even if
  //   // your project has ESLint errors.
  //   ignoreDuringBuilds: true,
  // },
}

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});