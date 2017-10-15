export interface ListNode <T> {
    readonly value:T
    readonly next:ListNode<T> | null;
}

export class LinkedList <T> {
    readonly length:number;
    private _head: ListNode<T> | null
    get head (): T  | null{
        let node = this._head;
        if (node !== null) {
            return node.value
        }
        return node;
    }

    get tail (): T | null {
        let node: ListNode<T> | null = this._head;
        let val = null;
        while (node !== null) {
            val = node.value
            node = node.next;
        }
        return val;
    }

    public static fromArray <T> (items:T[]):LinkedList<T> {
        function recurse (index:number):ListNode<T> | null {
            if (index >= items.length) {
                return null;
            }
            return {
                value: items[index],
                next: recurse(index + 1)
            }
        }
        return new LinkedList(recurse(0), items.length);
    }

    static from<T>(...args:T[]) {
        return LinkedList.fromArray(args);
    }

    private constructor (head:ListNode<T> | null, length:number) {
        this._head = head;
        this.length = length;
    }

    empty ():boolean {
        return this._head === null;
    }

    forEach (fn:(i:T)=>void): void {
        function recurse (node:ListNode<T> | null) {
            if (node) {
                fn(node.value)
                recurse(node.next)
            }
        }
        recurse(this._head)
    }

    map<U> (fn:(i:T)=>U):LinkedList<U> {
        function recurse (node:ListNode<T> | null): ListNode <U> | null {
            if (node === null) {
                return null
            }
            return {
                value: fn(node.value),
                next: recurse(node.next)
            }
        }

        return new LinkedList(recurse(this._head), this.length)
    }
    reduce <U> (fn:(memo:U, val:T)=>U, init:U): U {
        function recurse (memo:U, node:ListNode<T> | null): U {
            if (node === null) {
                return memo;
            }

            return recurse(fn(memo, node.value), node.next)
        }

        return recurse(init, this._head)
    }

    static cons<T>(item: T, rest:LinkedList<T>):LinkedList<T> {
        return new LinkedList({
            value: item,
            next: rest._head
        }, rest.length + 1)
    }

    prepend (item: T):LinkedList<T> {
        return LinkedList.cons(item, this);
    }

    append (item: T):LinkedList<T> {
        function recurse (node:ListNode<T> | null, end:T) {
            if (node === null) {
                return {
                    value: end,
                    next: null
                }
            }
            return {
                value: node.value,
                next:  node.next
            }
        }

        return new LinkedList(recurse(this._head, item), this.length)
    }

    reverse () {
        function recurse (head: ListNode<T> | null, next: ListNode<T> | null): ListNode<T> | null {
            if (head === null) {
                return next
            }

            return recurse(head.next, {
                value: head.value,
                next
            })
        }

        const head = this._head;
        if (head === null) {
            return this;
        }

        return new LinkedList(recurse(head, null), this.length)
    }
}
