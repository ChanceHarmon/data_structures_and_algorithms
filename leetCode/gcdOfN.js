'use strict';

//Find the GCD of n numbers(Greatest Common Divisor)

const gcdOfAnArray = (num, arr) => {
  if (!arr.length) return false;
  let a = num;
  let b;
  let result;
  for (let i = 0; i <= arr.length; i++) {
    console.log(a, b)
    b = arr[i];
    result = gcd(a, b);
  }
  return result;
}

const gcd = (a, b) => {
  while (b) {
    let temp = b;
    b = a % b;
    console.log('gcd', b)
    a = temp
  }
  return a;
}


gcdOfAnArray(2, [6, 9, 15, 18, 4, 5])