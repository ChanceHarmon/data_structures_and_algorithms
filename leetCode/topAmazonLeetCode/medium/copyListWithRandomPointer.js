'use strict';

//I found it next to impossible to give a visual reference for what the examples really mean. I recommend checking out the example on leetcode to see what this really means. I had the problem up on one screen while I worked a solution in my editor.

// Copy List with Random Pointer


// A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

// Return a deep copy of the list.

// The Linked List is represented in the input / output as a list of n nodes.Each node is represented as a pair of[val, random_index] where:

// val: an integer representing Node.val
// random_index: the index of the node(range from 0 to n - 1) where random pointer points to, or null if it does not point to any node.

//   Example 1:

// Input: head = [[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]
// Output: [[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]

// Example 2:

// Input: head = [[1, 1], [2, 1]]
// Output: [[1, 1], [2, 1]]

// Example 3:

// Input: head = []
// Output: []
// Explanation: Given linked list is empty (null pointer), so return null.


/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */


const copyRandomList = head => {

  if (!head) return null;



};