'use strict';

// In a given grid, each cell can have one of three values:

// the value 0 representing an empty cell;
// the value 1 representing a fresh orange;
// the value 2 representing a rotten orange.
// Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.

// Example 1:

// Input: [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4
// Example 2:

// Input: [[2,1,1],[0,1,1],[1,0,1]]
// Output: -1
// Explanation:  The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
// Example 3:

// Input: [[0,2]]
// Output: 0
// Explanation:  Since there are already no fresh oranges at minute 0, the answer is just 0.

// Note:

// 1 <= grid.length <= 10
// 1 <= grid[0].length <= 10
// grid[i][j] is only 0, 1, or 2.

//Big O space: O(n) Using a couple of helper storage arrays, however the space if finite based on a predefined grid
//Big O time: O(n^2) Two differnet sets of nested loops
const orangesRotting = grid => {
  let queue = [];
  let freshOranges = 0;
  let minutes = 0;
  // Push rotten oranges to the queue and count fresh oranges
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 2)
        queue.push([i, j]);
      if (grid[i][j] === 1)
        freshOranges++;
    }
  }

  while (queue.length && freshOranges) {
    let newQueue = []; // queue for next minute
    while (queue.length) {
      let rottingOranges = queue.shift();
      let newRottens = mouthBreather(grid, rottingOranges[0], rottingOranges[1], newQueue);
      freshOranges -= newRottens;
    }

    minutes++;
    queue = newQueue;
  }
  if (freshOranges !== 0)
    return -1;
  return minutes;
};

//Helper function to infect other oranges
const mouthBreather = (grid, i, j, queue) => {
  let rotten = 0;
  if (i > 0 && grid[i - 1][j] === 1) {
    grid[i - 1][j]++;
    rotten++;
    queue.push([i - 1, j]);
  }
  if (j > 0 && grid[i][j - 1] === 1) {
    grid[i][j - 1]++;
    rotten++;
    queue.push([i, j - 1]);
  }
  if (i < grid.length - 1 && grid[i + 1][j] === 1) {
    grid[i + 1][j]++;
    rotten++;
    queue.push([i + 1, j]);
  }
  if (j < grid[0].length - 1 && grid[i][j + 1] === 1) {
    grid[i][j + 1]++;
    rotten++;
    queue.push([i, j + 1]);
  }

  return rotten;
}