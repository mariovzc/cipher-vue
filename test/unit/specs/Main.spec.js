import { mount } from 'avoriaz'
import Main from '@/components/Main'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const mainComponent = mount(Main)
    expect(mainComponent.text()).to.contain('Cifrado')
  })
})
