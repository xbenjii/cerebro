module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: ['Chrome >= 50']
    }),
    require('postcss-nested'),
  ]
}
