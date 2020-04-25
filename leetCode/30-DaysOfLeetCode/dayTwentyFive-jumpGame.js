'use strict';


// Jump Game
// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last index.

// Example 1:

// Input: [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum
//              jump length is 0, which makes it impossible to reach the last index.

//Big O space: O(1) We use a single variable and  return a boolean with no extra storage.
//Big O time: O(n) A single loop compares the greater value of previous versus value of i, with no extra comparisons after the loop runs a single time.
const canJump = nums => {
  let previous = 1;
  for (let i = 0; i < nums.length; i++) {
    previous = Math.max(previous - 1, nums[i]);
    if (i !== nums.length - 1 && previous === 0) return false;
  }
  return true;
};