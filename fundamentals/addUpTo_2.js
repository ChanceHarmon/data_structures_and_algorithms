'use strict';

const addUpTo = n => {
  return n * (n + 1) / 2
}

//With performance timing

// let t1 = performance.now();
// addUpTo(1000000000000);
// let t2 = performance.now();
// console.log(`Time performance: ${(t2 - t1) / 1000} seconds.`)