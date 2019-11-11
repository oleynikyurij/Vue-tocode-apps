// vue.config.js
module.exports = {
  // options...
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Vue-tocode-apps/'
    : '/',
  assetsDir: '',
  filenameHashing: true,
  productionSourceMap: false
}
