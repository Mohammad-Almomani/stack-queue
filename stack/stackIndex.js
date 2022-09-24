"use strict";

const Stack = require('./stack')

const stack = new Stack();

console.log(stack.isEmpty()) // expected to be true
stack.stackPush(1)
console.log(stack.isEmpty()) // expected to be false
console.log(stack.peek()) // expected to be 1

stack.stackPush(2)
console.log(stack.peek()) // expected to be 2

stack.stackPop()
console.log(stack.peek()) // expected to be 1

stack.stackPop()
console.log(stack.peek()) // expected to be stack is empty
console.log(stack.isEmpty()) // expected to be true


stack.stackPush(1)
stack.stackPush(2)
console.log(stack)
