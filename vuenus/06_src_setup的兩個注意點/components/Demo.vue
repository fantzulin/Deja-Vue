<template>
  <h1>一個人的訊息</h1>
  <h2>姓名: {{ person.name }}</h2>
  <h2>年齡: {{ person.age }}</h2>
  <button @click="test">showHello</button>
</template>

<script>
import { reactive } from 'vue'
export default {
    name: 'Demo',
    props: ['msg', 'school'],
    emits: ['hello'],
    beforeCreate() {
        console.log('beforeCreate')
    },
    setup(props, context) {
        console.log('setup', this)
        console.log('setup props', props)
        // console.log('setup context attrs', context.attrs) // 等於 Vue2 中的 $attrs
        // console.log('setup context emit', context.emit) // 觸發自定義事件
        // console.log('setup context slots', context.slots) //插槽
        // 數據
        let person = reactive({
            name: 'Chris',
            age: 29
        })

        // 方法
        function test() {
            context.emit('hello', 666)
        }

        // 返回一個對象(常用)
        return {
            person,
            test
        }
    }
}
</script>
