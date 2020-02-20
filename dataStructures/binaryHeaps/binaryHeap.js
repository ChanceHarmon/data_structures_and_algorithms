'use strict';

//Max Binary Heap
//All children are smaller than the parent node, but there is no relation between the siblings as far as order, just smaller than the parent

//Min Binary Heap
//All children are larger than the parent, also no relation between siblings as far as order, just larger than the parent

//Big O Insert, and Removal are O(log n), search is O(n)

//Storing a binary heap in an array
//Formula for children
//[9, 8, 7, 6, 5, 4, 3, 2, 1]
// p c1 c2
//[9, 8, 7, 6, 5, 4, 3, 2, 1]
//    p     c1 c2
//[9, 8, 7, 6, 5, 4, 3, 2, 1]
//       p       c1 c2
//Given n(parent), the left child is stored at 2n+1, and the right child is stored at 2n+2
//Given a n(child), Math.floor((n-1)/2) to find the parent. Floor takes into account that there is no .5 index to reference, so this soles that it be a left or a right child

//First we add the value to the end, then we are going to bubble up or bubble down depending on Max or Min Heap

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.values.length - 1;
    const val = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (val <= parent) break;
      this.values[parentIndex] = val;
      this.values[index] = parent;
      index = parentIndex;
    }
  }
  //extractMax is common terminology for removing the root in a binary heap, sinkDown is crazy logic for the proper reordering all the nodes after the root is removed 
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }
  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const val = this.values[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > val) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightCild > val) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = val;
      index = swap;
    }
  }
}
//let heap = new MaxBinaryHeap;
//MaxBinaryHeap.insert(val);

// I added the Min Binary Heap class. It was not covered, but this file would be incomplete without it

class MinBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.values.length - 1;
    const val = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (val >= parent) break;
      this.values[parentIndex] = val;
      this.values[index] = parent;
      index = parentIndex;
    }
  }
  extractMin() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const val = this.values[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild < val) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightCild < val) ||
          (swap !== null && rightChild < leftChild)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = val;
      index = swap;
    }
  }
}
//let heap = new MinBinaryHeap;
//MinBinaryHeap.insert(val);