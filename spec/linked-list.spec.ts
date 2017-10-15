import {LinkedList} from '../linked-list'

describe('linked list', function () {
    describe('from', function () {
        it('constructs an empty list from empty argument list', function () {
            let list = LinkedList.from()
            expect(list.empty()).toBe(true)
        })
        it('constructs a list with 1 element', function () {
            let list = LinkedList.from('test')
            expect(list.length).toBe(1)
        })
        it('constructs a list from multiple elements', function () {
            let list = LinkedList.from('test', 'test2', 'test3', 'test4')
            expect(list.length).toBe(4)
        })
    })

    describe('fromArray', function () {
        it('constructs an empty list', function () {
            const list = LinkedList.fromArray([]);
            expect(list.empty()).toBe(true)
            expect(list.length).toBe(0)
        })

        it('constructs a list with one element', function () {
            const list = LinkedList.fromArray([1])
            expect(list.empty()).toBe(false)
            expect(list.length).toBe(1)
        })

        it('constructs a list with many elements', function () {
            const list = LinkedList.fromArray([1, 2, 3, 4, 5])
            expect(list.empty()).toBe(false)
            expect(list.length).toBe(5)
        })
    })

    describe('toArray', function () {
        it('returns an empty array', function () {
            const list = LinkedList.from();
            expect(list.toArray()).toEqual([])
        })

        it('constructs a list with many elements', function () {
            const list = LinkedList.from(1, 2, 3, 4, 5)
            expect(list.toArray()).toEqual([1, 2, 3, 4, 5])
        })
    })
})