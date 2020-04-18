'use strict';


// Minimum Path Sum
// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// Example:

// Input:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// Output: 7
// Explanation: Because the path 1→3→1→1→1 minimizes the sum.

//This works perfectly fine using the if else statments that are commented out, I just wanted to make a ridiculous ternary for fun.

//Big O space: O(n) We use a single cell array to keep track as we traverse the grid.
//Big O time: O(n^2) We have two loops, one being nested to be able to traverse the grid by column and row.

const minPathSum = grid => {
  if (!grid) return 0;

  let row = grid.length;
  let column = grid[0].length;
  let result = [0];

  for (let i = 0; i < row; i++) {

    for (let j = 0; j < column; j++) {

      (i === 0) ? result.push(result[j] + grid[i][j]) : (j === 0) ? result[j + 1] += grid[i][j] : result[j + 1] = Math.min(result[j], result[j + 1]) + grid[i][j];

      // if (i === 0) result.push(result[j] + grid[i][j]);
      // else if (j === 0) result[j + 1] += grid[i][j];
      // else result[j + 1] = Math.min(result[j], result[j + 1]) + grid[i][j];

    }
  }
  return result[column];
};