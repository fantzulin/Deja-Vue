// 引入 Vue
import Vue from 'vue'
// 引入 App
import App from './App.vue'
// 引入插件
import plugins from './plugins'

// 關閉 Vue 生產提示
Vue.config.productionTip = false

// 應用(使用)插件
Vue.use(plugins, 1)
// 創建 vm
new Vue({
  el: '#app',
  render: h => h(App)
})