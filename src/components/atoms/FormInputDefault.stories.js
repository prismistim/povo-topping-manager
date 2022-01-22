import FormInputDefault from './FormInputDefault.vue'

export default {
  title: 'FormInputDefault',
  component: FormInputDefault,
  argTypes: {
    type: {
      control: {
        type: 'select'
      },
      options: ['text', 'number', 'email', 'password']
    }
  }
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
  modelValue: '',
  type: 'text',
  placeholder: ''
}
