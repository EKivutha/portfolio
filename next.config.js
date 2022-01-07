const debug = process.env.NODE_ENV !== "production";
const withPlugins = require('next-compose-plugins');
const basePath = ON_GITHUB_PAGES ? '/portfolio' : '';
const assetPrefix = ON_GITHUB_PAGES ? '/porfolio/' : '';

module.exports = {
  reactStrictMode: true,
  // distDir: './build',
  // outDir: './out'
  basePath,
  assetPrefix,
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
    }
  },
     

// assetPrefix: !debug ? '/porfolio/' : '',
  webpack: (config, { dev }) => {
    // Perform customizations to webpack config
    // console.log('webpack');
    // console.log(config.module.rules, dev);
    config.module.rules = config.module.rules.map(rule => {
      if (rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false
      }
      return rule
    })
    // Important: return the modified config
    return config
  }/*,
webpackDevMiddleware: (config) => {
  // Perform customizations to webpack dev middleware config
  // console.log('webpackDevMiddleware');
  // console.log(config);
  // Important: return the modified config
  return config
}, */
}