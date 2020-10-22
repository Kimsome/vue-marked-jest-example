import App from '@/app'
import marked from 'marked'

import { mount } from '@vue/test-utils'

jest.useFakeTimers()

describe('computed', () => {
    const wrapper = mount(App)

    it('is component', () => {
        expect(wrapper.is(App)).toBe(true)
    })

    test('compiledMarkdown', () => {
        // expect(wrapper.vm.input).toBe('# hello')

        wrapper.vm.input = '# test'
        let markedVlaue = marked(wrapper.vm.input, { sanitize: true })

        // console.log(markedVlaue, typeof markedVlaue)

        expect(markedVlaue).toMatch(/<h1 id="test">test<\/h1>/)
    })
})

describe('methods', () => {
    test('update input', () => {
        const wrapper = mount(App)
        wrapper.vm.input = '# change'
        jest.advanceTimersByTime(1000)
        expect(marked(wrapper.vm.input, { sanitize: true })).toMatch(/<h1 id="change">change<\/h1>/)
    })
})