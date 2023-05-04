<template>
    <div class="category">
        <h3>{{ title }} category</h3>
        <!-- 定義一個插槽(挖個坑，等著組件的使用者進行填充) -->
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Category',
    props: ['title']
}
</script>

<style>
.category {
    width: 200px;
    height: 300px;
    background-color: lightgray;
}

h3 {
    text-align: center;
    background-color: gray;
}
</style>