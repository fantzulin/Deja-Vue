// 該文件用於創建 Vuex 中最為核心的 store
import Vue from 'vue'
// 引入 Vuex
import Vuex from 'vuex'
// 應用 Vuex 插件
Vue.use(Vuex)

// 準備 actions — 用於響應組件中的動作
const actions = {
    // plus(miniStore, value) {
    //     miniStore.commit('Plus', value)
    // },
    // minus(miniStore, value) {
    //     miniStore.commit('Minus', value)
    // },
    plusOdd(miniStore, value) {
        if (miniStore.state.sum % 2) {
            miniStore.commit('Plus', value)
        }
    },
    plusWait(miniStore, value) {
        setTimeout(() => {
            miniStore.commit('PlusWait', value)
        }, 1000)
    },
}
// 準備 mutations — 用於操作數據 (state)
const mutations = {
    Plus(state, value) {
        state.sum += value
    },
    Minus(state, value) {
        state.sum -= value
    }
}
// 準備 state — 用於存儲數據
const state = {
    sum: 0 // 當前的和
}

// 創建並導出(暴露) store
export default new Vuex.Store({
    actions,
    mutations,
    state,
})