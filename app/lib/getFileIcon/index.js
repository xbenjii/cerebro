switch(process.platform) {
  case 'darwin':
    module.exports = require('./mac')
    break
  case 'win32':
    module.exports = require('./windows')
  default:
    module.exports = () => Promise.reject()
}
