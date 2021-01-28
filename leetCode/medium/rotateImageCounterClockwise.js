'use strict';

// Rotate Image

// You are given an n x n 2D matrix representing an image.

// Rotate the image by 90 degrees (clockwise).

// Note:

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// Example 1:

// Given input matrix = 
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],

// rotate the input matrix in-place such that it becomes:
// [
//   [3,6,9],
//   [2,5,8],
//   [1,4,7]
// ]
// Example 2:

// Given input matrix =
// [
//   [ 5, 1, 9,11],
//   [ 2, 4, 8,10],
//   [13, 3, 6, 7],
//   [15,14,12,16]
// ], 

// rotate the input matrix in-place such that it becomes:
// [
//   [11,10, 7, 16],
//   [9, 8, 6, 12],
//   [1, 4, 3, 14],
//   [5, 2,13,15]
// ]

//Big O space: O(1) Constant space, rotating the matrix in place.
//Big O time: O(n^2) Using  nested loops to swap rows with columns, and then a second nested loop to reverse the rows.

const rotate = matrix => {
  //Step One: Turn rows into columns, and columns into rows
  //Note: this first step works for clockwise or counter-clockwise, the second set of loops is the hard part.
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      let pivot = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = pivot;
    }
  }
  //Step Two: Reverse the rows from the middle out.
  let i = 0;
  let j = matrix.length - 1;
  let count = 0;
  while (count < matrix.length) {
    while (i <= j) {
      let temp = matrix[i][count];
      matrix[i][count] = matrix[j][count];
      matrix[j][count] = temp;
      i += 1;
      j -= 1;
    }
    count += 1;
    i = 0;
    j = matrix.length - 1;
  }
  return matrix
};

console.log(rotate([
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16]
]))