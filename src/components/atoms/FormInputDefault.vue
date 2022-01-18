<script setup lang="ts">
type Props = {
  value: string
  type: 'text' | 'number' | 'email' | 'password'
  placeholder: string
}

type Emit = {
  (e: 'update:value', value: string): void
}

const props = withDefaults(defineProps<Props>(), {
  value: '',
  type: 'text',
  placeholder: ''
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
    class="w-full px-2 py-1 mb-5 border-2 rounded-md"
    @input="handleInput"
  />
</template>

<style lang="postcss" scoped>
@import '../../assets/index.css';
</style>
