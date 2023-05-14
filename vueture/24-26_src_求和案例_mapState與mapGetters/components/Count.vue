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
        <button @click="add">+</button>
        <button @click="minus">-</button>
        <button @click="addOdd">當前求和為奇數再加</button>
        <button @click="addWait">wait second</button>
    </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
    name: 'Count',
    data() {
        return {
            n: 1, // 用戶選擇的數字
        }
    },
    computed: {
        // 靠程序員自己親自去寫計算屬性
        
        /* sum() {
            return this.$store.state.sum
        },
        school() {
            return this.$store.state.school
        },
        subject() {
            return this.$store.state.subject
        }, */

        // 借助 mapState 生成計算屬性，從 state 中讀取數據。(對象寫法)
        /* ...mapState({
            sum:'sum',
            school:'school',
            subject:'subject'
        }), */

        // 借助 mapState 生成計算屬性，從 state 中讀取數據。(數組寫法)
        ...mapState(['sum', 'school', 'subject']),

        // ---------------------------------------

        /* bigSum() {
            return this.$store.getters.bigSum
        } */

        // 借助 mapGetters 生成計算屬性，從 getters 中讀取數據。(對象寫法)
        // ...mapGetters({bigSum:'bigSum'})
        
        // 借助 mapGetters 生成計算屬性，從 getters 中讀取數據。(數組寫法)
        ...mapGetters(['bigSum'])
    },
    methods: {
        add () {
            this.$store.commit('Plus', this.n)
        },
        minus () {
            this.$store.commit('Minus', this.n)
        },
        addOdd () {
            this.$store.dispatch('plusOdd', this.n)
        },
        addWait () {
            this.$store.dispatch('plusWait', this.n)
        }
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