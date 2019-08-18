const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  publicPath: isProd ? '/vue-now-ui-kit/' : '',
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  }
};
