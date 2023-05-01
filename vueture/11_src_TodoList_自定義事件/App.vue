<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @addTodo="addTodo"/>
        <List :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
        <MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"/>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader";
import List from "./components/List";
import MyFooter from './components/MyFooter';

export default {
  name: 'App',
  components: {
    MyHeader,
    List,
    MyFooter
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  methods: {
    // 添加一個 todo
    addTodo(todoObj) {
      this.todos.unshift(todoObj)
    },
    // 勾選 or 取消勾選一個 todo
    checkTodo(id) {
      this.todos.forEach((todo)=> {
        if(todo.id===id) todo.done = !todo.done
      })
    },
    // 刪除一個 todo
    deleteTodo(id) {
      this.todos = this.todos.filter((todo)=>{
        return todo.id !== id
      })

      // 簡寫
      //this.todos = this.todos.filter( todo => todo.id !== id)
    },
    // 全選 or 全不選
    checkAllTodo(done) {
      this.todos.forEach((todo)=>{
        todo.done = done
      })
    },
    // 清除所有已經完成的 todo
    clearAllTodo() {
      this.todos = this.todos.filter((todo)=>{
        return !todo.done
      })
    }
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem('todos', JSON.stringify(value))
      }
    }
  }
}
</script>

<style>
  body {
    background: #fff;
  }

  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn:focus {
    outline: none;
  }

  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
