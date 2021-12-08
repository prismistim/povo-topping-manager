<script setup lang="ts">
const props = defineProps({
  toppingName: String,
  purchasedDate: Date
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
          >HRとは</a
        >
      </li>
      <li>
        <a
          href="#"
          class="block px-4 py-4 my-4 shadow border-l-4 border-yellow-300"
          >HRとは</a
        >
      </li>
    </ul>
  </div>
</template>
