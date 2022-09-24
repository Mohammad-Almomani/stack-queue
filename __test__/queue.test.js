"use strict";

const Queue = require("../queue/queue.js");

describe("creating new Queue", () => {
  it("testing create new Queue", () => {
    const newQueue = new Queue();
    expect(newQueue).toBeInstanceOf(Queue);
  });
  it("testing Queue methods", () => {
    const newQueue = new Queue();
    newQueue.enqueue(2);
    expect(newQueue.front).toBe(2);
    newQueue.enqueue(3);
    expect(newQueue.front).toBe(2);
    newQueue.dequeue();
    expect(newQueue.front).toBe(3);
    expect(newQueue.peek()).toBe(3);
    expect(newQueue.isEmpty()).toBe(false);

    newQueue.dequeue();
    expect(newQueue.front).toBeNull();
    expect(newQueue.peek()).toBe("Queue is empty, front = null");
    expect(newQueue.isEmpty()).toBe(true);
  });
});
