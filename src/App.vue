<template>
  <div id="app">
    <h3>My Todo List</h3>
    <AddTodo/>
    <todos/>
  </div>
</template>

<script>

import todos from './components/todos.vue'
import AddTodo from './components/addTodo.vue'

export default {
  name: 'App',
  components: {
    todos,
    AddTodo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
