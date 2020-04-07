'use strict';

//As of 4/7/2020 this challenge is not posted to leetcode. It is specific to the 30 day challenge. I will try to check after April to see if it becomes public.

// Counting Elements
// Given an integer array arr, count element x such that x + 1 is also in arr.

// If there're duplicates in arr, count them seperately.



// Example 1:

// Input: arr = [1,2,3]
// Output: 2
// Explanation: 1 and 2 are counted cause 2 and 3 are in arr.
// Example 2:

// Input: arr = [1,1,3,3,5,5,7,7]
// Output: 0
// Explanation: No numbers are counted, cause there's no 2, 4, 6, or 8 in arr.
// Example 3:

// Input: arr = [1,3,2,3,5,0]
// Output: 3
// Explanation: 0, 1 and 2 are counted cause 1, 2 and 3 are in arr.
// Example 4:

// Input: arr = [1,1,2,2]
// Output: 2
// Explanation: Two 1s are counted cause 2 is in arr.


// Constraints:

// 1 <= arr.length <= 1000
// 0 <= arr[i] <= 1000

//Big O space: O(n) We use a hashmap to store the inital array values. Then check the array again to see if the map contains i + 1.
//Big O time: O(n) We use two seperate loops, but don't nest them to avoid quadratic time. If we needed to keep Space at O(1) we would need to restrucure the loop sequence.



const countElements = arr => {
  if (arr.length < 2) return 0;
  const hashMap = new Map();
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    hashMap.set(arr[i], 1);
  }
  for (let i = 0; i < arr.length; i++) {
    if (hashMap.has(arr[i] + 1)) {
      count++;
    }
  }
  return count;
};

console.log(countElements([1, 2, 3]))