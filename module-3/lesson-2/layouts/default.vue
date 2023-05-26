<template>
  <div>
    <Header />
    <main class="min-h-screen p-4">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
});
</script>

<style lang="scss" scoped></style>
