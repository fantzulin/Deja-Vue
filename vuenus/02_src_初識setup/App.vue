<template>
  <h1>一個人的訊息</h1>
  <h2>姓名: {{ name }}</h2>
  <h2>年齡: {{ age }}</h2>
  <button @click="sayHello">sayHello</button>
  <br>
  <button @click="sayWelcome">sayWelcome</button>
</template>

<script>
// import { h } from 'vue'
export default {
  name: 'App',
  data() {
    return {
      sex: 'Miss'
    }
  },
  methods: {
    sayWelcome() {
      console.log('Welcome')
    }
  },
  // 此處只是測試一下 setup，暫時不考慮響應式的問題
  setup() {
    // 數據
    let name = 'Chris'
    let age = 29

    // 方法
    function sayHello() {
      console.log(`I'm ${this.name}, I'm ${this.age} years old. Hello!`)
    }

    // 返回一個對象(常用)
    return {
      name,
      age,
      sayHello
    }

    // 返回一個函數(渲染函數)
    // return () => h('h1', 'wow')
  }
}
</script>
