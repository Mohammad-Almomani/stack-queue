"use strict";

const LinkedList = require("../linkedList/LL.js");

describe("Verify creating linked list", () => {
  it("Test creating new linked list", () => {
    const LL = new LinkedList();
    expect(LL).toBeInstanceOf(LinkedList);
    expect(LL).toBeDefined();
    expect(LL.head).toBeNull();
  });
});

describe("Verify insert node at the beginning", () => {
  it("Test inserting node at the beginning", () => {
    const LL = new LinkedList();
    LL.insertAtBeginning(1);
    expect(LL.head.value).toBe(1);
    expect(LL.head.next).toBeNull();
    LL.insertAtBeginning(2);
    expect(LL.head.value).toBe(2);
    expect(LL.head.next.value).toBe(1);
    expect(LL.head.next.next).toBeNull();
  });
});

describe("Verify append node at the end", () => {
  it("Test appending node at the end", () => {
    const LL = new LinkedList();
    LL.insertAtBeginning(2);
    LL.insertAtBeginning(1);
    LL.appendAtEnd(3);
    expect(LL.head.value).toEqual(1);
    expect(LL.head.next.value).toEqual(2);
    expect(LL.head.next.next.value).toEqual(3);
    expect(LL.head.next.next.next).toBeNull();
    expect(LL.linkedListLength).toEqual(3);
  });
  it("Test appending node to empty linked list", () => {
    const LL = new LinkedList();

    LL.appendAtEnd(3);
    expect(LL.head.value).toEqual(3);
    expect(LL.head.next).toBeNull();
  });
});

describe("delete the first node", () => {
  it("Test deleting middle node for one element linked list", () => {
    const LL = new LinkedList();
    LL.insertAtBeginning(1);
    expect(LL.head.value).toEqual(1);
    LL.deleteFirstNode();
    expect(LL.head).toBeNull();
    expect(LL.deleteFirstNode()).toBe("No items to delete");
  });
});
