import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import baseConfig from './webpack.config.base';
import OptimizeJsPlugin from 'optimize-js-plugin';

const config = {
  ...baseConfig,

  devtool: 'source-map',

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
          fallbackLoader: "style-loader",
          loader: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: true,
                importLoaders: 1
              }
            },
            'postcss-loader'
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

export default config;
