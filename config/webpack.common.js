const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.MODE === 'development';
const plugins = isDev ? [] : [new MiniCssExtractPlugin()];

const ImageInlineSizeLimit = '10000';
const { resolve } = path;

module.exports = {
  target: 'web',
  devtool: 'eval-cheap-module-source-map',
  entry: {
    index: resolve(__dirname, '../src'),
    'background/index': resolve(__dirname, '../src/background'),
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, '../build'),
  },
  plugins,
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.ts(x?)$/,
        use: 'ts-loader',
      }, {
        test: /\.less|css$/,
        exclude: /node_modules/,
        use: [
          isDev ? 'style-loader' :
            MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
      }, {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset/resource',
        parser: {
          dataUrlCondition: {
            maxSize: ImageInlineSizeLimit,
          },
        },
        generator: {
          filename: 'static/[name][ext]',
          // filename: 'static/[name].[hash:10][ext]',
          publicPath: './',
        },
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx'],
    alias: {
      '~': resolve(__dirname, 'src')
    }
  },
};