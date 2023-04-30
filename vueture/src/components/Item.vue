<template>
<li>
    <label>
        <input type="checkbox">
        <span>xxx</span>
    </label>
    <button class="btn btn-danger" style="display: none;">delete</button>
</li>
</template>

<script>
export default {
    name: 'Item'
}
</script>

<style scoped>
    li {
        padding: 0 5px;
        height: 36px;
        list-style: none;
        line-height: 36px;
        border-bottom: 1px solid #dddddd;
    }

    li label {
        float: left;
        cursor: pointer;
    }

    li label li input {
        top: -1px;
        margin-right: 6px;
        position: relative;
        vertical-align: middle;
    }

    li button {
        margin-top: 3px;
        float: right;
        display: none;
    }

    li:before {
        content: initial;
    }

    li:last-child {
        border-bottom: none;
    }
</style>