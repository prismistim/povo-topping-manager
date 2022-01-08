<script setup lang="ts">
const props = defineProps({
  hasBackLogo: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>
<template>
  <div class="container mx-auto px-10 md:px-60">
    <div class="mt-16 mb-10 text-center text-gray-500 text-xl">
      <router-link v-if="props.hasBackLogo" to="/">
        <svg
          v-if="props.hasBackLogo"
          class="stroke-current h-10 w-10 inline-block float-left stroke-2 cursor-pointer hover:text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </router-link>
      <slot name="page-title" />
    </div>
    <div class="mb-10 border-b border-gray-400" />
    <div>
      <slot name="content" />
    </div>
  </div>
</template>

<style lang="postcss">
@import '../../assets/index.css';
</style>
