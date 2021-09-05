<template>
  <div class="container">
    <a-card title="My Todo List" :bordered="true">
      <a-list bordered :data-source="allTodos">
        <a-list-item
          slot="renderItem"
          slot-scope="todo, id"
          :key="id"
          class="list-item"
        >
          {{ todo.title }}
          <span class="del-icon-background">
            <i @click="delTodo(todo.id)" class="fa fa-trash-o"></i>
          </span>
        </a-list-item>
      </a-list>
    </a-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'todos',
  methods: {
    ...mapActions(['fetchTodos', 'delTodo']),
  },
  created: () => {
    this.fetchTodos()
  },
  computed: mapGetters(['allTodos']),
}
</script>

<style>
.container {
  margin: 120px auto;
  max-width: 400px;
  width: 100%;
  border-radius: 5px;
  padding: 10px;
  background: #ececec;
}
.a-card {
  width: 380px;
}
.fa.fa-trash-o {
  cursor: pointer;
  position: absolute;
  top: 10px;
  left: 15px;
  font-size: 150%;
}
.del-icon-background {
  position: absolute;
  right: 0px;
  top: 0px;
  background: rgb(236, 138, 138);
  width: 45px;
  height: 100%;
  text-align: center;
  border-radius: 3px 3px 3px 3px;
  cursor: pointer;
}
.list-item {
  background-image: linear-gradient(
    to right,
    rgb(0, 132, 255),
    rgb(250, 253, 253)
  );
  font-family: 'Poppins', sans-serif;
  font-weight: 100;
  position: relative;
}
</style>
