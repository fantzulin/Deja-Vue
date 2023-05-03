<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
      <!-- 如下代碼也能實現功能，但是不太推薦，因為有點違反原則，因為修改了 props -->
      <!-- <input type="checkbox" v-model="todo.done"/> -->
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input 
        type="text"
        v-show="todo.isEdit"
        :value="todo.title"
        @blur="handleBlur(todo, $event)"
        ref="inputTitle"
      >
    </label>
    <div>
      <button class="btn btn-edit" v-show="!todo.isEdit" @click="handleEdit(todo)">Edit</button>
      <button class="btn btn-danger" @click="handleDelete(todo.id)">Delete</button>
    </div>
  </li>
</template>

<script>
import pubsub from 'pubsub-js'
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
        // this.$bus.$emit('deleteTodo', id)
        pubsub.publish('deleteTodo', id)
      }
    },
    // 編輯
    handleEdit(todo) {
      if(todo.hasOwnProperty('isEdit')) {
        todo.isEdit = true
      } else {
        this.$set(this.todo, 'isEdit', true)
      }
      this.$nextTick(function(){
        this.$refs.inputTitle.focus()
      })
    },
    // 失去焦點回調(真正執行修改邏輯)
    handleBlur(todo, e) {
      todo.isEdit = false
      if(!e.target.value.trim()) return
      this.$bus.$emit('updateTodo', todo.id, e.target.value)
    }
  }
}
</script>

<style scoped>
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    display: none;
    margin: 3px;
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
    display: inline-block;
  }
</style>
