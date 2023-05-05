<template>
  <div class="container">
    <Category title="Drink">
      <template scope="drinks">
        <ul>
          <li v-for="(d, index) in drinks.drinks" :key="index">{{ d }}</li>
        </ul>
      </template>
    </Category>
    <Category title="Drink">
      <template scope="{drinks}">
        <ol>
          <li v-for="(d, index) in drinks" :key="index">{{ d }}</li>
        </ol>
      </template>
    </Category>
    <Category title="Drink">
      <template scope="{drinks}">
          <h4 v-for="(d, index) in drinks" :key="index">{{ d }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category'
export default {
  name: 'App',
  components: {Category}
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