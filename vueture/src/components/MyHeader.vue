<template>
    <div class="todo-header">
        <input type="text" placeholder="請輸入">
    </div>
</template>

<script>
export default {
    name: 'MyHeader'
}
</script>

<style scoped>
    .todo-header input {
        padding: 4px 7px;
        width: 560px;
        height: 28px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
</style>