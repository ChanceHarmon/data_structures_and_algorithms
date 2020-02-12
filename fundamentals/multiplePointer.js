'use strict';
//the array is of integers and is sorted
// Time: O(n^2), Space: O(1)
const sumZero = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[1], arr[j]];
      }
    }
  }
}

// Time: O(n), Space: O(1)
const sumZero = arr => {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  while (left < right) {
    let sum = arr[leftPointer] + arr[rightPointer];
    if (sum === 0) {
      return [arr[leftPointer], arr[rightPointer]];
    } else if (sum > 0) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }
}

//count unique values in a sorted array

const countUniqueValues = arr => {
  if (arr.length === 0) {
    return 0;
  }
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

//Are there Duplicates Challenge

const areThereDuplicates = (...args) => {

  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true
    }
    start++
    next++
  }
  return false
}

//Average Pair Challenge, finding if a pair of values matches a target value, could be multiple
const averagePair = (arr, num) => {
  let start = 0
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2
    if (avg === num) return true;
    else if (avg < num) start++
    else end--
  }
  return false;
}


//SubSequence Challenge, given two strings determine if the first string is a sub string in the second.
//Order matters, can not be changed

const isSubsequence = (str1, str2) => {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}


