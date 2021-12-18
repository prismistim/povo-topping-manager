<script setup lang="ts">
import TemplateDefault from '/@/components/templates/TemplateDefault.vue'
import HelloWorld from '/@/components/organisms/home/HelloWorld.vue'
import BtnDefault from '/@/components/atoms/BtnDefault.vue'
import FormDatePicker from '/@/components/molecules/FormDatePicker.vue'
</script>

<template>
  <template-default>
    <template #page-title> home </template>
    <template #content>
      <img alt="Vue logo" src="/@/assets/logo.png" />
      <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
      <btn-default title="hogehoge" />
      <FormDatePicker />
    </template>
  </template-default>
</template>
