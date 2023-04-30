<template>
  <div>
    <h2>學校姓名: {{ name | mySlice }}</h2>
    <h2>學生性別: {{ address }}</h2>
    <button @click="test">點我測試 hello</button>
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
    methods: {
      test(){
        this.hello()
      }
    }
}
</script>