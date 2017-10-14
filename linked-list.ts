export interface ListNode <T> {
    value:T
    next:ListNode<T> | null;
}

export class LinkedList <T> {
    readonly length:number;
    private _head: ListNode<T> | null
    get head (): T  | null{
        let node = this._head;
        if (node !== null) {
            return node.value;
        }
        return node;
    }

    get tail (): T | null{
        let node: ListNode<T> | null = this._head;
        let val = null;
        while (node !== null) {
            val = node.value
            node = node.next;
        }
        return val;
    }

    constructor (head:null)
    constructor (head:T, rest?:LinkedList<T>)
    constructor (head:T, rest?:LinkedList<T>) {
        if (rest) {
            this._head = {
                value: head,
                next: rest._head
            }
            this.length = rest.length + 1
        } else if (head === null) {
            this._head = null
            this.length = 0
        } else {
            this._head = {
                value: head,
                next: null
            }
            this.length = 1
        }
    }

    empty ():boolean {
        return this._head === null;
    }

    forEach (fn:(i:T)=>void): void {

    }

    map<U> (fn:(i:T)=>U):LinkedList<U> {

    }
}
