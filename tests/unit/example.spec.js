import { QPage, QToolbar, QInput, QCard, QCardMedia, QCardTitle } from 'quasar';
import { shallowMount } from '@vue/test-utils'
import LogIn from '@/components/LogIn.vue'

describe('LogIn.vue', () => {
  it('render login screen', () => {
    const msg = 'User ID'
    const wrapper = shallowMount(LogIn)
    expect(wrapper.text()).toMatch(msg)
  })
})
