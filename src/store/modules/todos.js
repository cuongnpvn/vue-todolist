import axios from 'axios'

const state = {
  todos: [
    {
      id: 1,
      title: 'Do homework',
      completed: false,
    },
    {
      id: 2,
      title: 'Online class',
      completed: false,
    },
    {
      id: 3,
      title: 'Go jogging',
      completed: false,
    },
    {
      id: 4,
      title: 'Learn to cook',
      completed: true,
    },
    {
      id: 5,
      title: 'Go get vaccinated',
      completed: false,
    },
  ],
}

const getters = {
  allTodos: state => state.todos,
}

const actions = {
  async fetchTodos(commit) {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
    console.log(res.data)
    commit('setTodos', res.data)
  },
  async addTodo({ commit }, title) {
    const res = await axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false,
    })
    commit('newTodo', res.data)
  },
  async delTodo({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    commit('removeTodo', id)
  },
  async completeTodo({ commit }, id) {
    // await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    commit('checkTodo', id)
  },
}

const mutations = {
  setTodos: (state, todos) => {
    state.todos = todos
  },
  newTodo: (state, todo) => {
    state.todos.unshift(todo)
  },
  removeTodo: (state, id) => {
    state.todos = state.todos.filter(todo => todo.id !== id)
  },
  checkTodo: (state, id) => {
    for (let i in state.todos) {
      if (state.todos[i].id === id) {
        state.todos[i].completed = !state.todos[i].completed
      }
    }
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
