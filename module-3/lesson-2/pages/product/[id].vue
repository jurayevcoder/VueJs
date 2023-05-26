<template>
    <div class="container mx-auto">
      <div class="wrapper p-6 border border-dashed bor der-green-400">
        <div class="p-4 shadow bg-white">
          <h2>Products item {{ id }}</h2>
          <button>go back</button>
        </div>
      </div>
    </div>
  </template>

  <script setup>
  const {id} = useRoute().params;
  </script>

  <style lang="scss" scoped></style>
