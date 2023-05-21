<template>
    <ul>
        <li>Message number : {{ $route.params.id }}</li>
        <li>Message title : {{ $route.params.title }}</li>
    </ul>
</template>

<script>
export default {
    name: 'Detail',
    mounted() {
        console.log(this.$route)
    }
}
</script>

<style>

</style>