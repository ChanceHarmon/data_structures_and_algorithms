'use strict';

//YES FIZZ BUZZ 

// Fizz Buzz

// Solution
// Write a program that outputs the string representation of numbers from 1 to n.

// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

// Example:

// n = 15,

// Return:
// [
//     "1",
//     "2",
//     "Fizz",
//     "4",
//     "Buzz",
//     "Fizz",
//     "7",
//     "8",
//     "Fizz",
//     "Buzz",
//     "11",
//     "Fizz",
//     "13",
//     "14",
//     "FizzBuzz"
// ]

//Big O time: O(n) No matter what we have to consider n as our default loop time. This be infinite or 1.
//Big O space: O(n) Same rules apply. It is asking for an array back without one being provided in the arguement to return. So we have to create storage that could range from 0 - N.

const fizzBuzz = n => {
  let result = [];
  for (let i = 0; i < n; i++) {
    if ((i + 1) % 5 === 0 && (i + 1) % 3 === 0) result.push("FizzBuzz")
    else if ((i + 1) % 5 === 0) result.push("Buzz")
    else if ((i + 1) % 3 === 0) result.push("Fizz")
    else {
      result.push(`${i + 1}`)
    }
  }
  return result;
};