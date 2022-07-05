const LinkedList = require('./LinkedList')

ll = LinkedList.fromValues(10,20,30,40)
console.log(ll.printLinkedList(reversed))
const reversed = ll.reverseList(ll.head)
console.log(ll.printLinkedList(reversed))