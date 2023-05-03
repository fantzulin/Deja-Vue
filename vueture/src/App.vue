<template>
  <div>
    <button @click="getAbout">get 5000 msg</button>
    <button @click="getEmail">get 5001 msg</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  methods: {
    getAbout() {
      axios.get('http://localhost:8080/chris/about').then(
        response => {
          console.log('請求成功了', response.data)
        },
        error => {
          console.log('請求失敗了', error.message)
        }
      )
    },
    getEmail() {
      axios.get('http://localhost:8080/demo/email').then(
        response => {
          console.log('請求成功了', response.data)
        },
        error => {
          console.log('請求失敗了', error.message)
        }
      )
    }
  }
}
</script>
