const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const { resolve, join } = path;

module.exports = merge(common, {
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../src/public/index.html'),
      favicon: resolve(__dirname, '../src/public/favicon.ico'),
      manifest: resolve(__dirname, '../src/public/manifest.json'),
      chunks: ['index'],
    }),
  ],
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: join(__dirname, 'build'),
    },
    hot: true,
    compress: true,
    port: 8080
  },
});