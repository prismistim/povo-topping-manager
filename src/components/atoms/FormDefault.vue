<script setup lang="ts">
import { ref, reactive } from 'vue'

const fullName = ref<string>('')
const password = ref<string>('')

const changeInput = () => {
  console.log(fullName.value)
}
</script>
<template>
  <form class="grid grid-cols-1 gap-6 m-16">
    <label class="block">
      <span class="text-gray-700">購入日</span>
      <input
        type="date"
        class="mt-1 block w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      />
    </label>
    <label class="block">
      <span class="text-gray-700">What type of event is it?</span>
      <select
        class="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      >
        <option>Corporate event</option>
        <option>Wedding</option>
        <option>Birthday</option>
        <option>Other</option>
      </select>
    </label>
    <label class="block">
      <span class="text-gray-700">Additional details</span>
      <textarea
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        rows="3"
      ></textarea>
    </label>
    <div class="block">
      <div class="mt-2">
        <div>
          <label class="inline-flex items-center">
            <input
              type="checkbox"
              class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <span class="ml-2">Email me news and special offers</span>
          </label>
        </div>
      </div>
    </div>
  </form>
</template>
