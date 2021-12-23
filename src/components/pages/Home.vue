<script setup lang="ts">
import TemplateDefault from '/@/components/templates/TemplateDefault.vue'
import AddBtn from '/@/components/organisms/home/AddBtn.vue'
import ToppingListHistory from '/@/components/organisms/home/ToppingListHistory.vue'
</script>

<template>
  <template-default>
    <template #page-title> povo-topping-manager </template>
    <template #content>
      <AddBtn />
      <ToppingListHistory topping-name="hoge" purchased-date="2021-12-23" />
    </template>
  </template-default>
</template>
