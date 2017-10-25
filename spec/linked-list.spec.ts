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

    describe('at', function () {
        function listAt (x:number):number | null {
            const list = LinkedList.from(1, 2, 3, 4, 5)
            return list.at(x);
        }
        it('returns a the element at a given index', function () {
            expect(listAt(3)).toBe(4)
        })
        it('returns null for indices before the first', function () {
            expect(listAt(-1)).toBe(null)
        })
        it('returns null for indices after the last', function () {
            expect(listAt(10)).toBe(null)
        })
    })

    describe('forEach', function () {
        it('calls a function with each element as an argument', function () {

        })
    })
})