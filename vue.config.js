// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
const url = process.env.VUE_APP_HOST;

module.exports = {
  // 项目根路径
  // publicPath: '/',
  // 部署生产环境和开发环境下的URL
  // publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  // 打包文件输出目录
  outputDir: 'dist',
  // 静态资源地址目录
  assetsDir: 'static',
  // eslint-loader 是否在保存的时候检查
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false, 
  filenameHashing: true,
  // 是否使用 eslint
  lintOnSave: true,
  // 是否使用包含运行时编译器的 Vue 构建版本
  runtimeCompiler: true,

  // css: {
  //   sourceMap: true
  // },
  // configureWebpack: config => {
  //   // 确保静态资源
  //   config.resolve.extensions = ['.js', '.vue', '.json', '.css']
  //   config.plugins.push(
  //    new CopyWebpackPlugin([{ from: 'public/', to: 'public' }]),
  //   )
  // },
  
  chainWebpack: config => {
    // config.module
    //   .rule('vue')
    //   .use('vue-loader')
    //   .loader('vue-loader')
    //   .tap(options => {
    //   options.compilerOptions.preserveWhitespace = false
    //   return options
    //   })
    // 自定义路径别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('vue$', 'vue/dist/vue.esm.js')
      .set('scss_vars', '@/styles/vars.scss')
  },

  // 支持 webPack-dev-server 所有选项
  devServer: {
    host: "localhost",
    port: 8089,
    https: false,
    // 配置自动启动浏览器
    open: true,
    disableHostCheck: true
  }
}
