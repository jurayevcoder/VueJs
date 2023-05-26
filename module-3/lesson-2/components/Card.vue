<template>
  <div class="card shadow-lg w-[260px] min-h-[360px] relative">
    <img :src="product.image" alt="rasm" class="card-img object-cover object-center w-full" />
    <div class="card-body p-4">
      <h2 class="text-green-900 text-sm">{{product?.title}}</h2>
      <strong class="text-2xl text-red-500">{{product?.price}}$</strong>
      <NuxtLink
        :to="`/product/${product.id}`"
        class="bg-cyan-500 block absolute rounded-lg bottom-4 px-3 py-1 focus:ring-2"
      >
        Details
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);

</script>

<style lang="scss" scoped>

.card-img {
    transform: scale(0.6);
    height: 200px;
    object-fit: contain;
  }

</style>
