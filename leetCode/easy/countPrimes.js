'use strict';

// Count Primes
// Count the number of prime numbers less than a non-negative number, n.

// Example 1:

// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
// Example 2:

// Input: n = 0
// Output: 0
// Example 3:

// Input: n = 1
// Output: 0


// Constraints:

// 0 <= n <= 5 * 106

//Big O time: O(nlogn) While initially the nested loop should spell n^2, the inner loop starts to skip the pointer ahead at an exponetial speed, so I think this is the def of nlogn as far as I understand it?
//Big O space: O(n) We have a variable for count itself, but really space comes from checking the storage array for true false values that we build as we go.


const countPrimes = n => {
  let count = 0;
  let arr = [];
  for (let i = 2; i < n; i++) {
    if (!arr[i]) count++;
    for (let j = i + i; j <= n; j += i) {
      arr[j] = true;
    }
  }
  return count;
};