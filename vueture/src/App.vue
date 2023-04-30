<template>
    <div id="app">
        <div class="todo-container">
            <div class="todo-wrap">
                <MyHeader></MyHeader>
                <List></List>
                <MyFooter></MyFooter>
            </div>
        </div>
    </div>
</template>

<script>
import MyHeader from './components/MyHeader'
import List from './components/List'
import MyFooter from './components/MyFooter'

export default {
    name: 'App',
    components: {
        MyHeader,
        List,
        MyFooter
    }
}
</script>

<style>
.btn-danger {
    background-color: red;
    color: #ffffff;
}

.todo-container {
    margin: 0 auto;
    width: 600px;
}

.todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #dddddd;
    border-radius: 5px;
}
</style>