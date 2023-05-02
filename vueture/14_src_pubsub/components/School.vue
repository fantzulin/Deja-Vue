<template>
  <div class="school">
    <h2>學校姓名: {{ name }}</h2>
    <h2>學校地址: {{ address }}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name: 'School',
    data() {
        return {
            name: 'Chris School',
            address: 'Taipei'
        }
    },
    mounted() {
      // this.$bus.$on('hello', (data) => {
      //   console.log('School vc', data)
      // })
      this.pubId = pubsub.subscribe('hello', (msgName, data) => {
        console.log('subscribe hello, hello function called', msgName, data)
      })
    },
    beforeDedtroy() {
      // this.$bus.$off('hello')
      pubsub.unsubscribe(this.pubId)
    }
}
</script>

<style scoped>
  .school {
    padding: 10px;
    background-color: lightgray;
  }
</style>