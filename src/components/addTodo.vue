<template>
  <div class="container">
    <a-form @submit="handleSubmit" class="form">
      <a-form-item :style="{ display: 'inline-block', width: '80%' }">
        <a-input style="width: 100%" placeholder="add..." v-model="title" />
      </a-form-item>
      <a-form-item :style="{ display: 'inline-block', width: '5%' }">
      </a-form-item>
      <a-form-item :style="{ display: 'inline-block', width: '10%' }">
        <a-button type="primary" html-type="submit">
          +
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AddTodo',
  data() {
    return {
      title: '',
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    handleSubmit(e) {
      e.preventDefault()
      this.addTodo(this.title)
      this.title = ''
    },
  },
}
</script>

<style scoped>
.container {
  position: relative;
  width: 400px;
  height: 60px;
  bottom: 90px;
  border-color: black;
}
</style>
