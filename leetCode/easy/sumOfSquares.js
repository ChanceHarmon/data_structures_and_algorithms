'use strict';

//Sum of Square Numbers

// Given a non-negative integer c, your task is to decide whether there're two integers a and b such that a2 + b2 = c.

// Example 1:

// Input: 5
// Output: True
// Explanation: 1 * 1 + 2 * 2 = 5


// Example 2:

// Input: 3
// Output: False

//Big O space: O(1) No real extra storage,a couple of variables, but the return value is a boolean.
//Big O time: O(n) Just a single loop, with a base case and the logic after. Nice and clean.

const judgeSquareSum = c => {
  let a = 0
  let b = Math.floor(Math.sqrt(c))
  let result = false

  while (a <= b) {

    if (c === Math.pow(a, 2) + Math.pow(b, 2)) {
      result = true
      break
    }

    if (c > Math.pow(a, 2) + Math.pow(b, 2)) {
      a++
    } else if (c < Math.pow(a, 2) + Math.pow(b, 2)) {
      b--
    }
  }

  return result;
};
