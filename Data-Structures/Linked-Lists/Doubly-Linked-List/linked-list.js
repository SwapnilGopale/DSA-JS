class Node {
    constructor(value) {
        this.prev = null;
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.next = null;
        this.length = 0;
    }

    // push value
    push(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++
            return this
        }
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = this.tail.next
        this.length++
        return this
    }

    // push value
    pop() {
        if (!this.head) return

        const tail = this.tail
        if (this.length == 1) {
            this.head = null
            this.tail = null
            this.length--
            return tail
        }

        const prev = this.tail.prev
        this.tail.prev.next = null
        this.tail = prev
        this.length--

        return tail
    }

    // Add element to start
    shift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            this.length++
            return this
        }
        newNode.next = this.head
        this.head.prev = newNode;
        this.head = newNode;
        this.length++
        return this
    }

    // Add element to the end
    unshift() {
        if (!this.head) return
        const tail = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
            this.length--
            return tail
        }
        this.head.next.prev = null
        this.head = this.head.next
        this.length--
        return this
    }

    // Print all the elements
    print() {
        if (!this.head) return
        let current = this.head;
        while (current != null) {
            console.log({
                value: current.value,
                length: this.length
            })
            current = current.next
        }
    }

    // reverse Linked List
    reverse() {
        if (!this.head) return
        let current = this.tail;
        while (current !== null) {
            let prev = current.prev;
            [current.next, current.prev] = [current.prev, current.next]
            current = prev
        }
        [this.head, this.tail] = [this.tail, this.head];
        return this
    }

    // search value in linked list
    findIndex(value) {
        if (!this.head) return -1
        let index = 0;
        let current = this.head;
        while (current !== null) {
            if (current.value === value)
                return index

            current = current.next;
            index++;
        }
        return -1
    }

}

module.exports = LinkedList