'use strict';


// Diameter of Binary Tree
// Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// Example:
// Given a binary tree
//           1
//          / \
//         2   3
//        / \     
//       4   5    
// Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

// Note: The length of path between two nodes is represented by the number of edges between them.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

//Big O space: O(1) No extra space needed, just a variale count for the return.

//Big O time: O(n) WHile we don't use a loop, we use a recursive function to traverse the tree, thus the callstack becomes our loop and storage, and we have to see every node at least once, if not multiple times to test for diameter.

//As of 4/11/20, this solution beats 98.6% on time. 

const diameterOfBinaryTree = root => {

  if (!root) return 0;
  let result = 0;

  const dfs = node => {

    if (!node) return 0;
    let left, right;

    left = node.left ? 1 + dfs(node.left) : 0;
    right = node.right ? 1 + dfs(node.right) : 0;
    result = Math.max(result, left + right);

    return Math.max(left, right);
  }

  dfs(root);
  return result;

};