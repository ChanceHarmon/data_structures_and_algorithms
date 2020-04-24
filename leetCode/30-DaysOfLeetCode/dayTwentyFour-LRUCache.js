'use strict';

//I had previously done this problem when I was studying for the first Amazon assesment

// LRU Cache
// Solution
// Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
// put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

// The cache is initialized with a positive capacity.

// Follow up:
// Could you do both operations in O(1) time complexity?

// Example:

// LRUCache cache = new LRUCache( 2 /* capacity */ );

// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // returns 1
// cache.put(3, 3);    // evicts key 2
// cache.get(2);       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3
// cache.get(4);       // returns 4


class Node {
  constructor(key, value) {
    this.key = key;
    this.val = value;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache {
  constructor(capacity) {

    this.capacity = capacity;
    this.size = 0;
    this.hashmap = {};

    this.head = new Node("head", "head");
    this.tail = new Node("tail", "tail");

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  put(key, value) {

    this.delete(key);
    let node = new Node(key, value);
    this.putToFront(node);
    this.hashmap[key] = node;
    this.size++;

    if (this.size > this.capacity) {
      this.removeLast();
    }
  }
  get(key) {
    const node = this.hashmap[key];

    if (!node) return -1;

    this.putToFront(node);

    return node.val;
  }
  putToFront(node) {

    if (node.next && node.prev) {
      const { next, prev } = node;

      next.prev = prev;
      prev.next = next;

      node.next = null;
      node.prev = null;
    }

    const front = this.head.next;

    node.prev = this.head;
    this.head.next = node;

    node.next = front;
    front.prev = node;
  }
  removeLast() {

    const lastNode = this.tail.prev;
    this.delete(lastNode.key);
  }
  delete(key) {

    if (!this.hashmap[key]) {
      return;
    }

    const node = this.hashmap[key];

    let { prev, next } = node;
    prev.next = next;
    next.prev = prev;

    delete this.hashmap[key];

    this.size--;

    return node.val;
  }
}