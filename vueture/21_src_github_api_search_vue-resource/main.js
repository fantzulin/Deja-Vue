// 引入 Vue
import Vue from 'vue'
// 引入 App
import App from './App.vue'
// 引入插件
import VueResource from 'vue-resource'
// 關閉 Vue 生產提示
Vue.config.productionTip = false
// 使用插件
Vue.use(VueResource)

// 創建 vm
new Vue({
  el: '#app',
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  }
})