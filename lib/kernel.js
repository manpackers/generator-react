const { createEslintLoader } = require('@manpacker/generator')
const webpack = require('webpack')

module.exports = ic => ({
  module: {
    rules: [
      { test: /\.jsx$/, use: ['babel-loader'] }
    ].concat(ic.isEslint ? [createEslintLoader(/\.jsx$/)] : [])
  },

  plugins: [].concat(ic.isReactProvide ? [
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom'
    })
  ] : [])
})
