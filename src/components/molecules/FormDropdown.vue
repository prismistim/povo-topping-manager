<script setup lang="ts">
import { PropType } from 'vue'
import FormLabelVue from '/@/components/atoms/FormLabel.vue'
export type Props = {
  key: number
  value: number
  label: string
}
const props = defineProps({
  options: {
    type: Array as PropType<Props[]>,
    default: () => [],
    required: false
  }
})
</script>

<template>
  <FormLabelVue text="トッピング"></FormLabelVue>
  <select id="" name="">
    <option
      v-for="option in props.options"
      :key="option.key ?? option"
      :value="option.value ?? option"
    >
      {{ option.label ?? option }}
    </option>
  </select>
</template>
