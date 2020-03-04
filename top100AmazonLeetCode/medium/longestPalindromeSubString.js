'use strict';

// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"

const longestPalindrome = s => {
  if (s.length < 2) return s; // base case

  //helper funtion to return final longest sub string
  let finalString = (s, start, end) => {
    let str = '';

    for (let i = start; i <= end; i++) {
      str += s[i];
    }

    return str;
  }

  //declaring a bunch of variables to be able to track all the substring possibilities
  let maxLeftBoundry = 0; // max left boundary
  let maxRightBoundry = 0; // max right boundary
  let maxPalindromicLength; // maxR - maxL
  let currentLeft = 0; // current left boundary
  let currentRight = 0; // current right boundary
  let maxIndex = s.length - 1;
  let i = 0; // main iterator

  while (i < s.length) {
    currentLeft = i, currentRight = i; // reset current left & right boundaries

    // move right boundary if there are duplicates
    while (currentRight < maxIndex && s[currentRight] === s[currentRight + 1]) {
      currentRight++;
    }

    i = currentRight + 1; // set our iterator for the next iteration

    // expand left and right boundaries
    while (currentLeft > 0 && currentRight < maxIndex && s[currentLeft - 1] === s[currentRight + 1]) {
      currentLeft--;
      currentRight++;
    }

    maxPalindromicLength = maxRightBoundry - maxLeftBoundry;

    // if current palindrome is longer than max palindrome
    if (currentRight - currentLeft > maxPalindromicLength) {
      maxLeftBoundry = currentLeft, maxRightBoundry = currentRight;

      // if we reached the maximum possible palindromic length, return our string
      if (maxPalindromicLength === maxIndex) {
        return s;
      }
    }
  }

  return finalString(s, maxLeftBoundry, maxRightBoundry);
}