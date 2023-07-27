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
        let person = reactive({
            name: 'Chris',
            age: 29,
            job: {
                first: {
                    salary: 100
                }
            }
        })

        // 情況一: 監視 ref 所定義的一個響應式數據
        /* watch(sum, (newValue, oldValue)=>{
            console.log(`sum 變了, newValue: ${newValue}, oldValue: ${oldValue}`)
        }, { immediate: true }) */

        // 情況二: 監視 ref 所定義的多個響應式數據
        /* watch([sum, msg], (newValue, oldValue)=>{
            console.log(`sum 或 msg 變了, newValue: ${newValue}, oldValue: ${oldValue}`)
        }, { immediate: true }) */ 

        /*
            情況三: 監視 reactive 所定義的一個響應式數據的全部屬性
                1. 注意: 此處無法正確的獲取 oldValue
                2. 注意: 強制開啟了深度監視 (deep 配置無效)
        */
        /*
        watch(person, (newValue, oldValue)=>{
            console.log("person 變化了", newValue, oldValue)
        }, { deep: false }) // 此處的 deep 配置無效
        */

        // 情況四: 監視 reactive 所定義的一個響應式數據中的某個數據
        /* watch(()=>person.name, (newValue, oldValue)=>{
            console.log("person 的 name 變化了", newValue, oldValue)
        }) */

        // 情況五: 監視 reactive 所定義的一個響應式數據中的某些數據
        /* watch([()=>person.name, ()=>person.age], (newValue, oldValue)=>{
            console.log("person 的 name 或 age 變化了", newValue, oldValue)
        }) */

        // 特殊情況
        /*
        watch(()=>person.job, (newValue, oldValue)=>{
            console.log("person 的 job 變化了", newValue, oldValue)
        }, { deep: true }) // 此處由於監視的是 reactive 所定義的對象中的某個屬性，所以 deep 配置有效
        */

        // 返回一個對象(常用)
        return {
            sum,
            msg,
            person
        }
    }
}
</script>
