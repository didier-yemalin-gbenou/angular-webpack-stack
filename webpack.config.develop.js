const commonConfig = require('./webpack.config.common');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(commonConfig, {

  output: {
    filename: '[name].[hash].bundle.js'
  },

  devServer: {
    port: 9000,
    host: 'localhost',
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
      ignored: /node_modules/
    },
    inline: true,
    stats: {
      color: true
    }
  }
});
