class Node {
  // Doubly linked list node
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

    // Create an object to be used as a hashmap
    this.hashmap = {};

    // Create a dummy head and tail for the DLList
    this.head = new Node("head", "head");
    this.tail = new Node("tail", "tail");

    // Update the references
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  put(key, value) {
    // If key exists already - delete it
    this.delete(key);

    // Create the node and add to the front of the DLList
    let node = new Node(key, value);
    this.putToFront(node);

    // Add to hashmap
    this.hashmap[key] = node;

    // Increment size to account for new node
    this.size++;

    // Remove LRU node if we exceed capacity
    if (this.size > this.capacity) {
      this.removeLast();
    }
  }

  get(key) {
    const node = this.hashmap[key];

    // If key doesn't exist - return -1
    if (node == null) return -1;

    // Update node to most recently used
    this.putToFront(node);

    // Return the value
    return node.val;
  }

  putToFront(node) {
    // If the node isn't new have to remove it from the list
    if (node.next != null && node.prev != null) {
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
    // Deletes the last node from everywhere
    const lastNode = this.tail.prev;
    this.delete(lastNode.key);
  }

  delete(key) {
    // If key doesnt exist return
    if (this.hashmap[key] == null) {
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

    // Return the value (probably not needed)
    return node.val;
  }
}