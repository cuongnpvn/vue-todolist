<template>
  <div class="container">
      <div class="add">
          <form @submit="onSubmit">
          <input type="text" v-model="title" placeholder="add todo..." class="title">
          <input type="submit" value="+" class="submit">
          </form>
      </div>
      
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "AddTodo",
    data() {
        return {
            title: ''
        }
    },
    methods: {
        ...mapActions(['addTodo']),
        onSubmit(e) {
            e.preventDefault()
            this.addTodo(this.title);
            this.title = '';
        }
    }
}
</script>

<style scoped>
.add {
    margin: 20px;
    padding: 10px;
}
.title {
    margin-left: 0px;
    margin-right: 20px;
    padding: 10px;
    width: 500px;
}
.submit {
    font-size: 20px;
}
</style>