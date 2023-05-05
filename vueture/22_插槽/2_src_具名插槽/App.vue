<template>
  <div class="container">
    <Category title="Food">
      <img slot="content" src="https://placehold.co/200x200">
      <a slot="footer" href="https://www.youtube.com/">YouTube</a>
    </Category>
    <Category title="Drink">
      <ul slot="content">
        <li v-for="(d, index) in drinks" :key="index">{{ d }}</li>
      </ul>
      <div class="div-footer" slot="footer">
        <a href="https://www.youtube.com/">YouTube2</a>
        <a href="https://www.youtube.com/">YouTube3</a>
      </div>
    </Category>
    <Category title="Fun">
      <iframe slot="content" width="100%" src="https://www.youtube.com/embed/UBURTj20HXI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <template slot="footer">
        <div class="div-footer">
          <a href="https://www.youtube.com/">YouTube4</a>
          <a href="https://www.youtube.com/">YouTube5</a>
          <a href="https://www.youtube.com/">YouTube6</a>
        </div>
        <h4>Hey!</h4>
      </template>
      
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
.container,
.div-footer {
  display: flex;
  justify-content: space-around;
}

video {
  width: 100%;
}

h4 {
  text-align: center;
}
</style>