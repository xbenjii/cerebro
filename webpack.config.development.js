/* eslint max-len: 0 */
import webpack from 'webpack';
import baseConfig from './webpack.config.base';
import path from 'path';

export default {
  ...baseConfig,

  devtool: 'cheap-module-eval-source-map',

  entry: {
    background: [
      'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
      baseConfig.entry.background,
    ],
    main: [
      'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
      baseConfig.entry.main,
    ]
  },

  output: {
    ...baseConfig.output,
    publicPath: 'http://localhost:3000/dist/'
  },

  module: {
    ...baseConfig.module,
    rules: [
      ...baseConfig.module.rules,
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
    ]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
    ...baseConfig.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],

  target: 'electron-renderer'
};
