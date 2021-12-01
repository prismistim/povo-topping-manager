<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: '',
    required: true
  }
})
</script>

<template>
  <button class="px-4 py-2 rounded-md bg-indigo-600 text-white">
    {{ props.title }}
  </button>
</template>

<style lang="css">
.button {
  @apply px-4 py-2 rounded-md bg-indigo-600 text-white;
}
</style>
