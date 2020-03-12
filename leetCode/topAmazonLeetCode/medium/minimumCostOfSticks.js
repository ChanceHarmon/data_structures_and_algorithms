'use strict';

//I know I can import my min heap class, but since I am transfering this code to the leet code IDE, I have to have the whole class in the code block

// You have some sticks with positive integer lengths.

// You can connect any two sticks of lengths X and Y into one stick by paying a cost of X + Y.  You perform this action until there is one stick remaining.

// Return the minimum cost of connecting all the given sticks into one stick in this way.



// Example 1:

// Input: sticks = [2,4,3]
// Output: 14
// Example 2:

// Input: sticks = [1,8,3,5]
// Output: 30


// Constraints:

// 1 <= sticks.length <= 10^4
// 1 <= sticks[i] <= 10^4

// Approach is to take our sticks array, and convert it to a minimum binary heap. We do this to take advantage of the nature of how the heap works. This way we can be sure that we are adding the two smallest numbers each time we perform an operation. This way we don't have to iterate and keep track of the two lowest values each time we add two sticks together.
//Once we have our heap, we add together the first two that are removed, update the cost, and then add that value(cost) back into our min heap.
//We do this while min heap is greater than 1. When the heap is down to 1 we know we have added all possible sticks, and the remainder is our cost.


//Big O space: O(n) Our heap is dictated by the length of our sticks array, and we are returning the value of the variable cost, not another structure
//Big O time: O(n) We have a single while loop, and while this could be a gray area, I do not believe using our predefined heap methods counts as nesting loops. Please correct me if you see an error in this logic!


const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

class MinHeap {
  constructor(items) {
    this.array = [];
    for (let item of items) {
      this.push(item);
    }
  }
  push(item) {
    const { array } = this;
    array.push(item);
    let len = array.length;
    let child = len - 1;
    let parent = child % 2 === 0 ? (child - 2) / 2 : (child - 1) / 2;

    while (parent >= 0 && array[child] < array[parent]) {
      swap(array, child, parent);
      child = parent;
      parent = child % 2 === 0 ? (child - 2) / 2 : (child - 1) / 2;
    }
  }
  pop() {
    const { array } = this
    if (!array.length) return null;
    const result = array[0];
    array[0] = array[array.length - 1];
    array.pop();
    if (array.length) this.heapify(0);
    return result;
  }
  heapify(parent) {
    const { array } = this;
    if (!array.length) return null;
    let left = parent * 2 + 1;
    let right = parent * 2 + 2;

    if (array[left] && array[right]) {
      if (array[parent] > array[left] && array[left] < array[right]) {
        swap(array, left, parent);
        this.heapify(left);
        return;
      }
      if (array[parent] > array[right] && array[right] < array[left]) {
        swap(array, right, parent);
        this.heapify(right);
        return;
      }
    }
    if (array[right] && array[parent] > array[right]) {
      swap(array, right, parent);
      this.heapify(right);
      return;
    }
    if (array[left] && array[parent] > array[left]) {
      swap(array, left, parent);
      this.heapify(left);
      return;
    }
  }
  size() {
    return this.array.length;
  }
  peek() {
    return this.array[0];
  }
}

const connectSticks = sticks => {
  if (sticks.length < 2) return 0;

  let minHeap = new MinHeap(sticks);
  let cost = 0;
  while (minHeap.size() > 1) {
    const minStick1 = minHeap.pop();
    const minStick2 = minHeap.pop();
    minHeap.push(minStick1 + minStick2);
    cost += minStick1 + minStick2;
  }

  return cost;
};

// console.log(connectSticks([2, 4, 3])) // 14
// console.log(connectSticks([2, 4, 3, 8])) // 31