import { defineStore } from "pinia"
import { reactive, ref } from "vue";

export const useTodoStore = defineStore('todo', () => {

  const state = reactive({
    todo: [],
    completed: false,
    status: "NO Text",
  })

  const setTodo = (task) => {
    state.todo.push(task);
  }

  const remove = (el) => {
    const index = state.todo.indexOf(el);
    const x = state.todo.splice(index, 1);
  };
  return { state, setTodo, remove }

})