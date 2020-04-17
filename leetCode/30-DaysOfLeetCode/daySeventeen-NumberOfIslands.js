'use strict';

// I have solved this previously, just recording it to keep this directory complete for the 30 days.

//Actually, I decided to solve it Breadth First this time, just for something different to do. It will be below the first code set.

// Number of Islands
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

//DFS

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


//BFS


const numIslands = grid => {
  if (!grid || grid === null || grid.length === 0 || grid[0].length === 0) return 0;

  let islands = 0;
  let row = grid.length;
  let column = grid[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (grid[i][j] == 1) {
        islands++
        flagPlanted(grid, i, j);
      }
    }
  }
  return islands;
}

const flagPlanted = (grid, i, j) => {
  const directionX = [0, 1, 0, -1];
  const directionY = [1, 0, -1, 0];

  const queue = [[i, j]];

  while (queue.length > 0) {
    let [x, y] = queue.pop();
    grid[x][y] = 'visited';
    for (let i = 0; i < 4; i++) {
      const adjX = x + directionX[i];
      const adjY = y + directionY[i];
      if (grid[adjX] && grid[adjX][adjY] && grid[adjX][adjY] == 1) {
        queue.push([adjX, adjY]);
      }
    }
  }
}