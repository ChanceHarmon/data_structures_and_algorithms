// Move Zeroes
// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

//Big O space: O(1) All operations performed in place.
//Big O time: O(log n) I believe this to be correct. For everyone operation of moving a zero, we are shortening or search time. 

//After the solution, below is a lot of walk through commented out code, that steps through the process.

const moveZeroes = nums => {
  let length = nums.length;
  for (let i = 0; i < length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      nums.push(0)
      i--
      length--
    }
  }
  return nums;
};

//The below version is how everything actually works

// const moveZeroes = nums => {

//You need this next line. Iwt doesn't work if you try to manipulate the length directly. In the variable of length, nums.length is just a number value, that we use to trim how long our for loop runs. Not sure if that makes it O(log n), but I think so...

//   let length = nums.length;
//   for (let i = 0; i < length; i++) {
//     if (nums[i] === 0) {

//The order in splice and push are clever, we basically cut out the index if the value if zero, then push a zero to the end of the array, no need to store anything.

//       nums.splice(i, 1)
//       nums.push(0)

// We minus i if this happens to check if the same index we just checked has another zero after the last one was cut out. This accounts for not skipping several zeroes in a row while not being to the end of the length of the array.

//       i--

// Then length minus 1 as well, to shorten our for loop time. The idea is that when all of the zeroes are sorted, we don't need to keep looping, we can break from the loop faster.

//       length--
//     }
//   }
//   return nums;
// };

// [ 0, 1, 0, 3, 4, 0, 89, 78, 3, 0, 12 ]
//   i                                L
// i 0 value of i 0 length 11

// [ 1, 0, 3, 4, 0, 89, 78, 3, 0, 12, 0 ]
//   i                             L
// i 0 value of i 1 length 10

// [ 1, 0, 3, 4, 0, 89, 78, 3, 0, 12, 0 ]
//      i                         L
// i 1 value of i 0 length 10

// [ 1, 3, 4, 0, 89, 78, 3, 0, 12, 0, 0 ]
//      i                      L
// i 1 value of i 3 length 9

// [ 1, 3, 4, 0, 89, 78, 3, 0, 12, 0, 0 ]
//         i                   L
// i 2 value of i 4 length 9

// [ 1, 3, 4, 0, 89, 78, 3, 0, 12, 0, 0 ]
//            i                L
// i 3 value of i 0 length 9

// [ 1, 3, 4, 89, 78, 3, 0, 12, 0, 0, 0 ]
//            i             L
// i 3 value of i 89 length 8

// [ 1, 3, 4, 89, 78, 3, 0, 12, 0, 0, 0 ]
//                i         L
// i 4 value of i 78 length 8

// [ 1, 3, 4, 89, 78, 3, 0, 12, 0, 0, 0 ]
//                    i     L
// i 5 value of i 3 length 8

// [ 1, 3, 4, 89, 78, 3, 0, 12, 0, 0, 0 ]
//                       i  L
// i 6 value of i 0 length 8

// [ 1, 3, 4, 89, 78, 3, 12, 0, 0, 0, 0 ]
//                       iL
// i 6 value of i 12 length 7

//return value
// [ 1, 3, 4, 89, 78, 3, 12, 0, 0, 0, 0 ]


console.log(moveZeroes([0, 1, 0, 3, 4, 0, 89, 78, 3, 0, 12]));