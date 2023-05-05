<template>
  <PostList :post="state" />
</template>

<script setup>
import { reactive, onMounted } from "vue";

let state = reactive({
  load: true,
  arr: [],
});

const getPost = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await response.json();
    state.arr = result;
    state.load = false;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  getPost();
});
</script>

<style scoped></style>
