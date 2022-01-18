<script setup lang="ts">
import TemplateDefault from '/@/components/templates/TemplateDefault.vue'
import FormDropdown from '/@/components/molecules/FormDropdown.vue'
import FormDatePicker from '/@/components/molecules/FormDatePicker.vue'
import AddBtn from '/@/components/atoms/AddBtn.vue'

const selectOptions = [
  { key: 1, value: 1, label: 'データ使い放題 (24時間）' },
  { key: 2, value: 7, label: 'データ追加1GB（7日間）' },
  { key: 3, value: 30, label: 'データ追加3GB（30日間）' },
  { key: 4, value: 30, label: 'データ追加20GB（30日間）' },
  { key: 5, value: 90, label: 'データ追加60GB（90日間）' },
  { key: 6, value: 180, label: 'データ追加150GB（180日間）' }
]
</script>

<template>
  <template-default :has-back-logo="true">
    <template #page-title> 購入を登録する </template>
    <template #content>
      <FormDropdown :options="selectOptions" text="トッピング"></FormDropdown>
      <FormDatePicker text="購入日"></FormDatePicker>
      <AddBtn :rounded="true"> </AddBtn>
    </template>
  </template-default>
</template>
