// 求和相關的配置
export default {
    namespaced: true,
    actions:{
        plusOdd(miniStore, value) {
            if (miniStore.state.sum % 2) {
                miniStore.commit('Plus', value)
            }
        },
        plusWait(miniStore, value) {
            setTimeout(() => {
                miniStore.commit('Plus', value)
            }, 1000)
        },
    },
    mutations:{
        Plus(state, value) {
            state.sum += value
        },
        Minus(state, value) {
            state.sum -= value
        },
    },
    state:{
        sum: 0, // 當前的和
        school: 'Chris School',
        subject: 'Front-end',
    },
    getters:{
        bigSum(state) {
            return state.sum*10
        }
    },
}