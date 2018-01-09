import { mount } from 'avoriaz'
import Main from '@/components/Main'

describe('Main.vue', () => {
  it('should render correct contents', () => {
    const mainComponent = mount(Main)
    expect(mainComponent.text()).to.contain('Cifrado')
  })
  it('add a new item', () => {
    const mainComponent = mount(Main)
    mainComponent.setData({
      word: 'ABCD',
      code: 2,
      type: 'Cifrar'
    })

    const button = mainComponent.find('#btn')[0]
    button.trigger('click')

    expect(mainComponent.data().items[0].new).to.contain('CDEF')
  })
})
