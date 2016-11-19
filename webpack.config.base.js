const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.json$/,
      use: 'json-loader'
    }, {
      test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
      use: 'url-loader'
    }]
  },
  entry: {
    main: './main/main',
    background: './background/background'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    libraryTarget: 'commonjs2'
  },
  // tmp for loaders
  resolveLoader: {
    moduleExtensions: ["-loader"]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve('.'),
      path.resolve('./node_modules'),
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new CopyWebpackPlugin([
      { from: 'main/css/themes/*', to: '.' }
    ]),
  ],
  externals: ['nodobjc', 'universal-analytics']
};
