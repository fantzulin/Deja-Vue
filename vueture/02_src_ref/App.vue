<template>
<div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDom" ref="btn">顯示上方文字</button>
    <School ref="sch"></School>
</div>
</template>

<script>
import School from './components/School'
export default {
    name: 'App',
    components:{School},
    data() {
        return {
            msg: 'Hello'
        }
    },
    methods: {
        showDom() {
            console.log("h1 title", this.$refs.title) // 真實 DOM 元素
            console.log("button btn", this.$refs.btn) // 真實 DOM 元素
            console.log("School component", this.$refs.sch) // School vc
        }
    }
}
</script>

<style>

</style>