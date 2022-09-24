"use strict";

const LL = require("../linkedList/LL.js");

class Stack {
  constructor() {
    // create empty linked list (stack) when initiated
    this.storage = new LL(),
    this.top = null;
  }

  stackPush(val) {
    this.storage.insertAtBeginning(val);
    this.top = val;
  }

  stackPop() {
    this.storage.deleteFirstNode();
    this.top = this.storage.head?.value || null;
  }

  peek() {
    return this.top != null ? this.top : "Stack is empty, top = null";
  }

  isEmpty() {
    return this.storage.linkedListLength ? false : true;
  }
}

module.exports = Stack;
