"use strict";

const Queue = require('./queue')

const queue = new Queue();

console.log("Queue Data Structure Implementation");

console.log(queue.isEmpty()) // expected to be true
queue.enqueue(1)
console.log(queue.isEmpty()) // expected to be false
console.log(queue.peek()) // expected to be 1

queue.enqueue(2)
console.log(queue.peek()) // expected to be 1
console.log(queue.storage.head.next.value) // expected to be 2

queue.dequeue()
console.log(queue.peek()) // expected to be 1

queue.dequeue()
console.log(queue.peek()) // expected to be stack is empty
console.log(queue.isEmpty()) // expected to be true


queue.enqueue(1)
queue.enqueue(2)
console.log("End of Queue Data Structure Implementation");
