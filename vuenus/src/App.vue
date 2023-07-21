<template>
  <h1>一個人的訊息</h1>
  <h2>姓名: {{ person.name }}</h2>
  <h2>年齡: {{ person.age }}</h2>
  <h3>工作種類: {{ person.job.type }}</h3>
  <h3>工作薪水: {{ person.job.salary }}</h3>
  <h3>愛好 : {{ person.hobby }}</h3>
  <h3>test : {{ person.job.a.b.c }}</h3>
  <button @click="changeInfo">修改人的訊息</button>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'App',
  setup() {
    // 數據
    let person = reactive({
      name: 'Chris',
      age: 29,
      job: {
        type: 'front-end',
        salary: '50k',
        a: {
          b: {
            c: 888
          }
        }
      },
      hobby: ['eat', 'drink', 'play']
    })

    // 方法
    function changeInfo() {
      person.name = 'Alice'
      person.age = 33
      person.job.type = 'UI / UX'
      person.job.salary = '45k'
      person.job.a.b.c = 999
      person.hobby[0] = 'work'
    }

    // 返回一個對象(常用)
    return {
      person,
      changeInfo
    }
  }
}
</script>
