// 引入的不再是 Vue 構造函數，引入的是一個名為 createApp 的工廠函數
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

// 創建應用實例對象 — app(類似於之前 Vue2 中的 vm，但 app 比 vm 更"輕")
createApp(App).mount('#app')
