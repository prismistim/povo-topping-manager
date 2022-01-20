<script setup lang="ts">
import { PropType, computed } from 'vue'

type Option = {
  key: string | number
  label: string | number
  value?: string | number
  remainingDays?: string | number
}

const props = defineProps({
  options: {
    type: Array as PropType<Option[]>,
    default: () => [],
    required: false
  },
  modelValue: {
    type: [String, Number, Boolean, Array, Object],
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])
const computedValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <select
    v-model="computedValue"
    class="w-full px-2 py-1 mb-5 border-2 rounded-md"
  >
    <option
      v-for="option in props.options"
      :key="option.key ?? option"
      :value="option.value ?? option"
    >
      {{ option.label ?? option }}
    </option>
  </select>
</template>
