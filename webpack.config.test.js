const config = require('./webpack.config.base');

config.target = 'electron-renderer'

config.module = Object.assign(config.module,{
  rules: Array.prototype.concat.call(config.module.rules, [
    {
      test: /\.(css|svg|jpe?g|png)$/,
      use: 'null-loader'
    }
  ])
});

module.exports = config
