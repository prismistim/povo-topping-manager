<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const props = defineProps({
  title: {
    type: String,
    default: '',
    required: true
  }
})

const increment = () => {
  count.value++
}
</script>

<template>
  <span>count: {{ count }}</span>
  <button
    class="px-4 py-2 rounded-md bg-indigo-600 text-white"
    @click="increment"
  >
    {{ props.title }}
  </button>
</template>

<style lang="postcss" scoped>
@import '../../assets/index.css';
</style>
