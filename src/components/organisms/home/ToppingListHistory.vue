<script setup lang="ts">
type Props = {
  toppingName: string
  purchasedDate: string
}
const props = withDefaults(defineProps<Props>(), {
  toppingName: 'fuga',
  purchasedDate: '2021-12-12'
})
</script>

<template>
  <div class="pt-10">
    <p class="font-mono text-gray-500">購入したトッッピング</p>
    <ul>
      <li>
        <a
          href="#"
          class="block px-4 py-4 my-4 shadow border-l-4 border-yellow-300"
          >{{ props.toppingName }}</a
        >
      </li>
      <li>
        <a
          href="#"
          class="block px-4 py-4 my-4 shadow border-l-4 border-yellow-300"
          >{{ props.toppingName }}</a
        >
      </li>
    </ul>
  </div>
</template>
