// 該文件用於創建 Vuex 中最為核心的 store
import Vue from 'vue'
// 引入 Vuex
import Vuex from 'vuex'
// 應用 Vuex 插件
Vue.use(Vuex)

// 準備 actions — 用於響應組件中的動作
const actions = {}
// 準備 mutations — 用於操作數據 (state)
const mutations = {}
// 準備 state — 用於存儲數據
const state = {}

// 創建並導出(暴露) store
export default new Vuex.Store({
    actions,
    mutations,
    state,
})