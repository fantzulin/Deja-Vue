<template>
    <div class="todo-footer">
        <label>
            <input type="checkbox">
        </label>
        <span>
            <span>已完成0</span> / 全部2
        </span>
        <button class="btn btn-danger">清除已完成任務</button>
    </div>
</template>

<script>
export default {
    name: 'MyFooter'
}
</script>

<style scoped>
    .todo-footer {
        margin-top: 5px;
        padding-left: 6px;
        height: 40px;
        line-height: 40px;
    }

    .todo-footer label {
        margin-right: 20px;
        display: inline-block;
        cursor: pointer;
    }

    .todo-footer label input {
        margin-right: 5px;
        top: -1px;
        position: relative;
        vertical-align: middle;
    }

    .todo-footer button {
        float: right;
        margin-top: 5px;
    }
</style>