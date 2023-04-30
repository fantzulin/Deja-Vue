<template>
  <div class="gray">
    <h2 class="title">學生姓名: {{ name }}</h2>
    <h2>學生性別: {{ sex }}</h2>
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
    }
}
</script>

<style lang='scss'>
.gray {
  background-color: lightblue;
  .title {
    color:red;
  }
}

</style>