// 引入 Vue
import Vue from 'vue'
// 引入 App
import App from './App.vue'
// 引入 ElementUI 組件庫
// import ElementUI  from 'element-ui'
// 引入 ElementUI 全部樣式
// import 'element-ui/lib/theme-chalk/index.css'

// 按需引入
import { Row, Input, Button, } from 'element-ui';

// 關閉 Vue 生產提示
Vue.config.productionTip = false
// 應用插件
// Vue.use(ElementUI)

// 按需應用
Vue.component(Row.name, Row);
Vue.component(Input.name, Input);
Vue.component(Button.name, Button);

// 創建 vm
new Vue({
  el: '#app',
  render: h => h(App)
})