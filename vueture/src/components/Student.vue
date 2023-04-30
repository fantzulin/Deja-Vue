<template>
  <div class="student">
    <h2>學生姓名: {{ name }}</h2>
    <h2>學生性別: {{ sex }}</h2>
    <h2>當前求和為: {{ number }}</h2>
    <button @click="add">number++</button>
    <button @click="sendStudentName">sendStudent</button>
    <button @click="unbind">解綁 gStudent 事件</button>
    <button @click="death">銷毀當前 Student 組件的實例對象</button>
  </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            name: 'Chris',
            sex: 'Ms',
            number: 0
        }
    },
    methods: {
      add() {
        console.log('add function')
        this.number++
      },
      sendStudentName() {
        // 觸發 Student 組件實例身上的 gStudent 事件
        this.$emit('gStudent', this.name)
        this.$emit('test')
      },
      unbind() {
        // this.$off('gStudent') // 解綁一個自定義事件
        // this.$off(['gStudent', 'test']) // 解綁多個自定義事件
        this.$off() // 解綁所有的自定義事件
      },
      death() {
        this.$destroy() // 銷毀了當前 Student 組件的實例對象，銷毀後所有 Student 實例的自定義事件全都不奏效。
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