<template>
  <div class="app">
    <h1>{{ msg }}，學生姓名是: {{ studentName }}</h1>
    <!-- 通過父組件給子組件傳遞函數類型的 props 實現: 子給父傳遞數據 -->
    <School :getSchoolName="getSchoolName"></School>

    <!-- 通過父組件給子組件綁定一個字定義事件實現: 子給父傳遞數據(第一種寫法，使用 @ 或 v-on ) -->
    <!-- <Student @gStudent="getStudentlName" @test="m1"></Student> -->

    <!-- 通過父組件給子組件綁定一個字定義事件實現: 子給父傳遞數據(第二種寫法，使用 ref) -->
    <Student ref="student" @click.native="show"></Student>
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
        msg: 'Hello!',
        studentName: ''
    }
  },
  methods: {
    getSchoolName(name) {
      console.log('SchoolName', name)
    },
    getStudentlName(name) {
      console.log('StudentName', name)
      this.studentName = name
    },
    m1() {
      console.log('m1 demo 被觸發')
    },
    show() {
      console.log('show')
    }
  },
  mounted() {
    this.$refs.student.$on('gStudent', this.getStudentlName) // 綁定自定義事件
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