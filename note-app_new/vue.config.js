// vue.config.js
module.exports = {
  // options...
  publicPath: process.env.NODE_ENV === 'production'
    ? '/note-app_new/'
    : '/',
  assetsDir: '',
  filenameHashing: true,
  productionSourceMap: false
}
