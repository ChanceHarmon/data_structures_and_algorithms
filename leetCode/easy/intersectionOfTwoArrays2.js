'use strict';

// Intersection of Two Arrays II

// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.


// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000


// Follow up:

// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

// Big O time: O(n^2) At least 3 instances of a nested loops, tough question at the moment for me to figure out how to improve time.
// Big O space: O(n) Two objects and a return array for storage, but none of them have exponential growth, returnArray being the only storage that matters. We could clean the objects up for memory management, but the garbage collector handles that at the moment.

const intersect = (nums1, nums2) => {
    const key1 = {};
    const key2 = {};
    const returnArray = [];

    //Clean the lists up to only have common values
    nums1 = nums1.filter(num => nums2.includes(num));
    nums2 = nums2.filter(num => nums1.includes(num));

    //Record values to keys per list
    for (let i = 0; i < nums1.length; i++) {
        if (key1[nums1[i]]) key1[nums1[i]] += 1;
        else key1[nums1[i]] = 1;
    }
    for (let i = 0; i < nums2.length; i++) {
        if (key2[nums2[i]]) key2[nums2[i]] += 1;
        else key2[nums2[i]] = 1;
    }

    //Rabbithole of looping through the objects, and whatever count is less is the amount of times we add it to the returnArray. j in the loops versus i helped a lot for odd loop behavior
    const keyCompare = Object.keys(key1);

    for (let i = 0; i < keyCompare.length; i++) {

        if (key1[keyCompare[i]] > key2[keyCompare[i]]) {
            for (let j = 0; j < key2[keyCompare[i]]; j++) {
                returnArray.push(keyCompare[i]);
            }
        } else if (key1[keyCompare[i]] < key2[keyCompare[i]]) {
            for (let j = 0; j < key1[keyCompare[i]]; j++) {
                returnArray.push(keyCompare[i]);
            }
        } else if (key1[keyCompare[i]] === key2[keyCompare[i]]) {
            for (let j = 0; j < key1[keyCompare[i]]; j++) {
                returnArray.push(keyCompare[i]);
            }
        }
    }
    return returnArray;
};
