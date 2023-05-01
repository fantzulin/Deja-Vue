<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
      <!-- 如下代碼也能實現功能，但是不太推薦，因為有點違反原則，因為修改了 props -->
      <!-- <input type="checkbox" v-model="todo.done"/> -->
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">Delete</button>
  </li>
</template>

<script>
export default {
  name: 'Item',
  // 聲明接收 todo 對象
  props: ['todo'],
  methods: {
    // 勾選 or 取消勾選
    handleCheck(id) {
      // 通知 App 組件將對應的 todo 對象的 done 值
      // this.checkTodo(id)
      this.$bus.$emit('checkTodo', id)
    },
    // 刪除
    handleDelete(id) {
      if(confirm('Are you sure to delete?')) {
        // this.deleteTodo(id)
        this.$bus.$emit('deleteTodo', id)
      }
    }
  }
  
}
</script>

<style scoped>
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

  li:hover {
    background: #ddd;
  }

  li:hover button{
    display: block;
  }
</style>
