import axios from "axios";

const state = {
  todos: [
    {
      id: 1,
      title: "selected or up",
      completed: false,
    },
    {
      id: 2,
      title: "one to go for easy and one's services",
      completed: false,
    },
    {
      id: 3,
      title: "test",
      completed: false,
    },
    {
      id: 4,
      title: "and the long periods",
      completed: true,
    },
    {
      id: 5,
      title:
        "an intense and fuzzy thing, as if to obtain it because they provide for it",
      completed: false,
    },
    {
      id: 6,
      title: "that any reason for some pleasure for everyone",
      completed: false,
    },
    {
      id: 7,
      title: "it's easy to achieve that",
      completed: false,
    },
    {
      id: 8,
      title: "where to obtain for how to get from",
      completed: true,
    },
    {
      id: 9,
      title: "you encounter real annoyance",
      completed: false,
    },
    {
      id: 10,
      title: "that is the nature of the CAPTCHA, or the greater it",
      completed: true,
    },
  ],
};

const getters = {
  allTodos: (state) => state.todos,
};

const actions = {
  async fetchTodos(commit) {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    console.log(res.data);
    commit("setTodos", res.data);
  },
  async addTodo({ commit }, title) {
    const res = await axios.post("https://jsonplaceholder.typicode.com/todos", {
      title,
      completed: false,
    });
    commit("newTodo", res.data);
  },
  async delTodo({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    commit("removeTodo", id);
  },
};

const mutations = {
  setTodos: (state, todos) => {
    state.todos = todos;
  },
  newTodo: (state, todo) => {
    state.todos.unshift(todo);
  },
  removeTodo: (state, id) => {
    state.todos = state.todos.filter((todo) => todo.id !== id);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
