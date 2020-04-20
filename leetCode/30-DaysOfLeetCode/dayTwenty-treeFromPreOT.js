// 'use strict';

// Construct Binary Search Tree from Preorder Traversal
// Return the root node of a binary search tree that matches the given preorder traversal.

// (Recall that a binary search tree is a binary tree where for every node, any descendant of node.left has a value < node.val, and any descendant of node.right has a value > node.val.  Also recall that a preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.)



// Example 1:

//       8
//     /   \
//    5     10
//  /   \     \
// 1     7     12 

// Input: [8,5,1,7,10,12]
// Output: [8,5,10,1,7,null,12]



// Note: 

// 1 <= preorder.length <= 100
// The values of preorder are distinct.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

//Big O space: O(n) We are constructing a new tree with the same amount of values as the tree we are given.
//Big O time: O(n) Using helper recursion we visit each node once, and we have to visit each node at least once.

const bstFromPreorder = preorder => {
  let tree = null;
  for (let node of preorder)
    tree = newBST(tree, node);
  return tree;
};

const newBST = (tree, val) => {
  if (tree === null) return new TreeNode(val);
  if (val < tree.val) tree.left = newBST(tree.left, val);
  else tree.right = newBST(tree.right, val);
  return tree;
}