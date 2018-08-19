const markdownParser = require('./markdownParser')
const path = require('path');

module.exports = {
  base: process.env.NODE_ENV ? '/vue-now-ui-kit/documentation/' : '',
  markdown: {
    config: markdownParser,
    lineNumbers: true
  },
  configureWebpack: (config, isServer) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../../src')
    config.resolve.alias['assets'] = path.resolve(__dirname, '../../src/assets')
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
          options.optimizeSSR = false
          return options;
        }
      )
  },
  head: [
    ['link', { rel: 'stylesheet', href: "https://use.fontawesome.com/releases/v5.0.6/css/all.css" }],
    ['link', { rel: 'stylesheet', href: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/css/bootstrap.min.css" }],
  ],
  themeConfig: {
    sidebar: [
      '/',
      ['/licence', 'Licence'],
      ['/build-tools', 'Build Tools'],
      ['/file-structure', 'File Structure'],
    ]
  }
};
