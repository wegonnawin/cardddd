const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {
  entry: resolve('src', 'app'),
  output: {
    filename: 'bundle.js',
    path: resolve('build')
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['build'],
    }),
    new HtmlWebpackPlugin(),
    new HotModuleReplacementPlugin()
  ],
  resolve: {
    alias: {
      '^': resolve('src')
    }
  }
};