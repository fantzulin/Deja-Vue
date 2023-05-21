// 引入 Vue
import Vue from 'vue'
// 引入 App
import App from './App.vue'
// 引入
import VueRouter from 'vue-router'
// 引入路由器
import router from './router'

// 關閉 Vue 生產提示
Vue.config.productionTip = false
// 應用插件
Vue.use(VueRouter)

// 創建 vm
new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})