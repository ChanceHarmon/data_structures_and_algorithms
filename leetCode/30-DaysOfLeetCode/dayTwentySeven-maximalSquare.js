'use strict';

// Maximal Square
// Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

// Example:

// Input: 

// 1 0 1 0 0
// 1 0 1 1 1
// 1 1 1 1 1
// 1 0 0 1 0

// Output: 4

//Big O space: O(n) We use memoization and the callstack for memory, but we reduce the callstack using memo, so I believe it breaks down to linear time.
//Big O time: O(n^2) Two sets of nested loops, one to build memo structure, and one to check grid vs memo data.

//I learned a lot researching this problem about memoization. I had rarely heard it, and never had it explained. Very cool technique, and it was a good refresher of recursion. I don't technically use a recursive call for this solution, but I could if I put the first nested for loop into it's own function. Just depends on taste of code style. 

const maximalSquare = matrix => {
  if (matrix.length < 1) return 0;
  let memo = [];
  let max = 0;
  for (let i = 0; i <= matrix.length; i++) {
    memo.push([]);
    for (let j = 0; j <= matrix[0].length; j++) {
      memo[i][j] = 0;
    }
  }
  for (let i = 1; i <= matrix.length; i++) {
    for (let j = 1; j <= matrix[0].length; j++) {
      if (matrix[i - 1][j - 1] !== "0") {
        memo[i][j] += Math.min(memo[i - 1][j], memo[i][j - 1], memo[i - 1][j - 1]) + 1;
      }

      if (max < memo[i][j]) {
        max = memo[i][j];
      }
    }
  }
  return max * max;
};