'use strict';



// Reverse String

// Write a function that reverses a string. The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.

// Example 1:

// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

//Big O time: I think this is Olog(n), and the idea is that we swap and increment at the same time. Hopefully this is N squared dived by two basically.
//Big O space: O(1) Per the reqs, we changed the sting in place, without any extra storage or the reverse method.

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = s => {
  let reversePointer = s.length - 1;
  for (let i = 0; i < s.length; i++) {
    if (reversePointer >= i) {
      let temp;
      temp = s[i];
      s[i] = s[reversePointer];
      s[reversePointer] = temp;
      reversePointer--;
    }
  }
};

//Not bad, passed leetcode first try without a refactor.