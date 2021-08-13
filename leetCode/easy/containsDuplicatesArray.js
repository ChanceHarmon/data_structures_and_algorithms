'use strict';

// Contains Duplicate

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

//Big O time: O(n) One single loop, worst case is that there are no duplicates => n time. The earlier it finds a duplicate the sooner the loop stops so time could improve depending on the nums arr provided.
//Big O space: O(n)  Using an object as storage to quick look up if an int has already been seen, the object could be the same size as the nums arr if there are no duplicates. Size will decrease the same way time will if a duplicate is found early in the search.


const containsDuplicate = (nums) => {
    if (nums.length < 2) return false;
    const obj = {};
    for (let i = 0; i < nums.length; i++) {
        let current = nums[i]
        if (obj[current] === 1) return true
        else obj[current] = 1
    }
    return false;
};