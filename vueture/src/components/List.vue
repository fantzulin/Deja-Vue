<template>
    <ul>
        <Item></Item>
        <Item></Item>
    </ul>
</template>

<script>
import Item from './Item'
export default {
    name: 'List',
    components: {Item}
}
</script>

<style scoped>
    .todo-main {
        margin-left: 0;
        padding: 0;
        border: 1px solid #ddd;
        border-radius: 2px;
    }

    .todo-empty {
        margin-top: 10px;
        padding-left: 5px;
        height: 40px;
        line-height: 40px;
        border: 1px solid #ddd;
        border-radius: 2px;
    }
</style>