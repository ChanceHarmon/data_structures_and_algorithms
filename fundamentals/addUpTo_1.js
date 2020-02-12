'use strict';

const addUpTo = n => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

//With performance timing

// let t1 = performance.now();
// addUpTo(1000000000000);
// let t2 = performance.now();
// console.log(`Time performance: ${(t2 - t1) / 1000} seconds.`)