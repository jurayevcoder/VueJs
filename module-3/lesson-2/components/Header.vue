<template>
  <header class="bg-green-500">
    <div class="container mx-auto">
      <nav class="flex justify-between h-[70px] items-center">
        <NuxtLink to="/" class="text-2xl font-bold logo"
          >FACKE <span class="text-white">STORE</span></NuxtLink
        >

        <ul class="flex gap-10">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/product">Product</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
.router-link-exact-active {
  font-weight: 800;
  text-decoration: underline;
}
.logo {
  text-decoration: none;
}
</style>
