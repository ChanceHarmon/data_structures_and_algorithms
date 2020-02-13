'use strict';

//Not a comparison sort. Uses numbers, and sorts them into buckets based off of how long the longest
//Number in the list is. So if the largest number length is 4 digits, the sort runs 4 times. 
//This process starts at the right most digit in any number, and moves left one each time the sort runs.

//Helpful to make a few helper functions to implement the search
//One is something like getDigit, helps sort them into the buckets

//From stackOverflow. Floor the absolute value of the num divded by the the index to the power of 10, then divide by 10 as we are working with base 10 nums. Abs helps deal with negative numbers

const getDigit = (num, index) => {
  return Math.floor(Math.abs(num) / Math.pow(10, index)) % 10;
}

const digitCount = num => {
  if (num === 0) return 1; // This line helps prevent -Infinity if someone passes 0 as a value
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

const mostDigits = nums => {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

//Now we can start our radix sort with the helper functions
//Time: O(nk) Space:O(n+k)  n = length of the data set, k + length of the longest number
const radixSort = nums => {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);//This line is sick
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);//These two lines can be combined to make one line. 
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);//Don't forget the spread operator
  }
  return nums;
}

