<template>
  <div class="school">
    <h2>學校姓名: {{ name }}</h2>
    <h2>學校地址: {{ address }}</h2>
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
    },
    mounted() {
      this.$bus.$on('hello', (data) => {
        console.log('School vc', data)
      })
    },
    beforeDedtroy() {
      this.$bus.$off('hello')
    }
}
</script>

<style scoped>
  .school {
    padding: 10px;
    background-color: lightgray;
  }
</style>