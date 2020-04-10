'use strict';


//Precusor, I have already done this problem, both when studying for my first Amazon test, that I failed, as well as in the course I took when I started building this repo.

// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.


// Example:

// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> Returns -3.
// minStack.pop();
// minStack.top();      --> Returns 0.
// minStack.getMin();   --> Returns -2.


//Not much to explain for this, pretty straight forward repeat of class Construction

class MinStack {
  constructor() {
    this.stack = [];
    this.minimumStack = [];
  }

  push(num) {
    if (this.minimumStack.length === 0 || num <= this.getMin()) {
      this.minimumStack.push(num);
    }

    this.stack.push(num);
  }

  pop() {
    const popped = this.stack.pop();
    if (popped === this.getMin()) {
      this.minimumStack.pop();
    }

    return popped;
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minimumStack[this.minimumStack.length - 1];
  }
}