const commonConfig = require('./webpack.config.common');
const webpack = require('webpack');
const WebpackMd5Hash = require('webpack-md5-hash');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(commonConfig, {
  bail: true,
  profile: true,

  output: {
    chunkFilename: '[hash].[id].chunk.js',
    filename: '[name].[hash].bundle.js' // TODO cant use [chunkhash]?
  },

  plugins: [
    new WebpackMd5Hash(),

    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: { screw_ie8: true, keep_fnames: true }, // eslint-disable-line camelcase
      compress: { screw_ie8: true }, // eslint-disable-line camelcase
      comments: false,
      sourceMap: true
    })
  ]
});