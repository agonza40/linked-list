"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList = /** @class */ (function () {
    function LinkedList(head, rest) {
        if (rest) {
            this._head = {
                value: head,
                next: rest._head
            };
            this.length = rest.length + 1;
        }
        else if (head === null) {
            this._head = null;
            this.length = 0;
        }
        else {
            this._head = {
                value: head,
                next: null
            };
            this.length = 1;
        }
    }
    Object.defineProperty(LinkedList.prototype, "head", {
        get: function () {
            var node = this._head;
            if (node !== null) {
                return node.value;
            }
            return node;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinkedList.prototype, "tail", {
        get: function () {
            var node = this._head;
            var val = null;
            while (node !== null) {
                val = node.value;
                node = node.next;
            }
            return val;
        },
        enumerable: true,
        configurable: true
    });
    LinkedList.prototype.empty = function () {
        return this._head === null;
    };
    LinkedList.prototype.forEach = function (fn) {
    };
    LinkedList.prototype.map = function (fn) {
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
