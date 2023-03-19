const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const { resolve } = path;

module.exports = merge(common, {
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          //   from: resolve(__dirname, 'public'),
          //   to: 'public'
          // }, {
          from: resolve(__dirname, '../manifest.json'),
          to: './'
        },
      ]
    })
  ],
  mode: 'production',
  performance: {
    hints: false,
  },
  // devtool: 'source-map',
  watchOptions: {
    poll: 1000,
    aggregateTimeout: 500,
    ignored: /node_modules/,
  }
});