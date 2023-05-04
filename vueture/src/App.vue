<template>
  <div class="container">
    <Category title="Food">
      <img src="https://placehold.co/200x200">
    </Category>
    <Category title="Drink">
      <ul>
        <li v-for="(d, index) in drinks" :key="index">{{ d }}</li>
      </ul>
    </Category>
    <Category title="Fun">
      <iframe width="100%" src="https://www.youtube.com/embed/UBURTj20HXI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category'
export default {
  name: 'App',
  components: {Category},
  data() {
    return {
      foods: ['fruit', 'bread', 'egg', 'meat'],
      drinks: ['coffee', 'water', 'milk', 'alcohol'],
      play: ['ball', 'game', 'video', 'piano']
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}

video {
  width: 100%;
}
</style>