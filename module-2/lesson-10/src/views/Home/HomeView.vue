<script>
export default {
  methods: {
    add() {
      this.$store.commit("INCREMENT");
    },
  },
};
</script>

<template>
  <div>
    <h1>{{ $store.state.number }}</h1>
    <button @click="add">ADD</button>
  </div>
</template>

<style scoped></style>
