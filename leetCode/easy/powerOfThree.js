'use strict';

// Power of Three

// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3x.

// Example 1:

// Input: n = 27
// Output: true
// Example 2:

// Input: n = 0
// Output: false
// Example 3:

// Input: n = 9
// Output: true
// Example 4:

// Input: n = 45
// Output: false


// Constraints:

// -231 <= n <= 231 - 1


// Follow up: Could you do it without using any loop / recursion?

// 21038 / 21038 test cases passed.

//Big O time: O(1) No loops, however, the bigger the number gets, the harder the computation is in the first place.
//Big O space: O(1) The return value is a boolean, and there is no storage or variable creation in the algorithm.

/**
 * @param {number} n
 * @return {boolean}
 */


const isPowerOfThree = n => Math.log10(n) / Math.log10(3) % 1 === 0;
