"use strict";

const LL = require("../linkedList/LL.js");

class Queue {
  constructor() {
    // create empty linked list (queue) when initiated
    this.storage = new LL(),
    this.front = null;
  }

  enqueue(val) {
    this.storage.appendAtEnd(val);
    this.front = this.storage.head.value;
  }

  dequeue() {
    this.storage.deleteFirstNode();
    this.front = this.storage.head?.value || null;
  }

  peek() {
    return this.front != null ? this.front : "Queue is empty, front = null";
  }

  isEmpty() {
    return this.storage.linkedListLength ? false : true;
  }
}

module.exports = Queue;
