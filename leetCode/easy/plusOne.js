'use strict';

// Plus One

// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.



// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Example 3:

// Input: digits = [0]
// Output: [1]


// Constraints:

// 1 <= digits.length <= 100
// 0 <= digits[i] <= 9

// Big O time: O(n) worst case is that every digit is a 9, in which case the loop has to run the entire array. However, starting at the end with the if condition greatly improves this speed in best case.
//Big O space: O(1) result returned in place, no extra storage or variables. YES!!!


const plusOne = digits => {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++;
    if (digits[i] > 9) {
      digits[i] = 0;
    }
    else {
      return digits;
    }
  }
  digits.unshift(1);
  return digits;
};