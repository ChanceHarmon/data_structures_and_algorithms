'use strict';

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Follow up:

// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

//Big O space: O(1) We don't create any extra storage, we just keep a variable as a count to return at the end, comparing in place.
//Big O time: O(n) We use a single loop, even if we use divide and conquer, that is a ton of extra work for a pretty simple solution. I may come back to that later. This is clean and basic, no magic.

const maxSubArray = nums => {
  let maximum = -Infinity;
  let currentMax = 0;

  for (let i = 0; i < nums.length; i++) {
    currentMax = Math.max(nums[i], currentMax + nums[i]);
    maximum = Math.max(currentMax, maximum);
  }
  return maximum;
};
