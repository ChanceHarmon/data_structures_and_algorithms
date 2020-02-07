'use strict';

//Linear serach  Time: O(n)
// In a sorted array, return the index where val is found. If not found return -1;
const search = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

//Binary Search  Time: O(LogN)
const search = (arr, val) => {
  let min = 0;
  let max = array.length - 1;

  while (min < max) {
    let middle = Math.floor((min + max) / 2);
    let current = arr[middle];
    if (current < val) {
      min = middle + 1;
    } else if (current > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1
}