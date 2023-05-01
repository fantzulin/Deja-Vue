// 引入 Vue
import Vue from 'vue'
// 引入 App
import App from './App.vue'

// 關閉 Vue 生產提示
Vue.config.productionTip = false

// 創建 vm
const vm = new Vue({
  el: '#app',
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this // 安裝全局事件總線
  }
})

vm.prototype