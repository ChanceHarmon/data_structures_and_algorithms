'use strict';

const logAtLeast5 = n => {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

const logAtMost5 = n => {
  for (let i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}