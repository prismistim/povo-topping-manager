<script setup lang="ts">
import { PropType } from 'vue'
import FormLabelVue from '/@/components/atoms/FormLabel.vue'

type Option = {
  key: number
  value: number
  label: string
}
const props = defineProps({
  options: {
    type: Array as PropType<Option[]>,
    default: () => [],
    required: false
  },
  text: {
    type: String,
    default: '',
    required: false
  }
})
</script>

<template>
  <FormLabelVue :text="props.text"></FormLabelVue>
  <select class="w-full px-2 py-1 mb-5 border-2 rounded-md">
    <option
      v-for="option in props.options"
      :key="option.key ?? option"
      :value="option.value ?? option"
    >
      {{ option.label ?? option }}
    </option>
  </select>
</template>
