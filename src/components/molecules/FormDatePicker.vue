<script setup lang="ts">
import { onMounted, reactive, ref, watch, computed } from 'vue'
import FormInputDefault from '/@/components/atoms/FormInputDefault.vue'
import FormLabel from '/@/components/atoms/FormLabel.vue'

type Props = {
  value: string
  text: string
}

type Calendar = {
  days: number[]
  blankDays: number[]
}

type Emit = {
  (e: 'update:value', value: string): void
}

const formatDate = (date: Date) => {
  return `${date.getFullYear()}-${('00' + (date.getMonth() + 1)).slice(-2)}-${(
    '00' + date.getDate()
  ).slice(-2)}`
}

const props = withDefaults(defineProps<Props>(), {
  value: '',
  text: '日付を選択'
})

const visible = ref(false)

const selected = reactive({
  year: 2021,
  month: 12,
  date: 1,
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
  let date = new Date()

  if (props.value !== '' && /\d{4}-[01]\d{2}-[0-3]{2}\d/.test(props.value)) {
    date = new Date(props.value)
  }

  selected.year = date.getFullYear()
  selected.month = date.getMonth()
  selected.date = date.getDate()

  selected.fullDate = formatDate(
    new Date(selected.year, selected.month, selected.date)
  )
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

const isToday = (date: number) => {
  const today = new Date()
  const targetDate = new Date(selected.year, selected.month, date)

  return today.toDateString() === targetDate.toDateString()
}

const getSelectedDate = (date: number) => {
  selected.date = date
  selected.fullDate = formatDate(new Date(selected.year, selected.month, date))
  visible.value = false
}

const changeMonth = (type: string) => {
  if (type === 'add') {
    if (selected.month === 11) {
      selected.year++
      selected.month = 0
    } else {
      selected.month++
    }
  } else if (type === 'sub') {
    if (selected.month === 0) {
      selected.year--
      selected.month = 11
    } else {
      selected.month--
    }
  }
}

const closeDatePicker = () => {
  visible.value = false
}

const emit = defineEmits<Emit>()

const handleInput = ({ target }: { target: HTMLInputElement }) => {
  emit('update:value', target.value)
}
</script>

<template>
  <FormLabel for="datepicker" :text="props.text" />
  <div class="relative w-full">
    <FormInputDefault
      :value="selected.fullDate"
      :type="'text'"
      placeholder="日付を選択"
      readonly
      @click="visible = true"
      @update:value="handleInput"
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
            @click="changeMonth('sub')"
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
            @click="changeMonth('add')"
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
              class="rounded-full cursor-pointer hover:bg-yellow-300 text-center text-sm leading-loose transition ease-in-out duration-100"
              :class="{
                'text-yellow-600 font-semibold': isToday(date),
                'text-gray-700': !isToday(date),
                'bg-yellow-100': date === selected.date
              }"
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
