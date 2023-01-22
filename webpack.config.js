const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  target: 'web',
  entry: path.join(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  resolve: {
    // add ts and tsx as primary website code
    // add rest for default (e.g. node_modules)
    extensions: ['.ts', '.tsx', '...'],
    // enable absolute imports
    alias: {
      components: path.resolve(__dirname, './src/components'),
      screens: path.resolve(__dirname, './src/screens'),
      assets: path.resolve(__dirname, './src/assets'),
      i18n: path.resolve(__dirname, './src/i18n'),
    },
  },
  module: {
    rules: [
      {
        test: /\.?(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.?(svg|png)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
    new FaviconsWebpackPlugin({
      logo: path.resolve(__dirname, 'src', 'assets', 'logo.svg'),
    }),
  ],
};
