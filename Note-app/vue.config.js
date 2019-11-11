// vue.config.js
module.exports = {
  // options...
  publicPath: process.env.NODE_ENV === 'production'
    ? '/note-app/'
    : '/',
  assetsDir: '',
  filenameHashing: true,
  productionSourceMap: false
}
