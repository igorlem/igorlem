const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
  ],
};
