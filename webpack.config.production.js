import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import baseConfig from './webpack.config.base';
import OptimizeJsPlugin from 'optimize-js-plugin';

export default {
  ...baseConfig,

  output: {
    ...baseConfig.output,

    publicPath: '../dist/'
  },

  module: {
    ...baseConfig.module,

    rules: [
      ...baseConfig.module.rules,
      // TODO: replace this temporary workaround to extract-text-plugin
      // https://github.com/webpack/extract-text-webpack-plugin/issues/294
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true
            }
          },
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
      }
      // {
      //   test: /\.css$/,
      //   loader: ExtractTextPlugin.extract({
      //     fallbackLoader: 'style-loader',
      //     loader: [
      //       {
      //         loader: 'css-loader',
      //         query: {
      //           modules: true,
      //           importLoaders: 1
      //         }
      //       },
      //       {
      //         loader: 'postcss-loader'
      //       }
      //     ]
      //   })
      // }
    ]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
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
