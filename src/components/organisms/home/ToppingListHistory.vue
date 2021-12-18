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
  <div class="pt-10 container">
    <p class="text-gray-500 font-mono mb-2">購入したトッピング</p>
    <div
      class="bg-white h-auto tracking-wide px-2 py-6 mb-2 border border-black-800 mx-1 rounded-lg relative"
    >
      <div
        class="small-banner w-2 bottom-6 top-6 left-2 bg-povo absolute rounded-tl-md"
      ></div>
      <div class="grid grid-cols-6">
        <div class="col-start-1 col-end-4">
          <p class="font-mono pl-6 py-2 pr-6">データ追加３GB（30日間）</p>
          <span class="text-md font-regular p-6 pt-2 text-gray-500">
            {{ props.purchasedDate }}
          </span>
        </div>
        <div class="col-end-7">
          <p class="font-mono text-xs text-center text-gray-400">残り日数</p>
          <div
            class="w-full h-2/3 bg-green-300 leading-10 text-center rounded-lg text-2xl text-white"
          >
            20
          </div>
        </div>
      </div>
    </div>

    <div
      class="bg-white h-auto tracking-wide px-2 py-6 mb-2 border border-black-800 mx-1 rounded-lg relative"
    >
      <div
        class="small-banner w-2 bottom-6 top-6 left-2 bg-povo absolute rounded-tl-md"
      ></div>
      <div class="grid grid-cols-6">
        <div class="col-start-1 col-end-4">
          <p class="font-mono pl-6 py-2 pr-6">データ追加３GB（30日間）</p>
          <span class="text-md font-regular p-6 pt-2 text-gray-500">
            {{ props.purchasedDate }}
          </span>
        </div>
        <div class="col-end-7">
          <p class="font-mono text-xs text-center text-gray-400">残り日数</p>
          <div
            class="w-full h-2/3 bg-green-300 leading-10 text-center rounded-lg text-2xl text-white"
          >
            20
          </div>
        </div>
      </div>
    </div>

    <div
      class="bg-white h-auto tracking-wide px-2 py-6 mb-2 border border-black-800 mx-1 rounded-lg relative"
    >
      <div
        class="small-banner w-2 bottom-6 top-6 left-2 bg-povo absolute rounded-tl-md"
      ></div>
      <div class="grid grid-cols-6">
        <div class="col-start-1 col-end-4">
          <p class="font-mono pl-6 py-2 pr-6">データ追加３GB（30日間）</p>
          <span class="text-md font-regular p-6 pt-2 text-gray-500">
            {{ props.purchasedDate }}
          </span>
        </div>
        <div class="col-end-7">
          <p class="font-mono text-xs text-center text-gray-400">残り日数</p>
          <div
            class="w-full h-2/3 bg-green-300 leading-10 text-center rounded-lg text-2xl text-white"
          >
            20
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
