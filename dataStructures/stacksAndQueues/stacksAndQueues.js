'use strict';

class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}
//Lifo, last in first out
//Big O Insert and Removal is O(1)
//Need to come back and add peek(), I think I fixed this

//Array from the right
let stack = [];
stack.push('item');
stack.pop();

//Array from the left
let stack = [];
stack.unshift('item');
stack.shift();

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.size++;
    return this.size;
  }
  pop() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
  peek() {
    if (!this.first) return null;
    return this.first.value;
  }
}
//let stack = new Stack();

//Queue uses FIFO, first in first out
//Big O  Insert and Removal O(1)

//Array from right to left
let queue = [];
queue.push('item');
queue.shift();
//Array from left to right
let queue = [];
queue.unshift('item');
queue.pop();

//This is adding to the end of the queue, and removing from the beginning. Would like to come back and add the opposite cycle
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this.size;
  }
  dequeue() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
//let que = new Queue();