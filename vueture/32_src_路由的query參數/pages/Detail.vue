<template>
    <ul>
        <li>Message number : {{ $route.query.id }}</li>
        <li>Message title : {{ $route.query.title }}</li>
    </ul>
</template>

<script>
export default {
    name: 'Detail',
    mounted() {
        
    }
}
</script>

<style>

</style>