'use strict';

//This is the last day of the challenge. This question also seems to be unique to the challenge as well. Luckily the last week or so has had a few tree problems so it was a nice finish that took about 40 mins.

// Check If a String Is a Valid Sequence from Root to Leaves Path in a Binary Tree
// Given a binary tree where each path going from the root to any leaf form a valid sequence, check if a given string is a valid sequence in such binary tree. 

// We get the given string from the concatenation of an array of integers arr and the concatenation of all values of the nodes along a path results in a sequence in the given binary tree.



// Example 1:



// Input: root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,1,0,1]
// Output: true
// Explanation: 
// The path 0 -> 1 -> 0 -> 1 is a valid sequence (green color in the figure). 
// Other valid sequences are: 
// 0 -> 1 -> 1 -> 0 
// 0 -> 0 -> 0
// Example 2:



// Input: root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,0,1]
// Output: false 
// Explanation: The path 0 -> 0 -> 1 does not exist, therefore it is not even a sequence.
// Example 3:



// Input: root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,1,1]
// Output: false
// Explanation: The path 0 -> 1 -> 1 is a sequence, but it is not a valid sequence.


// Constraints:

// 1 <= arr.length <= 5000
// 0 <= arr[i] <= 9
// Each node's value is between [0 - 9].


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} arr
 * @return {boolean}
 */


//Big O space: O(n) Call stack as storage, in general this could O(log n) by definition of the given params, but the given tree and the given arr could be equal enough that every node may need to be visited before we can return true or false.
//Big O time: O(n) Basically the same answer as above.

const isValidSequence = (root, arr) => {
  if (!root) return arr.length === 0;
  return dfs(root, arr, 0);


};

const dfs = (root, arr, index) => {
  if (root.val !== arr[index]) return false;
  if (index === arr.length - 1) {
    return root.left === null && root.right === null;
  }
  return ((root.left !== null && dfs(root.left, arr, index + 1)) || (root.right !== null && dfs(root.right, arr, index + 1)))

}