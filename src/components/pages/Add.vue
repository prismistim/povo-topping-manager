<script setup lang="ts">
import { onMounted } from 'vue'
import TemplateDefault from '/@/components/templates/TemplateDefault.vue'
import FormDropdown from '/@/components/molecules/FormDropdown.vue'
import FormLabel from '/@/components/atoms/FormLabel.vue'
import FormDatePicker from '/@/components/molecules/FormDatePicker.vue'
import AddBtnDefault from '/@/components/atoms/AddBtnDefault.vue'
import { toppingStore } from '/@/store/toppings'
import { reactive } from 'vue'
import OPTIONS from '/@/constants/options'
import { useRouter } from 'vue-router'
import moment from 'moment'

const store = toppingStore()
const router = useRouter()

const data = reactive({
  selected: OPTIONS[0],
  selectedDate: ''
})

onMounted(() => {
  data.selectedDate = moment().format('YYYY-MM-DD')
})

const handleClink = () => {
  const id = store.addTopping(
    data.selected.label,
    data.selectedDate,
    data.selected.remainingDays
  )
  router.push(`/success/${id}`)
}
</script>

<template>
  <template-default :is-top-page="true">
    <template #page-title> 購入を登録する </template>
    <template #content>
      <FormLabel text="トッピング" />
      <FormDropdown v-model="data.selected" :options="OPTIONS"></FormDropdown>
      <FormLabel text="購入日" />
      <FormDatePicker v-model="data.selectedDate"></FormDatePicker>
      <AddBtnDefault
        label="登録"
        :full-rounded="true"
        :width-full="true"
        @click="handleClink"
      />
    </template>
  </template-default>
</template>
