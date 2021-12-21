<script setup lang="ts">
import TemplateDefault from '/@/components/templates/TemplateDefault.vue'
import AddBtn from '/@/components/organisms/home/AddBtn.vue'
import ToppingListHistory, {
  Props
} from '/@/components/organisms/home/ToppingListHistory.vue'

const data: Props[] = [
  {
    id: 1,
    toppingName: 'データ追加３GB（30日間）',
    purchasedDate: '2021-12-12',
    remainingDays: 8
  },
  {
    id: 2,
    toppingName: 'データ追加5GB（7日間）',
    purchasedDate: '2021-12-14',
    remainingDays: 2
  }
]
</script>

<template>
  <template-default>
    <template #page-title> povo-topping-manager </template>
    <template #content>
      <AddBtn />
      <ToppingListHistory :data="data" />
    </template>
  </template-default>
</template>
