import BtnDefault from './BtnDefault.vue'

export default {
  title: 'ButtonDefault',
  component: BtnDefault
}

const Template = (args) => ({
  components: {
    BtnDefault
  },
  setup() {
    return { args }
  },
  template: '<BtnDefault v-bind="args" />'
})

export const Primary = Template.bind({})
Primary.args = {
  title: 'hoge'
}
