<template>
    <div>
        <h1>當前求和為: {{ sum }}</h1>
        <h3>當前求和放大: {{ bigSum }}</h3>
        <h3>我在 {{ school }}，學習 {{ subject }}</h3>
        <h4>Person 組件的總人數是: {{ personList.length }}</h4>
        <select v-model.number="n">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="add(n)">+</button>
        <button @click="minus(n)">-</button>
        <button @click="plusOdd(n)">當前求和為奇數再加</button>
        <button @click="plusWait(n)">wait second</button>
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
        // 借助 mapState 生成計算屬性，從 state 中讀取數據。(數組寫法)
        ...mapState('countAbout', ['sum', 'school', 'subject']),
        ...mapState('personAbout', ['personList']),
        // 借助 mapGetters 生成計算屬性，從 getters 中讀取數據。(數組寫法)
        ...mapGetters('countAbout',['bigSum'])
    },
    methods: {
        // 借助 mapMutations 生成對應的方法，方法中會調用 commit 去聯繫 mutations (對象寫法)
        ...mapMutations('countAbout',{
            add: 'Plus',
            minus: 'Minus'
        }),
        // 借助 mapActions 生成對應的方法，方法中會調用 dispatch 去聯繫 actions(數組寫法)
        ...mapActions('countAbout',['plusOdd', 'plusWait'])
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