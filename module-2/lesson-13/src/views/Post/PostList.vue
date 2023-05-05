<template>
  <h1 class="text-center fw-bold">POST LIST</h1>
  <div v-if="props?.post?.load">
    <Loader />
  </div>
  <ul class="list-group w-50 mx-auto my-5">
    <!-- PostItem -->
  </ul>
</template>

<script setup>
import { defineProps } from "vue";
import Message from "../../components/UI/Message.vue";
import PostItem from "./PostItem.vue";
import Loader from "../../components/UI/Loader.vue";

const props = defineProps({
  post: Object,
});
</script>

<style lang="scss" scoped></style>
