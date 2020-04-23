'use strict';


// Bitwise AND of Numbers Range
// Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.

// Example 1:

// Input: [5,7]
// Output: 4

// Example 2:

// Input: [0,1]
// Output: 0

//Big O space: O(1) We use a single variable to track how many lefts shifts to perform after the while loop finishes.
//Big O time: O(n) we use a single while loop, performing right shifts until m = n.

const rangeBitwiseAnd = (m, n) => {

  let count = 0;

  while (m < n) {
    m = m >> 1;
    n = n >> 1;
    count += 1;
  }

  return m << count;

};