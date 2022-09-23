"use strict";

const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
    this.linkedListLength = 0;
  }

  insertAtBeginning(item) {
    const newNode = new Node(item);
    this.head
      ? ((newNode.next = this.head), (this.head = newNode))
      : (this.head = newNode);
    this.linkedListLength += 1;
  }

  appendAtEnd(item) {
    const newNode = new Node(item);
    if (this.head) {
      let node = this.head;
      while (node.next) {
        node = node.next;
      }
      node.next = newNode;
    } else {
      this.head = newNode;
    }
    this.linkedListLength += 1;
  }

  deleteFirstNode() {
    if (!this.linkedListLength) return "No items to delete";
      // delete the first node
      this.head = this.head.next;
    this.linkedListLength--;
  }
}

// const LL = new LinkedList();
// LL.insertAtBeginning(1);
// LL.appendAtEnd(2);
// // LL.insertAtBeginning(11);
// // LL.appendAtEnd(22);
// // LL.deleteByIndex(50);
// // // LL.deleteMiddle();
// // // LL.insertAtIdx(150, 100);
// // // LL.insertAtBeginning(3);
// // // LL.insertAtBeginning(4);
// // // LL.insertAtBeginning(5);
// // // LL.insertAtBeginning(6);

// console.log(LL);

module.exports = LinkedList;
