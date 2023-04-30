<template>
  <div>
    <h2 @click="showName">學生姓名: {{ name }}</h2>
    <h2>學生性別: {{ sex }}</h2>
  </div>
</template>

<script>
// import {mix} from '../mixin'
export default {
    name: 'Student',
    data() {
        return {
            name: 'Chris',
            sex: 'Ms'
        }
    },
    // mixins: [mix]
}
</script>