<script setup lang="ts">
type Props = {
  value: string
  type: 'text' | 'number' | 'email' | 'password'
  placeholder: string
  readonly?: boolean
}

type Emit = {
  (e: 'update:value', value: string): void
}

const props = withDefaults(defineProps<Props>(), {
  value: '',
  type: 'text',
  placeholder: '',
  readonly: false
})

const emit = defineEmits<Emit>()

const handleInput = ({ target }: { target: HTMLInputElement }) => {
  emit('update:value', target.value)
}
</script>

<template>
  <input
    :value="props.value"
    :placeholder="props.placeholder"
    :type="type"
    class="px-2 py-1 border-2 rounded-md w-full"
    :readonly="props.readonly"
    @input="handleInput"
  />
</template>

<style lang="postcss" scoped>
@import '../../assets/index.css';
</style>
