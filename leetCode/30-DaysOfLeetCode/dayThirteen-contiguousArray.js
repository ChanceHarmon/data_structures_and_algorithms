'use strict';

// Contiguous Array
// Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

// Example 1:
// Input: [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
// Example 2:
// Input: [0,1,0]
// Output: 2
// Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
// Note: The length of the given binary array will not exceed 50,000.


//Big O space: O(n) We use a hash map to store count and index of count.
//Big O time: O(n) One single loop to update count and check hashmap for values to see if it is a contiguous run.

const findMaxLength = nums => {

  let result = 0;
  let hashMap = new Map();
  let count = 0;

  for (let i = 0; i < nums.length; i++) {

    if (nums[i] === 0) {
      count -= 1
    } else {
      count += 1
    }

    if (count === 0)
      result = i + 1;
    if (hashMap.has(count)) {
      result = Math.max(result, i - hashMap.get(count))
    } else {
      hashMap.set(count, i);
    }

  }

  return result;

};