'use strict';

// Product of Array Except Self
// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)


//Intro, I have seen this question brought up multiple times, but have never attempted or understood what it really meant until today. This type of solution was referenced many times, but I didn't understand it. So iwatched a YT vid this morning that explained what the two loops were actually doing and why this works. I just adapted it to JavaScript and ES6 the way it makes sense to me.
//Link to vid = https://www.youtube.com/watch?v=tSRFtR3pv74

//Big O space: O(1) They are letting us use an output array and not counting it toward space usage, I don't understand why. This should be O(n).
//Big O time: O(n) We use two single loops, not nested, to count products forward and backward, updating the return array on our way back down.

const productExceptSelf = nums => {
  let resultArray = [];
  let left = 1;
  //first loop is getting the products to the left of the last index
  for (let i = 0; i < nums.length; i++) {
    resultArray[i] = left;
    left *= nums[i];
    console.log('first loop result array', resultArray)
  }
  let right = 1;
  //second loop is getting the products from the end except the first index. The second loop  is updating the result array as it loops towards the beginning
  for (let i = nums.length - 1; i >= 0; i--) {
    resultArray[i] = resultArray[i] * right;
    right *= nums[i];
    console.log('second loop result array', resultArray)
  }
  console.log('final result', resultArray)
  return resultArray;
};

console.log(productExceptSelf([1, 2, 3, 4]))