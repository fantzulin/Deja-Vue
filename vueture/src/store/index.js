// 該文件用於創建 Vuex 中最為核心的 store
import Vue from 'vue'
// 引入 Vuex
import Vuex from 'vuex'
import countOptions from './count'
import personOptions from './person'
// 應用 Vuex 插件
Vue.use(Vuex)

// 創建並導出(暴露) store
export default new Vuex.Store({
    modules: {
        countAbout:countOptions,
        personAbout:personOptions
    }
})