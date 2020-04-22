'use strict';


// Subarray Sum Equals K
// Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

// Example 1:
// Input:nums = [1,1,1], k = 2
// Output: 2
// Note:
// The length of the array is in range [1, 20,000].
// The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].
//    Hide Hint #1  
// Will Brute force work here? Try to optimize it.
//    Hide Hint #2  
// Can we optimize it by using some extra space?
//    Hide Hint #3  
// What about storing sum frequencies in a hash table? Will it be useful?
//    Hide Hint #4  
// sum(i,j)=sum(0,j)-sum(0,i), where sum(i,j) represents the sum of all the elements from index i to j-1. Can we use this property to optimize it.

//Big O space: O(n) We use a hashmap to store freq counts of sums, comparing as we loop to produce a target count (k).
//Big O time: O(n) We use a single loop, and refer back to our hashmap for comparisons per iteration of the loop.

const subarraySum = (nums, k) => {

  let hashMap = new Map();
  let currentSum = 0;
  let kCount = 0;

  hashMap.set(0, 1);

  for (let i = 0; i < nums.length; i++) {

    currentSum = currentSum + nums[i];

    if (hashMap.has(currentSum - k)) kCount += hashMap.get(currentSum - k);
    if (hashMap.has(currentSum)) hashMap.set(currentSum, hashMap.get(currentSum) + 1);
    else hashMap.set(currentSum, 1);

  }
  return kCount;
};
