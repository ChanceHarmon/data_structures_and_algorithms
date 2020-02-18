'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.previous = null;
    this.next = null;
  }
}
//Big O
//Insert, remove = O(1)
//Search, get = O(n)  search is a little faster than Single linked list because it can start from both sides, but still breaks down to O(n)

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return null;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this, tail = null;
    } else {
      this.tail = poppedNode.previous;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    if (!this.head) return null;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.previous = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift() {
    let newNode = new Node(val);
    if (!this.head === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return false;
    //First pointer from the left
    if (index <= this.length / 2) {
      let count = 0;
      let current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      //Next is the right pointer from the end
      let count = this.length - 1;
      let current = this.tail;
      while (count !== index) {
        current = current.previous;
        count--;
      }
    }
    return current;
  }
  set(index, value) {
    let result = this.get(index);
    if (result) {
      result.val = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);
    //Creating a reference to the new Node, the previous node, and the the new nodes.next node.
    let newNode = new Node(value);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;
    //Connecting The previous node and the new node
    beforeNode.next = newNode, newNode.prvious = beforeNode;
    //Connecting the new node with the 'next node'
    newNode.next = afterNode, afterNode.previous = newNode;

    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    //This can be written the same way as insert, but this is a different way to handle the new previous and next connections
    let removedNode = this.get(index);

    removedNode.previous.next = removedNode.next;
    removedNode.next.previous = removedNode.previous;

    removedNode.next = null;
    removedNode.previous = null;

    this.length--;
    return removedNode;
  }

  //Had to research reverse. It was an exercise in the class but never actually covered in a solution. These two are the ones that make the most sense to me based on how we have been building methods so far.
  reverse() {
    if (!this.head) return false;

    let current = this.head;
    this.tail = current;

    while (current) {
      let previousNode = current.previous;
      current.previous = current.next;
      current.next = previousNode;

      if (current.previous) {
        current = current.previous;
      } else {
        this.head = current;
        break;
      }
    }
    return this;
  }

  //Another reverse Solution

  // reverse(){
  //   let currNode = this.head;
  //   let prevNode = null;
  //   let nextNode = null;

  //   while (currNode) {
  //     // Store next node.
  //     nextNode = currNode.next;
  //     prevNode = currNode.previous;

  //     // Change next node of the current node so it would link to previous node.
  //     currNode.next = prevNode;
  //     currNode.previous = nextNode;

  //     // Move prevNode and currNode nodes one step forward.
  //     prevNode = currNode;
  //     currNode = nextNode;
  //   }

  //   // Reset head and tail.
  //   this.tail = this.head;
  //   this.head = prevNode;

  //   return this;
  // }

  //Helper method to be able to see if the reverse method is working, not required for the class itself
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val)
      current = current.next
    }
    console.log(arr);
  }
}

// let list = new DoubleLinkedList();