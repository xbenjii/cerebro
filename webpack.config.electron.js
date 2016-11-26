const webpack = require('webpack');
const baseConfig = require('./webpack.config.base');

const isProduction = process.env.NODE_ENV === 'production';

const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
  // new webpack.optimize.UglifyJsPlugin({
  //   compressor: {
  //     screw_ie8: true,
  //     warnings: false
  //   },
  //   sourceMap: !isProduction,
  //   minimize: true
  // }),
];

const externals = [
  ...baseConfig.externals,
];

// if (!isProduction) {
//   plugins.push(
//     new webpack.BannerPlugin(
//       'require("source-map-support").install();',
//       { raw: true, entryOnly: false }
//     )
//   );

//   externals.push('source-map-support');
// }

module.exports = {
  ...baseConfig,

  plugins,
  externals,

  devtool: 'source-map',
  entry: './main.development',

  output: {
    ...baseConfig.output,
    path: __dirname,
    filename: './main.js'
  },

  target: 'electron-main',

  node: {
    __dirname: false,
    __filename: false
  },
};
