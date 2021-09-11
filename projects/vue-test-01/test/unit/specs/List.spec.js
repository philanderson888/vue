import Vue from 'vue'
import List from '@/components/List'

describe('List.vue', () => {
  it('displays items from my list', () => {
    const Constructor = Vue.extend(List)
    const ListComponent = new Constructor().$mount()
    expect(ListComponent.$el.textContent).to.contain('red')
  })
  it('adds new item to the list on click', () => {
    console.log('Running the second test')
    const Constructor = Vue.extend(List)
    const ListComponent = new Constructor().$mount()
    ListComponent.newItem = 'pear'
    // find button
    const button = ListComponent.$el.querySelector('button')
    // simulate click
    const clickEvent = new window.Event('click')
    button.dispatchEvent(clickEvent)
    ListComponent._watcher.run()
    // assert new item added to array
    expect(ListComponent.$el.textContent).to.contain('pear')
    expect(ListComponent.listItems).to.contain('pear')
  })
})
