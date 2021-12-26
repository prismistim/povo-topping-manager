import FormInputDefault from './FormInputDefault.vue'

export default {
  title: 'FormInputDefault',
  component: FormInputDefault
}

const Template = (args) => ({
  components: {
    FormInputDefault
  },
  setup() {
    return { args }
  },
  template: '<FormInputDefault v-bind="args" />'
})

export const Primary = Template.bind({})
Primary.args = {
  value: '',
  type: 'text',
  placeholder: ''
}
