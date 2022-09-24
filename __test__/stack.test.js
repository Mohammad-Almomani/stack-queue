"use strict";

const Stack = require("../stack/stack.js");

describe("creating new Stack", () => {
  it("testing create new stack", () => {
    const newStack = new Stack();
    expect(newStack).toBeInstanceOf(Stack);
  });
  it("testing stack methods", () => {
    const newStack = new Stack();
    newStack.stackPush(2);
    expect(newStack.top).toBe(2);
    newStack.stackPush(3);
    newStack.stackPop();
    expect(newStack.top).toBe(2);
    expect(newStack.peek()).toBe(2);
    expect(newStack.isEmpty()).toBe(false);

    newStack.stackPop();
    expect(newStack.top).toBeNull();
    expect(newStack.peek()).toBe("Stack is empty, top = null");
    expect(newStack.isEmpty()).toBe(true);
  });
});
