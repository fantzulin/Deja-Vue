<template>
    <h2>當前求和為: {{ sum }}</h2>
    <button @click="sum++">+1</button>
    <hr>
    <h2>當前的訊息為: {{ msg }}</h2>
    <button @click="msg+='~'">修改訊息</button>
    <hr>
    <h2>姓名: {{ person.name }}</h2>
    <h2>年齡: {{ person.age }}</h2>
    <h2>薪資: {{ person.job.first.salary }}K</h2>
    <button @click="person.name+='~'">修改姓名</button>
    <button @click="person.age++">修改年齡</button>
    <button @click="person.job.first.salary++">加薪</button>
</template>

<script>
import { ref, reactive, watch, watchEffect } from 'vue'
export default {
    name: 'Demo',
    watch: {
         
    },
    setup() {
        // 數據
        let sum = ref(0)
        let msg = ref('Hello')
        let person = reactive({
            name: 'Chris',
            age: 29,
            job: {
                first: {
                    salary: 100
                }
            }
        })

        // 監視
        /* watch(sum, (newValue, oldValue)=>{
            console.log("sum 的值變了", newValue, oldValue)
        }, { immediate: true }) */

        watchEffect(()=>{
            const x1 = sum.value
            const x2 = person.job.first.salary
            console.log("watchEffect 所指定的回調執行了")
        })

        // 返回一個對象(常用)
        return {
            sum,
            msg,
            person
        }
    }
}
</script>
