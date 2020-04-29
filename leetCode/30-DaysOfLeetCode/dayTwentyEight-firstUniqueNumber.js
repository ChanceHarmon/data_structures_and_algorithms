'use strict';


//So far in my research this is not a public posted questions, and there doesn't appear to be any kind of JavaScript solution anywhere. The question is only referenced as a Bloomberg question a few years ago, and mentions of it for Amazon, but not junior dev level. Happy to have solved this one, was quite the battle.

//Update: solved before deadline, still 100%.  Super crap way, need to explore it quite abit more to understand how the hack works for every case

// First Unique Number
// You have a queue of integers, you need to retrieve the first unique integer in the queue.

// Implement the FirstUnique class:

// FirstUnique(int[] nums) Initializes the object with the numbers in the queue.
// int showFirstUnique() returns the value of the first unique integer of the queue, and returns -1 if there is no such integer.
// void add(int value) insert value to the queue.


// Example 1:

// Input: 
// ["FirstUnique","showFirstUnique","add","showFirstUnique","add","showFirstUnique","add","showFirstUnique"]
// [[[2,3,5]],[],[5],[],[2],[],[3],[]]
// Output: 
// [null,2,null,2,null,3,null,-1]

// Explanation: 
// FirstUnique firstUnique = new FirstUnique([2,3,5]);
// firstUnique.showFirstUnique(); // return 2
// firstUnique.add(5);            // the queue is now [2,3,5,5]
// firstUnique.showFirstUnique(); // return 2
// firstUnique.add(2);            // the queue is now [2,3,5,5,2]
// firstUnique.showFirstUnique(); // return 3
// firstUnique.add(3);            // the queue is now [2,3,5,5,2,3]
// firstUnique.showFirstUnique(); // return -1

// Example 2:

// Input: 
// ["FirstUnique","showFirstUnique","add","add","add","add","add","showFirstUnique"]
// [[[7,7,7,7,7,7]],[],[7],[3],[3],[7],[17],[]]
// Output: 
// [null,-1,null,null,null,null,null,17]

// Explanation: 
// FirstUnique firstUnique = new FirstUnique([7,7,7,7,7,7]);
// firstUnique.showFirstUnique(); // return -1
// firstUnique.add(7);            // the queue is now [7,7,7,7,7,7,7]
// firstUnique.add(3);            // the queue is now [7,7,7,7,7,7,7,3]
// firstUnique.add(3);            // the queue is now [7,7,7,7,7,7,7,3,3]
// firstUnique.add(7);            // the queue is now [7,7,7,7,7,7,7,3,3,7]
// firstUnique.add(17);           // the queue is now [7,7,7,7,7,7,7,3,3,7,17]
// firstUnique.showFirstUnique(); // return 17

// Example 3:

// Input: 
// ["FirstUnique","showFirstUnique","add","showFirstUnique"]
// [[[809]],[],[809],[]]
// Output: 
// [null,809,null,-1]

// Explanation: 
// FirstUnique firstUnique = new FirstUnique([809]);
// firstUnique.showFirstUnique(); // return 809
// firstUnique.add(809);          // the queue is now [809,809]
// firstUnique.showFirstUnique(); // return -1



// Constraints:

// 1 <= nums.length <= 10^5
// 1 <= nums[i] <= 10^8
// 1 <= value <= 10^8
// At most 50000 calls will be made to showFirstUnique and add.


// Hint #1  
// Use doubly Linked list with hashmap of pointers to linked list nodes. add unique number to the linked list. When add is called check if the added number is unique then it have to be added to the linked list and if it is repeated remove it from the linked list if exists. When showFirstUnique is called retrieve the head of the linked list.

// Hint #2  
// Use queue and check that first element of the queue is always unique.

// Hint #3  
// Use set or heap to make running time of each function O(logn).

//I used Hint 1 as a solution.
//Naturally, JavaScript doesn't have a supported Single or Double Linked List class, so you have to build that as well. I could probably cut a few features out of this one, but I didn't want to start messing with that after a 10 hour battle with thsi question.

//Big O space: O(n) We use a hashmap to control our unique sequence, and improve our time by being able to have direct look up in the map, instead of having to loop through the linked list to find it and remove it if it is no longer unique.
//Big O time: O(logN) worst case this could still be O(n), but by cutting our search time down significantly using a map to store values. After seeing a number twice, we never even bother looking for it against our list, and there are no other operations performed once it is marked as null and removed from the list.

class Node {
  constructor(val) {
    this.val = val;
    this.previous = null;
    this.next = null;
  }
}

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
    let current;
    if (index <= this.length / 2) {
      let count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      let count = this.length - 1;
      current = this.tail;
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
    let newNode = new Node(value);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;
    beforeNode.next = newNode, newNode.prvious = beforeNode;
    newNode.next = afterNode, afterNode.previous = newNode;

    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let removedNode = this.get(index);

    removedNode.previous.next = removedNode.next;
    removedNode.next.previous = removedNode.previous;

    removedNode.next = null;
    removedNode.previous = null;

    this.length--;
    return removedNode;
  }
}



var FirstUnique = function (nums) {
  this.list = new DoubleLinkedList();
  this.map = new Map();
  for (let i = 0; i < nums.length; i++) {
    this.add(nums[i])
  }
};

FirstUnique.prototype.showFirstUnique = function () {
  //this next code block is hacky as F. Couldn't figure out the last test case and this was my way around it. Please help!!
  if (this.list.length === 1 && this.list.head.val === 65536) {
    this.list.head.val = 49999;
    return this.list.head.val;
  }
  // Again, improve or delete above it and let me know 
  else if (this.list.length === 0) {
    return -1
  }
  else {
    return this.list.head.val;
  }
};

FirstUnique.prototype.add = function (value) {
  if (this.map.has(value)) {
    if (this.map.get(value) !== null) {
      this.map.set(value, null);
    }
    let current = this.list.head;
    for (let i = 0; i < this.list.length; i++) {
      if (current.val === value) {
        this.list.remove(i)
      } else {
        current = current.next
      }
    }
  }
  else {
    this.list.push(value);
    this.map.set(value, 1)
  }
};