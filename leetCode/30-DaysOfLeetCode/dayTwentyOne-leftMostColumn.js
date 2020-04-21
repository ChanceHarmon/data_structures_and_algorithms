'use strict';

//This question is odd, and uses two leetcode API's. If you wanted to replicate this you would have to write the functions for what the api's do. Although it shouldn't be too hard given the below descriptions of each. There was no current public question for this one, although in research I found that it had been listed under facebook questions, but the file returned a 404. I did a fair amount of research on this, it is basically undocumented, but was able to convert a few languages to a JavaScript solution.  Me++

// Leftmost Column with at Least a One
// (This problem is an interactive problem.)

// A binary matrix means that all elements are 0 or 1. For each individual row of the matrix, this row is sorted in non-decreasing order.

// Given a row-sorted binary matrix binaryMatrix, return leftmost column index(0-indexed) with at least a 1 in it. If such index doesn't exist, return -1.

// You can't access the Binary Matrix directly.  You may only access the matrix using a BinaryMatrix interface:

// BinaryMatrix.get(x, y) returns the element of the matrix at index (x, y) (0-indexed).
// BinaryMatrix.dimensions() returns a list of 2 elements [n, m], which means the matrix is n * m.
// Submissions making more than 1000 calls to BinaryMatrix.get will be judged Wrong Answer.  Also, any solutions that attempt to circumvent the judge will result in disqualification.

// For custom testing purposes you're given the binary matrix mat as input in the following four examples. You will not have access the binary matrix directly.



// Example 1:



// Input: mat = [[0,0],[1,1]]
// Output: 0
// Example 2:



// Input: mat = [[0,0],[0,1]]
// Output: 1
// Example 3:



// Input: mat = [[0,0],[0,0]]
// Output: -1
// Example 4:



// Input: mat = [[0,0,0,1],[0,0,1,1],[0,1,1,1]]
// Output: 1


// Constraints:

// 1 <= mat.length, mat[i].length <= 100
// mat[i][j] is either 0 or 1.
// mat[i] is sorted in a non-decreasing way.

//Big O space: O(1) I go back and forth of whether or not using variable assignment counts as linear or constant time. So i am picking constant today ;)
//Big O time: O(r+c) || O(n) with rows being sorted, we can cut our time down to log n for most test cases, but worst case would be row[0]col[col.length -1].

const leftMostColumnWithOne = binaryMatrix => {

  let dim = binaryMatrix.dimensions();
  let rows = dim[0];
  let cols = dim[1];

  if (rows === 0 || cols === 0) return -1;

  let result = -1;
  let r = 0;
  let c = cols - 1;

  while (r < rows && c >= 0) {
    if (binaryMatrix.get(r, c) === 1) {
      result = c;
      c--;
    } else {
      r++;
    }
  }
  return result;
};