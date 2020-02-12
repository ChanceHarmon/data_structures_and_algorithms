'use strict';

const countUpAndDown = n => {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
};
