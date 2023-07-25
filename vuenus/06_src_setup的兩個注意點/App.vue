<template>
  <Demo @hello="showHello" msg="Hi!" school="Hi School">
    <template v-slot:qwe>
      <span>Chris</span>
    </template>
    <template v-slot:asd>
      <span>Chris</span>
    </template>
  </Demo>
</template>

<script>
import Demo from './components/Demo.vue'
export default {
  name: 'App',
  components: {Demo},
  setup() {
    function showHello(value) {
      console.log(`this is hello event, value:${value}`)
    }

    return {
      showHello
    }
  }
}
</script>
