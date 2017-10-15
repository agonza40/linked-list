"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var linked_list_1 = require("../linked-list");
describe('linked list', function () {
    describe('from', function () {
        it('constructs an empty list', function () {
            var list = linked_list_1.LinkedList.from(null);
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
});
