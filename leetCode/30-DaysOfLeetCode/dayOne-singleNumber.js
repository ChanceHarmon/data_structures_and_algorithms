'use strict';

// Single Number
// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,1]
// Output: 1
// Example 2:

// Input: [4,1,2,1,2]
// Output: 4

//Big O time: O(n) by sorting the array first, we only need to have a single loop.
//Big O space: O(1) we don't create any new storage, we just compare values after the sort

const singleNumber = nums => {
  if (nums.length === 1) return nums[0];

  nums = nums.sort((a, b) => a > b ? 1 : a < b ? -1 : 0);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1]) return nums[i];
  }
}

 //singleNumber([8,9,8,9,4,1,2,1,2,3,3,6,5,6,5])