<template>
    <div class="col-12">
        <div class="page-header">
          <h1>Vue Router Demo</h1>
          <button class="btn btn-outline-dark" @click="back">←</button>
          <button class="btn btn-outline-dark" @click="forward">→</button>
          <button class="btn btn-outline-dark" @click="goTwo">Go 2 step</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Banner',
    methods: {
        back() {
            this.$router.back()
        },
        forward() {
            this.$router.forward()
        },
        goTwo() {
            this.$router.go(2)
        }
    }
}
</script>

<style>

</style>