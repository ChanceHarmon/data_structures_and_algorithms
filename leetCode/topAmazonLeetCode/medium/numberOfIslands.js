'use strict';

// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input:
// 11110
// 11010
// 11000
// 00000

// Output: 1
// Example 2:

// Input:
// 11000
// 11000
// 00100
// 00011

// Output: 3

//Big O space: O(1) We are not creating any new structure to return, just a count, constant space
//Big O time: O(n^2) Nested loops gives us quadradic time 
const numIslands = grid => {
  let count = 0;

  //Setting up our two loops to traverse the matrix
  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[0].length; column++) {
      //We check if the value at our current cell is a one
      //If so, we add count and call our depth first function to look
      //At all avaiable spaces around us
      //We still add to the count even if it is a solo cell, because that still counts as an island 
      if (grid[row][column] === '1') {
        count++;
        depthFirst(grid, row, column);
      }
    }
  }

  return count;
};

//Helper Function, we pass it our matrix, the current row, and current column
const depthFirst = (grid, row, column) => {
  //Check for edge cases
  if (row < 0 || row >= grid.length || column < 0 || column >= grid[0].length) return;
  //Setting the current cell to 0 basically marks the cell as 'seen' during the search
  if (grid[row][column] === '1') {
    grid[row][column] = '0';

    depthFirst(grid, row + 1, column);  //down
    depthFirst(grid, row - 1, column);  //up
    depthFirst(grid, row, column + 1);  //right
    depthFirst(grid, row, column - 1);  //left
  }
};