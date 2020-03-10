'use strict';

// Given a grid of 1's and 0's, 1 respresents if a server has the information, 0 represents servers that are missing the information. Each hour, if a 1 is is touching a 0, horizontally or vertically, the 0 will become a 1.
//Write an algorithm that returns the number of hours until all of servers have the information(value:1).

//Big O space: O(n) Using a couple of helper storage arrays, however the space if finite based on a predefined grid
//Big O time: O(n^2) Two differnet sets of nested loops

const fullServer = grid => {
  let queue = [];
  let noServers = 0;
  let hours = 0;
  // Push infoServers to the queue and count the noServers
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1)
        queue.push([i, j]);
      if (grid[i][j] === 0)
        noServers++;
    }
  }

  while (queue.length && noServers) {
    console.log(grid)
    let newQueue = []; // queue for next minute
    while (queue.length) {
      let infoServers = queue.shift();
      let newServers = spreadTheGoodWord(grid, infoServers[0], infoServers[1], newQueue);
      noServers -= newServers;
    }
    hours++;
    queue = newQueue;
  }
  return hours;
};

//Helper function to spread the infoServers
const spreadTheGoodWord = (grid, i, j, queue) => {
  let theGospel = 0;
  if (i > 0 && grid[i - 1][j] === 0) {
    grid[i - 1][j]++;
    theGospel++;
    queue.push([i - 1, j]);
  }
  if (j > 0 && grid[i][j - 1] === 0) {
    grid[i][j - 1]++;
    theGospel++;
    queue.push([i, j - 1]);
  }
  if (i < grid.length - 1 && grid[i + 1][j] === 0) {
    grid[i + 1][j]++;
    theGospel++;
    queue.push([i + 1, j]);
  }
  if (j < grid[0].length - 1 && grid[i][j + 1] === 0) {
    grid[i][j + 1]++;
    theGospel++;
    queue.push([i, j + 1]);
  }

  return theGospel;
}

//fullServer([[0, 0, 0, 1, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]])