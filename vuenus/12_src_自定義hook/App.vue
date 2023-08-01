<template>
  <button @click="isShowDemo = !isShowDemo">isShowDemo</button>
  <Demo v-if="isShowDemo"/>
  <hr>
  <Test/>
</template>

<script>
import { ref } from 'vue'
import Demo from './components/Demo.vue'
import Test from './components/Test.vue'
export default {
  name: 'App',
  components: {
    Demo,
    Test
  },
  setup() {
    let isShowDemo = ref(true)
    return { isShowDemo }
  }
}
</script>
