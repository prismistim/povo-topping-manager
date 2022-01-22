<script setup lang="ts">
import TemplateDefault from '/@/components/templates/TemplateDefault.vue'
import FormLabel from '/@/components/atoms/FormLabel.vue'
import FormInputDefault from '/@/components/atoms/FormInputDefault.vue'
import AddBtnDefault from '/@/components/atoms/AddBtnDefault.vue'
import moment from 'moment'
import { reactive } from 'vue'
import { toppingStore } from '/@/store/toppings'
import { useRoute } from 'vue-router'

type Url = {
  base: string
  params: {
    text: string
    dates: string
    [key: string]: string | undefined
  }
}

const store = toppingStore()
const route = useRoute()

const data = store.findTopping(Number(route.params.id))

const url: Url = reactive({
  base: 'https://www.google.com/calendar/render?action=TEMPLATE',
  params: {
    text: '',
    dates: ''
  }
})

const addToGoogleCalendar = (): void => {
  url.params.text = 'povoのデータ期限日です'

  url.params.dates = moment(data.purchasedDate)
    .add(data.remainingDays, 'days')
    .format('YYYYMMDDTHHmmSSZ/YYYYMMDDTHHmmSSZ')

  for (let i in url.params) {
    url.base += `&${i}=${url.params[i]}`
  }
  window.open(url.base)
}
</script>

<template>
  <template-default>
    <template #page-title>登録完了</template>
    <template #content>
      <div class="mb-5">
        <FormLabel text="トッピング" for="topping" />
        <FormInputDefault
          :value="data.toppingName"
          type="text"
          :readonly="true"
          placeholder="選択してください"
        />
      </div>
      <div class="mb-5">
        <FormLabel text="購入日" for="topping" />
        <FormInputDefault
          :value="data.purchasedDate"
          type="text"
          :readonly="true"
          placeholder="選択してください"
        />
      </div>

      <div class="text-center font-medium text-gray-600 mb-5">
        Googleカレンダーに登録する
      </div>
      <div class="text-center font-medium text-gray-600 mb-5">
        <AddBtnDefault
          label="登録"
          :full-rounded="true"
          :width-full="true"
          @click="addToGoogleCalendar"
        />
      </div>
      <div class="text-center font-medium text-gray-600 mb-5">
        <AddBtnDefault
          color="light"
          label="トップページへ戻る"
          :full-rounded="true"
          :width-full="true"
          to="/"
        />
      </div>
    </template>
  </template-default>
</template>

<style lang="postcss" scoped>
@import '../../assets/index.css';
</style>
