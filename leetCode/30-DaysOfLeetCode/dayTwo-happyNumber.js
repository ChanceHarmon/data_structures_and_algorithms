// Happy Number
// Write an algorithm to determine if a number is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Example: 

// Input: 19
// Output: true
// Explanation: 
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

//Big O space: O(n) We use a map to store seen values, helps break an infinite loop.
//Big O time: O(n) We use use two loops, but they are not nested. 
//Also, line 32 is not needed, I just wanted to return a happy number.

const isHappy = n => {
  //Helper Function to string the number, split by character, then using reduce to square and add each character together, and parseInt to convert string to number
  const happySum = (num) => num.toString().split('').reduce((acc, val) => acc += parseInt(val) ** 2, 0);

  let couldBeHappy = happySum(n);
  let map = new Map();

  while (couldBeHappy !== 1) {
    couldBeHappy = happySum(couldBeHappy);
    if (map.has(couldBeHappy)) return false;
    map.set(couldBeHappy);
  }
  let happyNumber = couldBeHappy;
  return happyNumber;
};