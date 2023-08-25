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
      assets: path.resolve(__dirname, './src/assets'),
      components: path.resolve(__dirname, './src/components'),
      routes: path.resolve(__dirname, './src/routes'),
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
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.?(png|woff2)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
    new FaviconsWebpackPlugin({
      logo: path.resolve(__dirname, 'src', 'assets', 'favicon.png'),
      mode: 'light',
    }),
  ],
  devServer: {
    historyApiFallback: true,
    port: 3000,
  },
};

// new OpengraphHtmlWebpackPlugin([
//   { property: 'og:type', content: 'website' },
//   { property: 'og:url', content: 'https://igorlem.design' },
//   { property: 'og:title', content: 'igor lemeshkin' },
//   {
//     property: 'og:description',
//     content: 'a designer, visual creator and engineer',
//   },
//   // TODO: add og:image
//   { property: 'og:image', content: '' },
// ]),
