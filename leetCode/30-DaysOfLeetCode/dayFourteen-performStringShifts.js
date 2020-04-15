'use strict';

//As of 4/14/20, this is another challenge specific to the 30 Days of Leetcode Challenge. I will try to remember to check when the contest is finished to see if it becomes public.


// Perform String Shifts
// You are given a string s containing lowercase English letters, and a matrix shift, where shift[i] = [direction, amount]:

// direction can be 0 (for left shift) or 1 (for right shift). 
// amount is the amount by which string s is to be shifted.
// A left shift by 1 means remove the first character of s and append it to the end.
// Similarly, a right shift by 1 means remove the last character of s and add it to the beginning.
// Return the final string after all operations.



// Example 1:

// Input: s = "abc", shift = [[0,1],[1,2]]
// Output: "cab"
// Explanation: 
// [0,1] means shift to left by 1. "abc" -> "bca"
// [1,2] means shift to right by 2. "bca" -> "cab"
// Example 2:

// Input: s = "abcdefg", shift = [[1,1],[1,1],[0,2],[1,3]]
// Output: "efgabcd"
// Explanation:  
// [1,1] means shift to right by 1. "abcdefg" -> "gabcdef"
// [1,1] means shift to right by 1. "gabcdef" -> "fgabcde"
// [0,2] means shift to left by 2. "fgabcde" -> "abcdefg"
// [1,3] means shift to right by 3. "abcdefg" -> "efgabcd"


// Constraints:

// 1 <= s.length <= 100
// s only contains lower case English letters.
// 1 <= shift.length <= 100
// shift[i].length == 2
// 0 <= shift[i][0] <= 1
// 0 <= shift[i][1] <= 100


//Thought, keep track of the total shifts of each direction. Cancel them out, then perform one shift with the remainder.
//Edge cases: Return s if length is less than 2. If total shifts cancels out, return s. 
//What if the total shift is greater than the length? Maybe take total shifts and subtract the string length and perform the remainder of the shifts?

//Right 1 = remove from end and place at the beginning, Left 0 = remove from the beginning and add to the end.

//Big O space: O(n) We split and join creating  temp arrays, I will learn how to get around this one day.
//Big O time: O(n^2) While only using one for loop, we have a nested reduce call in each pass of the for loop. Could be improved, I am just burnt for the day on this one.

//This is the first version, it took forever to get here. I basically started from scratch 3 times to just to get here. The edge case handling gets really weird if you don't perform the changes iteratively. 

// const stringShift = (s, shift) => {
//   let cut = s;

//   for (let i = 0; i < shift.length; i++) {
//     let string = cut.split('')
//     console.log('start', cut, 'string', string)
//     if (shift[i][0] === 0) {
//       console.log('first if string', string)
//       cut = string.splice(0, shift[i][1])
//       console.log('if cut', cut)
//       string.push(cut)
//       console.log('if string after splice', string)
//       string = string.reduce((total, amount) => total.concat(amount), []
//       );
//       console.log('if string after reduce', string, cut)
//       cut = string.join('');
//       console.log('if final cut', cut)
//     } else if (shift[i][0] === 1) {
//       console.log('first else if string', string)
//       cut = string.splice(-shift[i][1])
//       console.log('else if cut', cut)
//       string.unshift(cut)
//       console.log('if string after splice', string)
//       string = string.reduce((total, amount) => total.concat(amount), []
//       );
//       console.log('else string after reduce', string)
//       cut = string.join('');
//       console.log('else if final cut', cut)
//     }
//     //console.log(string)
//     //cut = string.join('')
//   }
//   return cut
// };

//This is better, cleaner and removes the unnessecary reference to th s variable twice, we can just manipulate the string directly for each shift index


// const stringShift = (s, shift) => {

//   for (let i = 0; i < shift.length; i++) {
//     let string = s.split('')
//     if (shift[i][0] === 0) {
//       s = string.splice(0, shift[i][1])
//       string.push(s)
//       string = string.reduce((total, amount) => total.concat(amount), []
//       );
//       s = string.join('');
//     }
//     else if (shift[i][0] === 1) {
//       s = string.splice(-shift[i][1])
//       string.unshift(s)
//       string = string.reduce((total, amount) => total.concat(amount), []
//       );
//       s = string.join('');
//     }
//   }
//   return s
// };



const stringShift = (s, shift) => {
  for (let i = 0; i < shift.length; i++) {
    let stringOne = '';
    let stringTwo = '';
    if (shift[i][0] === 0) {
      if (shift[i][1] === 0) stringOne = '';
      else {
        stringOne = s.slice(0, shift[i][1]);
      }
      stringTwo = s.slice(shift[i][1], s.length);
      s = stringTwo.concat(stringOne, '')
    }
    else if (shift[i][0] === 1) {
      if (shift[i][1] === 0) stringOne = '';
      else {
        stringOne = s.slice(-shift[i][1]);
      }
      stringTwo = s.slice(0, s.length - shift[i][1]);
      s = stringOne.concat(stringTwo, '')
    }
  }
  return s
}
console.log(stringShift('xqgwkiqpif', [[1, 4], [0, 7], [0, 8], [0, 7], [0, 6], [1, 3], [0, 1], [1, 7], [0, 5], [0, 6]]))