"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var linked_list_1 = require("../linked-list");
describe('linked list', function () {
    describe('from', function () {
        it('constructs an empty list from empty argument list', function () {
            var list = linked_list_1.LinkedList.from();
            expect(list.empty()).toBe(true);
        });
        it('constructs a list with 1 element', function () {
            var list = linked_list_1.LinkedList.from('test');
            expect(list.length).toBe(1);
        });
        it('constructs a list from multiple elements', function () {
            var list = linked_list_1.LinkedList.from('test', 'test2', 'test3', 'test4');
            expect(list.length).toBe(4);
        });
    });
    describe('fromArray', function () {
        it('constructs an empty list', function () {
            var list = linked_list_1.LinkedList.fromArray([]);
            expect(list.empty()).toBe(true);
            expect(list.length).toBe(0);
        });
        it('constructs a list with one element', function () {
            var list = linked_list_1.LinkedList.fromArray([1]);
            expect(list.empty()).toBe(false);
            expect(list.length).toBe(1);
        });
        it('constructs a list with many elements', function () {
            var list = linked_list_1.LinkedList.fromArray([1, 2, 3, 4, 5]);
            expect(list.empty()).toBe(false);
            expect(list.length).toBe(5);
        });
    });
    describe('toArray', function () {
        it('returns an empty array', function () {
            var list = linked_list_1.LinkedList.from();
            expect(list.toArray()).toEqual([]);
        });
        it('constructs a list with many elements', function () {
            var list = linked_list_1.LinkedList.from(1, 2, 3, 4, 5);
            expect(list.toArray()).toEqual([1, 2, 3, 4, 5]);
        });
    });
    describe('at', function () {
        function listAt(x) {
            var list = linked_list_1.LinkedList.from(1, 2, 3, 4, 5);
            return list.at(x);
        }
        it('returns a the element at a given index', function () {
            expect(listAt(3)).toBe(4);
        });
        it('returns null for indices before the first', function () {
            expect(listAt(-1)).toBe(null);
        });
        it('returns null for indices after the last', function () {
            expect(listAt(10)).toBe(null);
        });
    });
    describe('forEach', function () {
        it('calls a function with each element as an argument', function () {
        });
    });
});
