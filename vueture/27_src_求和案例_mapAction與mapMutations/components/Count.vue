<template>
    <div>
        <h1>當前求和為: {{ sum }}</h1>
        <h3>當前求和放大: {{ bigSum }}</h3>
        <h3>我在 {{ school }}，學習 {{ subject }}</h3>
        <select v-model.number="n">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="add(n)">+</button>
        <button @click="minus(n)">-</button>
        <button @click="addOdd(n)">當前求和為奇數再加</button>
        <button @click="addWait(n)">wait second</button>
    </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
export default {
    name: 'Count',
    data() {
        return {
            n: 1, // 用戶選擇的數字
        }
    },
    computed: {
        // 借助 mapState 生成計算屬性，從 state 中讀取數據。(對象寫法)
        /* ...mapState({
            sum:'sum',
            school:'school',
            subject:'subject'
        }), */

        // 借助 mapState 生成計算屬性，從 state 中讀取數據。(數組寫法)
        ...mapState(['sum', 'school', 'subject']),

        // ---------------------------------------

        // 借助 mapGetters 生成計算屬性，從 getters 中讀取數據。(對象寫法)
        // ...mapGetters({bigSum:'bigSum'})
        
        // 借助 mapGetters 生成計算屬性，從 getters 中讀取數據。(數組寫法)
        ...mapGetters(['bigSum'])
    },
    methods: {
        // 程序員親自寫方法
        /* add () {
            this.$store.commit('Plus', this.n)
        },
        minus () {
            this.$store.commit('Minus', this.n)
        }, */

        // 借助 mapMutations 生成對應的方法，方法中會調用 commit 去聯繫 mutations (對象寫法)
        ...mapMutations({
            add: 'Plus',
            minus: 'Minus'
        }),

        // 借助 mapMutations 生成對應的方法，方法中會調用 commit 去聯繫 mutations (數組寫法)
        //...mapMutations(['Plus', 'Minus']), // 方法名需和 mutations 內設定的名稱相同

        // ------------------------------------

        // 程序員親自寫方法
        /* addOdd () {
            this.$store.dispatch('plusOdd', this.n)
        },
        addWait () {
            this.$store.dispatch('plusWait', this.n)
        }, */

        // 借助 mapActions 生成對應的方法，方法中會調用 dispatch 去聯繫 actions(對象寫法)
        /* ...mapActions({
            addOdd: 'plusOdd',
            addWait: 'plusWait'
        }), */

        // 借助 mapActions 生成對應的方法，方法中會調用 dispatch 去聯繫 actions(數組寫法)
        ...mapActions(['plusOdd', 'plusWait'])
    },
    mounted() {
    }
}
</script>

<style scoped>
button {
    margin-left: 10px;
}
</style>