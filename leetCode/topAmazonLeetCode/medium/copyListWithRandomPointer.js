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

//I did a lot of research on this problem. I intially started with the idea of pushing mini arrays into a return array. This works fine for some cases, but when it starts to reference random that doesn't have a null value, it gets strange in the access of the random node. The solution is more referencing the index of where random points. That was the part I was missing. So after watching a few videos on how this solution works, I am happy just to understand it.

const copyRandomList = head => {
  let nodeMap = new Map();
  let newHead = new Node(null, null, null);
  let pre = newHead;

  /** First pass:
   * 1. copy the node
   * 2. set the next pointer as original node list
   * 3. set the random pointer as original node list
   * 4. create a hashmap between the new and old nodes
   */
  while (head) {
    let newNode = new Node(head.val, null, head.random); // #1 & #3
    pre.next = newNode; // #2
    pre = newNode;
    nodeMap.set(head, newNode); // #4
    head = head.next;
  }
  /** Second pass:
   * 1. find the old random node thorugh random pointer
   * 2. get the new random node through the hashmap
   * 3. update the pointer
   */
  let start = newHead.next;
  while (start) {
    let oldRandom = start.random; // #1
    let newRandom = nodeMap.get(oldRandom); // #2
    start.random = newRandom; // #3
    start = start.next;
  }
  return newHead.next;
};