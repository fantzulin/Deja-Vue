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
import { ref, reactive, watch } from 'vue'
export default {
    name: 'Demo',
    watch: {
         
    },
    setup() {
        // 數據
        let sum = ref(0)
        let msg = ref('Hello')
        let person = ref({
            name: 'Chris',
            age: 29,
            job: {
                first: {
                    salary: 100
                }
            }
        })

        watch(sum, (newValue, oldValue)=>{
            console.log("sum 的值變了", newValue, oldValue)
        })

        watch(person, (newValue, oldValue)=>{
            console.log("person 的值變了", newValue, oldValue)
        }, { deep: true })

        // 返回一個對象(常用)
        return {
            sum,
            msg,
            person
        }
    }
}
</script>
