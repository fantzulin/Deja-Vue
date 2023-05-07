<template>
    <div>
        <h1>當前求和為: {{ $store.state.sum }}</h1>
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
export default {
    name: 'Count',
    data() {
        return {
            n: 1, // 用戶選擇的數字
        }
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
    }
}
</script>

<style scoped>
button {
    margin-left: 10px;
}
</style>