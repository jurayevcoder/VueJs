<script>
export default {
  methods: {
    INCR() {
      this.$store.commit("INCREMENT");
    },
  },
};
</script>

<template>
  <div>
    <h1>{{ $store.state.number }}</h1>
    <button @click="INCR">INCREMENT</button>
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
