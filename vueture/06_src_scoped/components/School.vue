<template>
  <div class="demo">
    <h2>學校姓名: {{ name }}</h2>
    <h2>學生性別: {{ address }}</h2>
  </div>
</template>

<script>
export default {
    name: 'School',
    data() {
        return {
            name: 'Chris School',
            address: 'Taipei'
        }
    }
}
</script>

<style scoped>
  .demo {
    background-color: lightgray;
  }
</style>