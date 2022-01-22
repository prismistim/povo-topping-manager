<script setup lang="ts">
type Props = {
  modelValue: string
  type: 'text' | 'number' | 'email' | 'password'
  placeholder: string
  readonly?: boolean
}

type Emit = {
  (e: 'update:modelValue', value: string): void
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  type: 'text',
  placeholder: '',
  readonly: false
})

const emit = defineEmits<Emit>()

const handleInput = ({ target }: { target: HTMLInputElement }) => {
  emit('update:modelValue', target.value)
}
</script>

<template>
  <input
    :value="props.modelValue"
    :placeholder="props.placeholder"
    :type="type"
    :readonly="props.readonly"
    class="w-full px-2 py-1 mb-5 border-2 rounded-md"
    @input="handleInput"
  />
</template>

<style lang="postcss" scoped>
@import '../../assets/index.css';
</style>
