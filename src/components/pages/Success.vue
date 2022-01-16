<script setup lang="ts">
import TemplateDefault from '/@/components/templates/TemplateDefault.vue'
import FormLabel from '/@/components/atoms/FormLabel.vue'
import FormInputDefault from '/@/components/atoms/FormInputDefault.vue'
import BtnDefault from '/@/components/atoms/BtnDefault.vue'
import moment from 'moment'

type Props = {
  id: number
  toppingName: string
  purchasedDate: string
  remainingDays: number
}

type Params = {
  [key: string]: string
}

const data: Props = {
  id: 2,
  toppingName: 'データ追加5GB（7日間）',
  purchasedDate: '2021-01-16',
  remainingDays: 2
}

let calendarUrl = 'https://www.google.com/calendar/render?action=TEMPLATE'

let params: Params = { text: '', dates: '' }

const addToGoogleCalendar = () => {
  params.text = 'povoのデータ期限日です'

  params.dates = moment(data.purchasedDate)
    .add(data.remainingDays, 'days')
    .format('YYYYMMDDTHHmmSSZ/YYYYMMDDTHHmmSSZ')

  for (let i in params) {
    calendarUrl += `&${i}=${params[i]}`
  }
  window.location.href = calendarUrl
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
          placeholder="選択されていません。"
        />
      </div>
      <div class="mb-5">
        <FormLabel text="購入日" for="topping" />
        <FormInputDefault
          :value="data.purchasedDate"
          type="text"
          :readonly="true"
          placeholder="選択されていません。"
        />
      </div>

      <div class="text-center font-medium text-gray-600 mb-5">
        Googleカレンダーに登録する
      </div>
      <div class="text-center font-medium text-gray-600 mb-5">
        <BtnDefault
          label="登録"
          :full-rounded="true"
          :width-full="true"
          @click="addToGoogleCalendar"
        />
      </div>
      <div class="text-center font-medium text-gray-600 mb-5">
        <BtnDefault
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
