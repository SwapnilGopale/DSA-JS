const LinkedList = require('./LinkedList')
const DoublyLinkedList = require('../Doubly-Linked-List/linked-list')

ll = LinkedList.fromValues(10, 20, 30, 40)
console.log(ll.printLinkedList(reversed))
const reversed = ll.reverseList(ll.head)
console.log(ll.printLinkedList(reversed))

// 
dll = new DoublyLinkedList()
dll.shift(4)
dll.shift(5)
dll.shift(6)
dll.shift(8)
// dll.print();
dll.push(2)
dll.push(1)
// dll.print();
// dll.unshift()
// dll.unshift()
console.log("before reverse", dll.length)
dll.print();
console.log("on reverse")
console.log("index", dll.findIndex(1))
dll.reverse()
console.log("after reverse")
dll.print();
// console.log(dll)