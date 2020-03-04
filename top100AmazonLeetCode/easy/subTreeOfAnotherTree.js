'use strict';


// Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

// Example 1:
// Given tree s:

//      3
//     / \
//    4   5
//   / \
//  1   2
// Given tree t:
//    4 
//   / \
//  1   2
// Return true, because t has the same structure and node values with a subtree of s.
// Example 2:
// Given tree s:

//      3
//     / \
//    4   5
//   / \
//  1   2
//     /
//    0
// Given tree t:
//    4
//   / \
//  1   2
// Return false.


//Using a recursive function, we check for valid sub trees as we traverse the tree with preorder depth first
//I do think the variables passed in should be changed. t is the subtree, and s is the main tree. This seems backwards to me, but it follows the leet code problem set. Keep that in mind when reading the code.

const isSubtree = (s, t) => {
  // given a node, returns whether they are the same, this is the recursive function that is called in the depth first function
  let isSame = (node1, node2) => {
    if (!node1 && !node2) return true;
    if (!node1 || !node2 || node1.val != node2.val) return false;
    return isSame(node1.left, node2.left) && isSame(node1.right, node2.right);
  }

  // whether t is a subtree of the given node
  let depthFirstSearch = node => {
    if (!node) return false;
    if (node.val == t.val && isSame(node, t)) {
      return true;
    }
    return depthFirstSearch(node.left) || depthFirstSearch(node.right);
  }
  return depthFirstSearch(s);
};