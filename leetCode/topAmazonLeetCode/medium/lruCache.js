'use strict';

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


//An LRU cache stores recently used items based upon a given capacity of the cache. When checking a node, it checks if they are in the map. If they are, it removes the node from the linked list and moves it to the head of the linked list, to adjust for most recently used. While doing this, the linked list is growing. So when we need to insert a new node and we are at capacity, then we reove from the tail. Then add the new node to the head. We use a hash map for constant look up for insert and get, and the double linked list for order and fast removal.
//Big O space: O(n) We are using two data structures to store and keep track of values, not nested, so simplifies down to n
//Big O time: O(1) We use the two different structures to maintain constant time of all the operations that the problem needs implemented.


// Doubly linked list node
class Node {
  constructor(key, value) {
    this.key = key;
    this.val = value;
    this.next = null;
    this.prev = null;
  }
}

//This is a basic implementation of a doubly linked list if you have not already seen it. The only additions are adding conditions for capacity and size, as well as creating a hashmap for constant lookup 
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.size = 0;

    // Create an object to be used as a hashmap
    this.hashmap = {};

    // Create a dummy head and tail for the DLList, this is to give the new nodes an actual reference of where to go in the linked list
    this.head = new Node("head", "head");
    this.tail = new Node("tail", "tail");

    // Update the references
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  put(key, value) {
    // If key exists already - delete it, we do this so that when we add it back in, it is at the head of the linked list
    this.delete(key);

    // Create the node and add to the front of the DLList
    let node = new Node(key, value);
    this.putToFront(node);

    // Add to hashmap, so we have constant lookup
    this.hashmap[key] = node;

    // Increment size to account for new node
    this.size++;

    // Remove LRU node if we exceed capacity, we do this so that if we are exceeding the given capacity, we remove the last item from the linked list, 
    if (this.size > this.capacity) {
      this.removeLast();
    }
  }
  //Basic get method, we just have the added operation of moving it to the front of the linked list to update that is was the recent value used
  get(key) {
    const node = this.hashmap[key];

    // If key doesn't exist - return -1
    if (!node) return -1;

    // Update node to most recently used
    this.putToFront(node);

    // Return the value
    return node.val;
  }

  putToFront(node) {
    // If the node isn't new have to remove it from the list
    if (node.next && node.prev) {
      const { next, prev } = node;

      // Link the two surrounding nodes
      next.prev = prev;
      prev.next = next;

      // Update the references in the current node
      node.next = null;
      node.prev = null;
    }

    // Place node into the list                
    const front = this.head.next;

    // Update node's prev references
    node.prev = this.head;
    this.head.next = node;

    // Update node's next references
    node.next = front;
    front.prev = node;
  }

  removeLast() {
    // Deletes the last node from the linked list and from th hashmap
    const lastNode = this.tail.prev;
    this.delete(lastNode.key);
  }

  delete(key) {
    // If key doesnt exist return
    if (!this.hashmap[key]) {
      return;
    }

    // Get the node
    const node = this.hashmap[key];

    // Remove from the DLList
    let { prev, next } = node;
    prev.next = next;
    next.prev = prev;

    // Delete from hashmap
    delete this.hashmap[key];

    // Decrement size to account for deleting a node
    this.size--;

    // Return the value (optional)
    return node.val;
  }
}