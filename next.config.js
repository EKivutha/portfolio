const debug = process.env.NODE_ENV !== "production";

module.exports = {
  reactStrictMode: true,
  // distDir: './build',
  // outDir: './out'
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
    }
  },


  assetPrefix: !debug ? '/porfolio/' : '',
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