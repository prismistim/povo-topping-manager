import { mount } from '@vue/test-utils'
import { render, fireEvent } from '@testing-library/vue'
import BtnDefault from '../BtnDefault.vue'

describe('test increment', () => {
  it('increment test', async () => {
    const wrapper = mount(BtnDefault, {
      props: {
        title: 'test'
      }
    })

    await wrapper.find('button').trigger('click')
    await wrapper.find('button').trigger('click')

    expect(wrapper.find('span').text()).toBe('count: 2')
  })
})

test('use testing-library', async () => {
  const wrapper = render(BtnDefault, {
    props: {
      title: 'test'
    }
  })

  wrapper.getByText('count: 0')

  const button = wrapper.getByText('test')

  await fireEvent.click(button)
  await fireEvent.click(button)

  wrapper.getByText('count: 2')
})
