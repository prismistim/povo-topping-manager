<script setup lang="ts">
import router from '/@/router'

const props = defineProps({
  path: {
    type: String,
    default: '/',
    required: true
  }
})

const jumpTo = () => {
  router.push(props.path)
}
</script>

<template>
  <div class="text-center my-10">
    <button
      class="w-40 h-40 bg-povo hover:bg-yellow-100 text-lg rounded-full shadow-md font-mono"
      @click="jumpTo"
    >
      新規登録
    </button>
  </div>
</template>
