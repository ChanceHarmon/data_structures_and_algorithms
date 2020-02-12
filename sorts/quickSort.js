'use strict';

//Swap Helper Function
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

//Pivot Helper, picks the first element as the pivot/partition
//Worst time case pivot if the data is already sorted.
//Could be improved by changing pivot location, but still the same Time Theory

const partition = (arr, start = 0, end = arr.length - 1) => {
  let partition = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i <= end; i++) {
    if (partition > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i)
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
}

//Actual QuickSort Implementation
//Time: O(n^2) Space: O(n)

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;

}