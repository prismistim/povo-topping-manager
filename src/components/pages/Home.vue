<script setup lang="ts">
import TemplateDefault from '/@/components/templates/TemplateDefault.vue'
import AddBtn from '/@/components/organisms/home/AddBtn.vue'
import ToppingListHistory, {
  Props
} from '/@/components/organisms/home/ToppingListHistory.vue'
import { reactive, onMounted } from 'vue'
import { toppingStore } from '/@/store/toppings'

const store = toppingStore()

const data = reactive({
  savedData: [] as Props[]
})

onMounted(() => {
  data.savedData = store.fetchToppings
})
</script>

<template>
  <template-default>
    <template #page-title> povo-topping-manager </template>
    <template #content>
      <AddBtn />
      <ToppingListHistory :data="data.savedData" />
    </template>
  </template-default>
</template>
