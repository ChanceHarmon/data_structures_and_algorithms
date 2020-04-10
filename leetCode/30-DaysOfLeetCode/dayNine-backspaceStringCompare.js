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

//Big O is going to be explained by progress of methods. I spent way more time than I should have, but I loved this problem.

//Method 1:
//Big O space: O(n) We use .split() so this makes an array of each string. Even is we use .join(), we still created the space in memory.
//Big O time: O(n) We use four for loops, yes, breathe. None of them are nested. but I had a hard time getting the index value manipulation to work correctly. Don't worry, it gets better.

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

//Method 2:
//Big O space: O(n) We use .split() so this makes an array of each string. Even is we use .join(), we still created the space in memory.
//Big O time: O(n) Better than method 1. We were able to reduce the number of loops to two. Same factored time, but still a better refactor.

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
//Method 3:
//Big O space: O(1) Now we are using regex to search the string and manipulate the given string, with out using array methods.
//Big O time: O(n) Again using four loops, while loops made more sense this time. I had a hard time getting the condition of sliding the characters to the next evaluation without checking again after the change for the same condition, until all forms of that single condition were met.

const backspaceCompare = (S, T) => {
  while (S.match(/\S#/) && S.length > 0) {
    S = S.replace(/\S#/, '')
  }
  while (S.match(/#/) && S.length >= 0) {
    S = S.replace(/#/, '')
  }
  while (T.match(/\S#/) && T.length > 0) {
    T = T.replace(/\S#/, '')
  }
  while (T.match(/#/) && T.length >= 0) {
    T = T.replace(/#/, '')
  }
  if (S === T) return true;
  else return false;
}

//Method 4:
//Big O space: O(1) Now we are using regex to search the string and manipulate the given string, with out using array methods.
//Big O time: O(n) Now we have it down to two while loops Still linear time, but better to be 2n than 4n.

const backspaceCompare = (S, T) => {
  while (S.match(/\S#+|#+/) && S.length >= 0) {
    if (S.match(/\S#/)) {
      S = (S.replace(/\S#/, ''))
    } else if (S.match(/#/)) {
      S = (S.replace(/#/, ''))
    }
  }
  while (T.match(/\S#+|#+/) && T.length >= 0) {
    if (T.match(/\S#/)) {
      T = (T.replace(/\S#/, ''))
    } else if (T.match(/#/)) {
      T = (T.replace(/#/, ''))
    }
  }
  if (S === T) return true;
  else return false;
}

//Method 5:
//Nothing different than Method 4, just realized I didn't need the additional comparison condition in the while loops.

const backspaceCompare = (S, T) => {
  while (S.match(/\S#+|#+/)) {
    if (S.match(/\S#/)) {
      S = (S.replace(/\S#/, ''))
    } else if (S.match(/#/)) {
      S = (S.replace(/#/, ''))
    }
  }
  while (T.match(/\S#+|#+/)) {
    if (T.match(/\S#/)) {
      T = (T.replace(/\S#/, ''))
    } else if (T.match(/#/)) {
      T = (T.replace(/#/, ''))
    }
  }
  if (S === T) return true;
  else return false;
}