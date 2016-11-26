const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const baseConfig = require('./webpack.config.base');
const OptimizeJsPlugin = require('optimize-js-plugin');

const config = {
  ...baseConfig,

  output: {
    ...baseConfig.output,

    publicPath: '../dist/'
  },

  module: {
    ...baseConfig.module,

    rules: [
      ...baseConfig.module.rules,

      {
        test: /global\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: "css-loader"
        })
      },
      {
        test: /^((?!global).)*\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1
              }
            },
            {
              loader: 'postcss-loader'
            }
          ]
        })
      }
    ]
  },

  plugins: [
    ...baseConfig.plugins,
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      },
      dead_code: true,
      sourceMap: false,
      minimize: true
    }),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    }),
    new OptimizeJsPlugin({
      sourceMap: false
    })
  ],
  target: 'electron-renderer'
};

module.exports = config;
