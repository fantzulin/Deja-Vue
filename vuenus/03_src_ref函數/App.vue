<template>
  <h1>一個人的訊息</h1>
  <h2>姓名: {{ name }}</h2>
  <h2>年齡: {{ age }}</h2>
  <h3>工作種類: {{ job.type }}</h3>
  <h3>工作薪水: {{ job.salary }}</h3>
  <button @click="changeInfo">修改人的訊息</button>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'App',
  setup() {
    // 數據
    let name = ref('Chris')
    let age = ref(29)
    let job = ref({
      type: 'front-end',
      salary: '50k'
    })

    // 方法
    function changeInfo() {
      name.value = 'Alice'
      age.value = 33
      job.value.type = 'UI / UX'
      job.value.salary = '45k'
    }

    // 返回一個對象(常用)
    return {
      name,
      age,
      job,
      changeInfo
    }
  }
}
</script>
