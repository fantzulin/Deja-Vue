<template>
  <h1>一個人的訊息</h1>
  姓: <input type="text" v-model="person.last_name"><br>
  名: <input type="text" v-model="person.first_name"><br>
  <span>姓名: {{ person.fullName }}</span><br>
  姓名: <input type="text" v-model="person.fullName">
</template>

<script>
import { reactive, computed } from 'vue'
export default {
    name: 'Demo',
    setup() {
        // 數據
        let person = reactive({
            first_name: 'TzuLin',
            last_name: 'Fan'
        })

        // 計算屬性簡寫(沒有考慮計算屬性被修改的情況)
        /* person.fullName = computed(()=> {
            return person.last_name + ',' + person.first_name
        }) */

        // 計算屬性完整寫法(考慮讀和寫)
        person.fullName = computed({
            get() {
                return person.last_name + ',' + person.first_name
            },
            set(value) {
                const nameArr = value.split(',')
                person.last_name = nameArr[0]
                person.first_name = nameArr[1]
            }
        })

        // 返回一個對象(常用)
        return {
            person
        }
    }
}
</script>
