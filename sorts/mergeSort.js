'use strict';

//Merging two sorted arrays
// Step 1 is to write the helper function to merge two sorted arrays
const merge = (arr1, arr2) => {

  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      result.push(arr1[i])
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  // These two while loops handle the condition of if either array is longer than the other
  // Whatever values are left over in an array get pushed to the new array
  //Since the two arrays were sorted to begin with, we know that we can push them in and they
  //Will be sorted

  while (i < arr1.length) {
    result.push(arr[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

//Recursive Solution
// This splits the array down into arrays with single values
//Then it uses the helper merge function to return a sorted array by merging two single value arrays,
//Continuing to merge until the last two merges are of two arrays that are both sorted, returning a final merged array

//Time: O(n log n)  Space: O(n)

const mergeSort = arr => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}