<template>
    <ul>
        <li>News001 <input type="text" class="form-control"></li>
        <li>News002 <input type="text" class="form-control"></li>
        <li>News003 <input type="text" class="form-control"></li>
    </ul>
</template>

<script>
export default {
    name: 'News',
    beforeDestroy() {
        console.log('News 組件被銷毀了')
    }
}
</script>

<style>

</style>