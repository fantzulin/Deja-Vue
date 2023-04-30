// 引入 Vue
import Vue from 'vue'
// 引入 App
import App from './App.vue'
import {mix, counts} from './mixin.js'

// 關閉 Vue 生產提示
Vue.config.productionTip = false
// 全局混入
Vue.mixin(mix)
Vue.mixin(counts)

// 創建 vm
new Vue({
  el: '#app',
  render: h => h(App)
})