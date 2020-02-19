'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
//Refactored the Original BST Class, took out methods to make it a bit cleaner for the file
//Big O, time is the same for either search, space is bigger for BFS if the tree is wide, DFS could be bigger if the tree is very deep
class BinarySearchTree {
  constructor() {
    this.root = null;
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


// let tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.left = new Node(5);
// tree.root.right = new Node(15);


