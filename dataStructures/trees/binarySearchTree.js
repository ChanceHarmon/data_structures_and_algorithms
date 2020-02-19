'use strict';


class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//Big O Insert and search - O(log n), as long as the tree is balanced. Could be O(n) in the edge cases of one sided trees
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  //For insert, if you needed to track duplicate nodes, you could add a property to the node that was a frequency counter, and then update that if needed. Currently, the solution just returns false if there is a duplicate value. Depends on you use case
  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return false;
        if (val < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        }
        else if (val > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  search(val) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (val < current.value) {
        current = current.left;
      } else if (val > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
  //Breadth First Search, makes use of the nature of a queue to maintain horizontal output
  BFS() {
    let node = this.root;
    let data = [];
    let queue = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  //Depth First Search, Pre, Post, and In order
  //Recursivly
  DFSPreOrder() {
    let data = [];
    let current = this.root;
    const traverse = node => {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
  //Opposite output 
  DFSPostOrder() {
    let data = [];
    let current = this.root;
    const traverse = node => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(current);
    return data;
  }
  //Main difference for this is that the root is included in the center of the output, not at the end of the output like post order
  DFSInOrder() {
    let data = [];
    let current = this.root;
    const traverse = node => {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
}
//Updated to include the different search methods, seach methods are still in their own file


// let tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.left = new Node(5);
// tree.root.right = new Node(15);
