<script setup lang="ts">
import TemplateDefault from '/@/components/templates/TemplateDefault.vue'
import FormDropdown from '/@/components/molecules/FormDropdown.vue'
import FormDatePicker from '/@/components/molecules/FormDatePicker.vue'
import AddBtnDefault from '/@/components/atoms/AddBtnDefault.vue'
import { toppingStore } from '/@/store/toppings'
import { reactive } from 'vue'

const selectOptions = [
  { key: 1, value: 1, label: 'データ使い放題 (24時間）' },
  { key: 2, value: 7, label: 'データ追加1GB（7日間）' },
  { key: 3, value: 30, label: 'データ追加3GB（30日間）' },
  { key: 4, value: 30, label: 'データ追加20GB（30日間）' },
  { key: 5, value: 90, label: 'データ追加60GB（90日間）' },
  { key: 6, value: 180, label: 'データ追加150GB（180日間）' }
]

// toppingStoreを呼び出すだけで、グローバルストアへのアクセスが可能
const store = toppingStore()

const data = reactive({
  date: ''
})

const handleClink = () => {
  // store.addTopping(state.newTodoLabel)
  console.log(data.date)
}
</script>

<template>
  <template-default :is-top-page="true">
    <template #page-title> 購入を登録する </template>
    <template #content>
      <FormDropdown :options="selectOptions" text="トッピング"></FormDropdown>
      <FormDatePicker text="購入日"></FormDatePicker>
      <AddBtnDefault
        label="登録"
        :full-rounded="true"
        :width-full="true"
        @click="handleClink"
      />
    </template>
  </template-default>
</template>
