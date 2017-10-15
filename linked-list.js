"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList = /** @class */ (function () {
    function LinkedList(head, length) {
        this._head = head;
        this.length = length;
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
    LinkedList.fromArray = function (items) {
        function recurse(index) {
            if (index >= items.length) {
                return null;
            }
            return {
                value: items[index],
                next: recurse(index + 1)
            };
        }
        return new LinkedList(recurse(0), items.length);
    };
    LinkedList.from = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return LinkedList.fromArray(args);
    };
    LinkedList.prototype.empty = function () {
        return this._head === null;
    };
    LinkedList.prototype.forEach = function (fn) {
        function recurse(node) {
            if (node) {
                fn(node.value);
                recurse(node.next);
            }
        }
        recurse(this._head);
    };
    LinkedList.prototype.map = function (fn) {
        function recurse(node) {
            if (node === null) {
                return null;
            }
            return {
                value: fn(node.value),
                next: recurse(node.next)
            };
        }
        return new LinkedList(recurse(this._head), this.length);
    };
    LinkedList.prototype.reduce = function (fn, init) {
        function recurse(memo, node) {
            if (node === null) {
                return memo;
            }
            return recurse(fn(memo, node.value), node.next);
        }
        return recurse(init, this._head);
    };
    LinkedList.cons = function (item, rest) {
        return new LinkedList({
            value: item,
            next: rest._head
        }, rest.length + 1);
    };
    LinkedList.prototype.prepend = function (item) {
        return LinkedList.cons(item, this);
    };
    LinkedList.prototype.append = function (item) {
        function recurse(node, end) {
            if (node === null) {
                return {
                    value: end,
                    next: null
                };
            }
            return {
                value: node.value,
                next: node.next
            };
        }
        return new LinkedList(recurse(this._head, item), this.length);
    };
    LinkedList.prototype.reverse = function () {
        function recurse(head, next) {
            if (head === null) {
                return next;
            }
            return recurse(head.next, {
                value: head.value,
                next: next
            });
        }
        var head = this._head;
        if (head === null) {
            return this;
        }
        return new LinkedList(recurse(head, null), this.length);
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
