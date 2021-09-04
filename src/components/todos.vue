<template>
  <div class="container">
      <div class="todos">
          <div v-for="todo in allTodos" :key="todo.id" class="todo">
              {{ todo.title }}
              <i @click="delTodo(todo.id)" class="fa fa-trash-o"></i>
          </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: "todos",
    methods: {
        ...mapActions(['fetchTodos', 'delTodo'])
    },
    created: () => {
        this.fetchTodos();
    },
    computed: mapGetters(['allTodos']),

}
</script>

<style scoped>

.todos {
    margin-top: 100px;
    margin-left: 450px;
}
.todo {
    
text-align: left;
  border: 10px solid rgb(63, 170, 77);
  padding: 10px;
  margin: 20px;
  max-width: 500px;
}
.fa.fa-trash-o {
    cursor: pointer;
    position: absolute;
  right: 470px;
}
</style>
