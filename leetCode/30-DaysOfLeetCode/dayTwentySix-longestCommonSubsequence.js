'use strict';


// Longest Common Subsequence
// Given two strings text1 and text2, return the length of their longest common subsequence.

// A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.



// If there is no common subsequence, return 0.



// Example 1:

// Input: text1 = "abcde", text2 = "ace" 
// Output: 3  
// Explanation: The longest common subsequence is "ace" and its length is 3.
// Example 2:

// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.
// Example 3:

// Input: text1 = "abc", text2 = "def"
// Output: 0
// Explanation: There is no such common subsequence, so the result is 0.


// Constraints:

// 1 <= text1.length <= 1000
// 1 <= text2.length <= 1000
// The input strings consist of lowercase English characters only.


//I did more explanation than normal, but this took me a while to wrap my head around so I wanted to have study notes.

//Big O space: O(n) We use a return grid array to keep track of what value to return.
//Big O time: O(n^2) We have three loops, but one cycle is a nested loop, so we hit quadratic time.

const longestCommonSubsequence = (text1, text2) => {

  let row = text1.length;
  let column = text2.length;
  let grid = [];

  //Building our grid and filling it with 0's.
  for (let i = 0; i <= row; i++) {
    grid[i] = new Array(column + 1).fill(0);
  }

  //Now we are checking checking diagonal values in the order of one row lower position to one row higher position +1. If they are equal, we add 1 to the the upper row position value, and make the lower rows next value equal to that 'count value'. 
  //This is pretty well illustrated if you comment in the console.log() after the two for loops start.
  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= column; j++) {
      //console.log('dp', dp, 'dp[i][j]', dp[i][j])
      if (text1.charAt(i - 1) === text2.charAt(j - 1)) grid[i][j] = grid[i - 1][j - 1] + 1;
      else grid[i][j] = Math.max(grid[i - 1][j], grid[i][j - 1]);

    }
  }
  return grid[row][column];
}