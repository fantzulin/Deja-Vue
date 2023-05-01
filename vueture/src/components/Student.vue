<template>
  <div class="student">
    <h2>學生姓名: {{ name }}</h2>
    <h2>學生性別: {{ sex }}</h2>
    <button @click="sendStudentName">sendStudentName</button>
  </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            name: 'Chris',
            sex: 'Ms'
        }
    },
    mounted() {
      // console.log('Student', this.x)
    },
    methods: {
      sendStudentName() {
        this.$bus.$emit('hello', this.name)
      }
    }
}
</script>

<style scoped>
.student {
  margin-top: 10px;
  padding: 10px;
  background-color: lightblue;
}
</style>