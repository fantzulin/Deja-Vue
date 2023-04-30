<template>
  <div class="student">
    <h2>學生姓名: {{ name }}</h2>
    <h2>學生性別: {{ sex }}</h2>
    <button @click="sendStudentName">sendStudent</button>
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
    methods: {
      sendStudentName(){
        // 觸發 Student 組件實例身上的 gStudent 事件
        this.$emit('gStudent', this.name)
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