<script setup lang="ts">
import { computed } from 'vue'

type Props = {
  text: string
  rounded: boolean
}
const props = withDefaults(defineProps<Props>(), {
  text: '登録',
  rounded: false
})

const btnClass = computed(() => {
  const base = [
    'w-full h-10 bg-povo hover:bg-yellow-100 text-lg shadow-md font-mono',
    props.rounded ? 'rounded-2xl' : ''
  ]

  return base
})
</script>

<template>
  <div class="text-center my-10">
    <router-link to="/add">
      <button :class="btnClass">
        {{ props.text }}
      </button>
    </router-link>
  </div>
</template>
