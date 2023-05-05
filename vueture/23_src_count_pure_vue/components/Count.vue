<template>
    <div>
        <h1>當前求和為: {{ sum }}</h1>
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
            sum: 0 // 當前的和
        }
    },
    methods: {
        add () {
            this.sum += this.n
        },
        minus () {
            this.sum -= this.n
        },
        addOdd () {
            if(this.sum % 2) {
                this.sum += this.n
            }
        },
        addWait () {
            setTimeout(() => {
                this.sum += this.n
            }, 1000)
        }
    }
}
</script>

<style scoped>
button {
    margin-left: 10px;
}
</style>