<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>學生姓名: {{ name }}</h2>
    <h2>學生性別: {{ sex }}</h2>
    <h2>學生年齡: {{ myAge+1 }}</h2>
    <button @click="ChangeAge">ChangeAge</button>
  </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            msg: 'Hello!',
            myAge: this.age
        }
    },
    //簡單接收
    //props: ['name', 'sex', 'age']

    // 接收的同時對數據進行類型限制
    /*props: {
        name: String,
        sex: String,
        age: Number
    }*/

    // 接收的同時對數據進行類型限制 + 默認值的指定 + 必要性的限制
    props: {
        name: {
            type: String, // 定義值類型是字串
            required: true // 必要的
        },
        sex: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            default: 99 // 默認值
        }
    },
    methods: {
        ChangeAge() {
            this.myAge++
        }
    }
}
</script>