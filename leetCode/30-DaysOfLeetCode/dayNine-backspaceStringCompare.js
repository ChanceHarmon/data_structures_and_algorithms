'use strict';


// Backspace String Compare
// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

// Example 1:

// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".
// Example 2:

// Input: S = "ab##", T = "c#d#"
// Output: true
// Explanation: Both S and T become "".
// Example 3:

// Input: S = "a##c", T = "#a#c"
// Output: true
// Explanation: Both S and T become "c".
// Example 4:

// Input: S = "a#c", T = "b"
// Output: false
// Explanation: S becomes "c" while T becomes "b".
// Note:

// 1 <= S.length <= 200
// 1 <= T.length <= 200
// S and T only contain lowercase letters and '#' characters.
// Follow up:

// Can you solve it in O(N) time and O(1) space?

const backspaceCompare = (S, T) => {

  let string = S.split('');
  let string2 = T.split('');

  for (let i = 0; i < string.length; i++) {
    if (string[i] === '#' && i > 0) {
      string.splice([i - 1], 2)
      i = 0;
    }
  }

  for (let i = 0; i < string.length; i++) {
    if (string[i] === '#') {
      string.splice(i, 1)
    }
  }

  for (let i = 0; i < string2.length; i++) {
    if (string2[i] === '#' && i > 0) {
      string2.splice([i - 1], 2)
      i = 0;
    }
  }

  for (let i = 0; i < string2.length; i++) {
    if (string2[i] === '#') {
      string2.splice(i, 1)
    }
  }
  let filteredStringOne = string.join('');
  let filteredStringTwo = string2.join('');

  if (filteredStringOne === filteredStringTwo) {
    return true
  } else {
    return false;
  }

};

const backspaceCompare = (S, T) => {

  let string = S.split('')
  let string2 = T.split('');

  for (let i = 0; i < string.length; i++) {
    if (string[i] === '#' && i > 0) {
      string.splice([i - 1], 2)
      i = 0;
    }
    if (string[i] === '#') {
      string.splice(i, 1)
      i--;
    }
  }

  for (let i = 0; i < string2.length; i++) {
    if (string2[i] === '#' && i > 0) {
      string2.splice([i - 1], 2)
      i = 0;
    }
    if (string2[i] === '#') {
      string2.splice(i, 1)
      i--;
    }
  }

  let filteredStringOne = string.join('');
  let filteredStringTwo = string2.join('');

  if (filteredStringOne === filteredStringTwo) {
    return true
  } else {
    return false;
  }

}