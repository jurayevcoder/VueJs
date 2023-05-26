<template>
  <div>
    <h1>
      {{ error.statusMessage }}
    </h1>
    <h2>{{ error.statusCode }}</h2>
  </div>
</template>

<script setup>
defineProps(["error"]);
</script>

<style lang="scss" scoped></style>
