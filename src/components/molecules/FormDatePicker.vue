<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue'
import FormInputDefault from '/@/components/atoms/FormInputDefault.vue'

type Calendar = {
  days: number[]
  blankDays: number[]
}

const visible = ref(false)

const selected = reactive({
  year: 2021,
  month: 12,
  fullDate: ''
})

const calendar = reactive<Calendar>({
  days: [],
  blankDays: []
})

const dayOfWeek = ['日', '月', '火', '水', '木', '金', '土']

onMounted(() => {
  initialize()
  generateDays()
})

watch(
  () => selected.month,
  () => {
    generateDays()
  }
)

const initialize = () => {
  const today = new Date()

  selected.year = today.getFullYear()
  selected.month = today.getMonth()

  selected.fullDate = new Date(
    selected.year,
    selected.month,
    today.getDate()
  ).toDateString()
}

const generateDays = () => {
  const startDate = new Date(selected.year, selected.month, 0).getDate()
  const startDayOfWeek = new Date(selected.year, selected.month).getDay()

  const blankDays = []
  const days = []

  for (let i = 1; i <= startDayOfWeek; i++) {
    blankDays.push(i)
  }

  for (let j = 1; j <= startDate; j++) {
    days.push(j)
  }

  calendar.blankDays = blankDays
  calendar.days = days
}

const getSelectedDate = (date: number) => {
  selected.fullDate = new Date(
    selected.year,
    selected.month,
    date
  ).toDateString()

  visible.value = false
}
</script>

<template>
  <div class="relative">
    <FormInputDefault
      :value="selected.fullDate"
      :type="'text'"
      placeholder="日付を選択"
      @click="visible = true"
    />
    <div class="absolute top-0 right-0 px-3 py-2"></div>
    <div
      v-show="visible"
      class="absolute top-0 left-0 mt-12 p-4 rounded-lg shadow-sm bg-white"
      style="width: 17rem"
    >
      <div class="flex justify-between items-center mb-2">
        <div>
          <span class="text-lg font-normal text-gray-600">
            {{ selected.year }}年
          </span>
          <span class="ml-1 text-lg font-medium text-gray-800">
            {{ selected.month + 1 }}月
          </span>
        </div>
        <div>
          <button
            class="p-1 inline-flex hover:bg-gray-200 rounded-full cursor-pointer transition ease-in-out duration-100"
            @click="selected.month--"
          >
            <svg
              class="h-6 w-6 text-gray-500 inline-flex"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            class="p-1 inline-flex hover:bg-gray-200 rounded-full cursor-pointer transition ease-in-out duration-100"
            @click="selected.month++"
          >
            <svg
              class="h-6 w-6 text-gray-500 inline-flex"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="grid grid-cols-7 flex-wrap mb-3">
        <div v-for="(day, index) in dayOfWeek" :key="index">
          <div class="px-2.5" style="width: 14.26%">
            <div class="text-xs text-center font-medium text-gray-800">
              {{ day }}
            </div>
          </div>
        </div>
      </div>
      <div class="flex-wrap mb-3 grid grid-cols-7">
        <div v-for="(blankDay, index) in calendar.blankDays" :key="index">
          <div class="border border-transparent text-sm text-center"></div>
        </div>
        <div v-for="date in calendar.days" :key="date">
          <div class="mb-1">
            <div
              class="rounded-full cursor-pointer text-center text-sm leading-loose transition ease-in-out duration-100"
              @click="getSelectedDate(date)"
            >
              {{ date }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
@import '../../assets/index.css';
</style>
