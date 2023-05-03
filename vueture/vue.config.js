const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 開啟代理服務器(方式一)
  /* devServer: {
    proxy: 'http://localhost:5000'
  }, */
  // 開啟代理服務器(方式二)
  devServer: {
    proxy: {
      '/chris': {
        target: 'http://localhost:5000',
        pathRewrite: {'^/chris': ''},
        ws: true, // 用於支持 websocket
        changeOrigin: true // 用於控制請求頭中的 host 值
      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite: {'^/demo': ''},
        ws: true, // 用於支持 websocket
        changeOrigin: true // 用於控制請求頭中的 host 值
      }
    }
  }
})
