<template>
  <div>
    <h2 @click="showName">學校姓名: {{ name }}</h2>
    <h2>學生性別: {{ address }}</h2>
  </div>
</template>

<script>
// import {mix, counts} from '../mixin.js'
export default {
    name: 'School',
    data() {
        return {
            name: 'Chris School',
            address: 'Taipei'
        }
    },
    // mixins: [mix, counts]
}
</script>