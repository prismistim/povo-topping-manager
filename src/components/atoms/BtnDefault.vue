<script setup lang="ts">
import { computed } from 'vue'
import { color } from '/@/utils/color'
import { getButtonColor } from '/@/utils/color'

type Props = {
  label: string
  color?: color
  fullRounded?: boolean
  widthFull?: boolean
  to?: string
}

const props = withDefaults(defineProps<Props>(), {
  label: '',
  color: 'povo',
  fullRounded: false,
  widthFull: false,
  to: ''
})

const componentClass = computed(() => {
  const base = [
    'justify-center',
    'items-center',
    'p-2',
    'font-mono',
    props.fullRounded ? 'rounded-full' : 'rounded',
    props.widthFull ? 'w-full' : 'w-auto',
    getButtonColor(props.color)
  ]
  return base
})
</script>

<template>
  <router-link :to="props.to">
    <button :class="componentClass">
      {{ props.label }}
    </button>
  </router-link>
</template>
