'use strict';


// Binary Tree Maximum Path Sum
// Given a non-empty binary tree, find the maximum path sum.

// For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

// Example 1:

// Input: [1,2,3]

//        1
//       / \
//      2   3

// Output: 6
// Example 2:

// Input: [-10,9,20,null,null,15,7]

//    -10
//    / \
//   9  20
//     /  \
//    15   7

// Output: 42

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
 * @return {number}
 */

//Big O space: O(n) While we don't use a designated storage structure, we use the callstack as space with our recursive call.
//Big O time: O(n) By comparing left or right to 0, we can potentially hit O log N depending on the tree we are given, but worst case is still O(n).

const maxPathSum = root => {
  let max = -Infinity;
  const dfs = node => {
    if (!node) return 0;
    let dfsLeft = Math.max(0, dfs(node.left));
    let dfsRight = Math.max(0, dfs(node.right));
    max = Math.max(dfsLeft + dfsRight + node.val, max);
    return Math.max(dfsLeft, dfsRight) + node.val;
  }
  dfs(root);
  return max;
};