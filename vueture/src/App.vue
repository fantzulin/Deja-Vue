<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <!-- 通過父組件給子組件傳遞函數類型的 props 實現: 子給父傳遞數據 -->
    <School :getSchoolName="getSchoolName"></School>

    <!-- 通過父組件給子組件綁定一個字定義事件實現: 子給父傳遞數據(第一種寫法，使用 @ 或 v-on ) -->
    <Student v-on:gStudent="getStudentlName"></Student>

    <!-- 通過父組件給子組件綁定一個字定義事件實現: 子給父傳遞數據(第二種寫法，使用 ref) -->
    <!-- <Student ref="student"></Student> -->
  </div>
</template>

<script>
import School from './components/School'
import Student from './components/Student'
export default {
  name: 'App',
  components:{
    School,
    Student
  },
  data() {
    return {
        msg: 'Hello!'
    }
  },
  methods: {
    getSchoolName(name) {
      console.log('SchoolName', name)
    },
    getStudentlName(name) {
      console.log('StudentName', name)
    }
  },
  mounted() {
    // this.$refs.student.$on('gStudent', this.getStudentlName) // 綁定自定義事件
    // this.$refs.student.$once('gStudent', this.getStudentlName) // 綁定自定義事件(一次性)
  }
}
</script>

<style scoped>
.app {
  padding: 10px;
  background-color: lightgoldenrodyellow;
}
</style>