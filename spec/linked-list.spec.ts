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

    describe('head', function () {
        it('returns the value of the first element', function () {
            const list = LinkedList.from(1, 2, 3, 4, 5)
            expect(list.head).toBe(1)
        })
    })

    describe('tail', function () {
        it('returns the value of the last element', function () {
            const list = LinkedList.from(1, 2, 3, 4, 5)
            expect(list.tail).toBe(5)
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
            const spy: jasmine.Spy = jasmine.createSpy('eachSpy'),
                list: LinkedList<number> = LinkedList.from(1, 2, 3, 4, 5)
            list.forEach(spy)
            expect(spy).toHaveBeenCalledTimes(list.length)
            list.toArray().forEach((num) => expect(spy).toHaveBeenCalledWith(num))
        })
    })
    describe('map', function () {
        it('produces a new list with the results of a function called on each element', function () {
            const plusOne = (n:number) => n + 1,
                list: LinkedList<number> = LinkedList.from(1, 2, 3, 4, 5)

            expect(list.map(plusOne).toArray()).toEqual([2, 3, 4, 5, 6])
        })
    })
    describe('reduce', function () {
        it('uses a function to reduce the list elements to a single value', function () {
            const list: LinkedList<number> = LinkedList.from(1, 2, 3, 4, 5)
            expect(list.reduce((sum, n)=> sum + n, 0)).toBe(15)
        })
    })
    describe('cons', function () {
        it('provides a static method to join a new head with a list', function () {
            const list: LinkedList<number> = LinkedList.from(1, 2, 3, 4, 5)
            expect(LinkedList.cons(10, list).head).toBe(10)
        })
    })
    describe('reverse', function () {
        it('reverses the order of the elements in the list', function () {
            const list: LinkedList<number> = LinkedList.from(1, 2, 3, 4, 5)
            expect(list.reverse().toArray()).toEqual([5, 4, 3, 2, 1])
        })

        it('returns the same list if it is empty', function () {
            const list = LinkedList.from(),
                reversedList = list.reverse()

            expect(reversedList).toBe(list)
        })

        it('returns the same list if the list has one element', function () {
            const list = LinkedList.from(1),
                reversedList = list.reverse()

            expect(reversedList).toBe(list)
        })
    })
    describe('prepend', function () {
        it('adds to the front of the list', function () {
            const list = LinkedList.from(1)
            expect(list.prepend(0).toArray()).toEqual([0, 1])
        })
    })
    describe('append', function () {
        it('adds to the end of the list', function () {
            const list = LinkedList.from(1)
            expect(list.append(0).toArray()).toEqual([1, 0])
        })
    })
})