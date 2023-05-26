<template>
  <div class="container mx-auto">
    <div class="wrapper p-6 border border-dashed border-green-400">
      <div class="p-4 shadow bg-white flex justify-between items-center">
        <h2 class="font-bold uppercase">Contact</h2>
        <button
          @click="back.go(-1)"
          class="bg-red-600 text-white px-2 py-2 focus:ring-2 focus:ring-red-400 rounded-xl"
        >
          go back
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const back = useRouter();
const {name}=useRoute();
useHead({
  title: `${name} page of Fakestore App`,
  meta: [
    { name: "description", content: `${name} page of Fakestore App`},
    { name: "author", content: "Nuxt3 app " },
  ],
});
</script>

<style lang="scss" scoped></style>
