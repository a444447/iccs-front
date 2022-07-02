const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    /* 使用代理 */
    proxy: {
      '/api': {
        target: 'http://47.98.111.32:8080',  // 目标代理服务器地址
        changeOrigin: true,                          // 允许跨域
        // pathRewrite:{
        //   "^/api":''
        // }
      },
    },
  },

})

