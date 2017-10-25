export interface ListNode <T> {
    readonly value:T
    readonly next:MaybeNode<T>;
}

type MaybeNode <T> = ListNode<T> | null;

export class LinkedList <T> {
    readonly length:number;
    private _head: MaybeNode<T>
    get head (): T  | null{
        let node = this._head;
        if (node !== null) {
            return node.value
        }
        return node;
    }

    get tail (): T | null {
        let node: MaybeNode<T> = this._head;
        let val = null;
        while (node !== null) {
            val = node.value
            node = node.next;
        }
        return val;
    }

    public static toArray <T>(list:LinkedList<T>): T[] {
        function recurse (node:MaybeNode<T>, arr:T[]):T[] {
            if (node === null) {
                return arr
            }
            arr.push(node.value)
            return recurse(node.next, arr)
        }
        return recurse(list._head, []);
    }
    public toArray (): T[] {
        return LinkedList.toArray(this)
    }

    public static fromArray <T> (items:T[]):LinkedList<T> {
        function recurse (index:number):MaybeNode<T> {
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

    private constructor (head:MaybeNode<T>, length:number) {
        this._head = head;
        this.length = length;
    }

    empty ():boolean {
        return this._head === null;
    }

    at(index: number): T | null {
        if (index >= this.length || index < 0 || this._head === null) {
            return null
        }
        function recurse (node:ListNode<T>, index:number, desired:number): T {
            if (index === desired) {
                return node.value
            }

            return recurse(node.next as ListNode<T>, index + 1, desired)
        }

        return recurse (this._head, 0, index)
    }

    forEach (fn:(i:T)=>void): void {
        function recurse (node:MaybeNode<T>) {
            if (node) {
                fn(node.value)
                recurse(node.next)
            }
        }
        recurse(this._head)
    }

    map<U> (fn:(i:T)=>U):LinkedList<U> {
        function recurse (node:MaybeNode<T>):MaybeNode<U> {
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
        function recurse (memo:U, node:MaybeNode<T>): U {
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
        function recurse (node:MaybeNode<T>, end:T):ListNode<T> {
            if (node === null) {
                return {
                    value: end,
                    next: null
                }
            }
            return {
                value: node.value,
                next:  recurse(node.next, end)
            }
        }

        return new LinkedList(recurse(this._head, item), this.length)
    }

    reverse () {
        function recurse (head: MaybeNode<T>, next: MaybeNode<T>):MaybeNode<T> {
            if (head === null) {
                return next
            }

            return recurse(head.next, {
                value: head.value,
                next
            })
        }

        const head = this._head;
        if (head === null || this.length === 1) {
            return this;
        }

        return new LinkedList(recurse(head, null), this.length)
    }
}
