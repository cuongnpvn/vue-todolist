<template>
  <div id="app">
    <todos />
    <AddTodo />
  </div>
</template>

<script>
import AddTodo from './components/addTodo.vue'
import todos from './components/todos.vue'

export default {
  name: 'App',
  components: {
    todos,
    AddTodo,
  },
}
</script>

<style scoped></style>
