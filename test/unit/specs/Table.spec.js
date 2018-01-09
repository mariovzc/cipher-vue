import { mount } from 'avoriaz'
import Table from '@/components/Table'

describe('Table.vue', () => {
  it('should render correct contents', () => {
    const tableComponent = mount(Table)
    expect(tableComponent.text()).to.contain('No hay nada para mostrar')
  })
})
