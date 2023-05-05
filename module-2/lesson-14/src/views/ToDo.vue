<script setup>
import { ref } from "vue";
import { useTodoStore } from "../stores/ToDo";
const store = useTodoStore();
const task = ref("");
const add = () => {
  store.setTodo(task.value);
  task.value = "";
};

const cut = (el) => {
  store.remove(el);
};
</script>
2

<template>
  <main>
    <h1>{{ store.state.status }}</h1>

    <input type="text" v-model="task" placeholder="enter task title" />

    <button @click="add">add</button>
    <h2 v-if="!store.state.todo.length">NOT FOUND</h2>
    <ul>
      <li v-for="el in store.state.todo">
        {{ el }}

        <button @click="cut">delete</button>
      </li>
    </ul>
  </main>
</template>
