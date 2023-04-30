<template>
  <div class="school">
    <h2>學校姓名: {{ name }}</h2>
    <h2>學生性別: {{ address }}</h2>
    <button @click="sendSchoolName">sendSchoolName</button>
  </div>
</template>

<script>
export default {
    name: 'School',
    props: ['getSchoolName'],
    data() {
        return {
            name: 'Chris School',
            address: 'Taipei'
        }
    },
    methods: {
      sendSchoolName() {
        this.getSchoolName(this.name)
      }
    }
}
</script>

<style scoped>
  .school {
    padding: 10px;
    background-color: lightgray;
  }
</style>