'use strict';

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

//Big O space: O(n) as we are constructing a hash map
//Big O time: O(n), constant lookup to the hash map, and only looping once

const twoSum = (nums, target) => {
  //initializing hash map
  const hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    //initializing result variable
    const result = target - nums[i];
    //checking if the result is in the hash map, then we are returning
    // the two indicies
    if (hashMap.has(nums[i])) {
      return [hashMap.get(nums[i]), i];
    } else {
      //else we are adding it to the hash map
      hashMap.set(result, i);
    }
  }
};