// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
const url = process.env.VUE_APP_HOST;

module.exports = {
  outputDir: 'dist',
  lintOnSave: true,
  runtimeCompiler: true,
  devServer: {
    disableHostCheck: true,
    port: 8080
  }
}
