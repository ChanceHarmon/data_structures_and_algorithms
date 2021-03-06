'use strict';

// Valid Parenthesis String
// Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid.We define the validity of a string by these rules:

// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
// An empty string is also valid.
//   Example 1:
// Input: "()"
// Output: True
// Example 2:
// Input: "(*)"
// Output: True
// Example 3:
// Input: "(*))"
// Output: True
// Note:
// The string size will be in the range[1, 100].

//Big O space: O(n) We use two stacks to be able to track the open parens and the stars.
//Big O time: O(n) We use a for loop and a while loop, but not nested.


const checkValidString = s => {

  let stackOpen = [];
  let stackStars = [];

  for (let i = 0; i < s.length; i++) {

    if (s[i] === '(') stackOpen.push(i);
    else if (s[i] === '*') stackStars.push(i);
    else {
      if (stackOpen.length > 0) stackOpen.pop();
      else if (stackStars.length > 0) stackStars.pop();
      else return false;
    }
  }

  let open = stackOpen.length - 1;
  let star = stackStars.length - 1;

  while (stackOpen[open] < stackStars[star]) {
    open--
    star--
    stackOpen.pop()
    stackStars.pop()
  }

  if (!stackOpen.length) return true;
  else return false;

};

console.log(checkValidString("(*))"))