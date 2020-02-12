'use strict';
//Return the index if a val is in an array
// Time: O(n)
const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}