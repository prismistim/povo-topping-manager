<script setup lang="ts">
type Props = {
  for: string
  text: string
}

const props = withDefaults(defineProps<Props>(), {
  for: '',
  text: 'label'
})
</script>

<template>
  <label :for="props.for" class="block mb-1 font-medium text-gray-600">
    {{ props.text }}
  </label>
</template>
