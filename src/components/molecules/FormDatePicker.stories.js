import FormDatePicker from './FormDatePicker.vue'

export default {
  title: 'FormDatePicker',
  component: FormDatePicker
}

const Template = (args) => ({
  components: {
    FormDatePicker
  },
  setup() {
    return { args }
  },
  template: '<FormDatePicker v-bind="args" />'
})

export const Primary = Template.bind({})
Primary.args = {
  modelValue: '2021-01-01',
  text: '日付を選択'
}
