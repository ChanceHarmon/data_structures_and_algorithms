'use strict';


// Search in Rotated Sorted Array
// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

// Your algorithm's runtime complexity must be in the order of O(log n).

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1



//Big O space: O(n) I think space is pretty minimal, but we use 3 variables to search and store values. While this is very fast, it still ocunts as storage.
//Big O time: O(log n) While we do use a loop, we cut our search in half each time, this drops us from linear time to log n. 



const search = (nums, target) => {

  if (nums === null || nums.length === 0) return -1;

  let start = 0
  let end = nums.length - 1

  while (start < end) {
    let mid = Math.floor((start + end) / 2)

    if (nums[mid] === target) return mid;

    if (nums[mid] > nums[end]) {

      if (target < nums[mid] && target >= nums[start]) end = mid - 1;
      else start = mid + 1;

    } else {

      if (target > nums[mid] && target <= nums[end]) start = mid + 1;
      else end = mid - 1;

    }
  }
  return nums[start] === target ? start : -1;
};
