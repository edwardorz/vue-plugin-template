const argv = require('minimist')(process.argv.slice(2))

module.exports = {
  productionSourceMap: false,
  publicPath: '/{{name}}',
  devServer: {
    open: true
  },
  configureWebpack: {
    optimization: {
      minimize: true
    }
  },
  css: { extract: argv.target !== 'lib' }
}

