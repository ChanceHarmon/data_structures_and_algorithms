'use strict';

// Add Two Numbers

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

//Big O space: O(n) We create a new single linked list for our return. 
//Big O time: O(n) By adding the values 'vertically' before giving our new node a value, we can build our list in a single loop.

//(2 -> 4 -> 3) 
// +    +    +
//(5 -> 6 -> 4)
// #    #    #
//(7 -> 0 -> 8)

//If the value is 10 or greater, we get the remainder in a single digit.


const addTwoNumbers = (l1, l2) => {

  if (l1 === null) return l2;
  if (l2 === null) return l1;

  let head = new ListNode(null);
  let pointer = head;
  let temp = 0;
  while (l2 !== null || l1 !== null || temp > 0) {

    pointer.next = new ListNode(null);
    pointer = pointer.next;

    if (l1 !== null) {
      temp += l1.val;
      l1 = l1.next;
      console.log('temp at l1', temp)
    }
    if (l2 !== null) {
      temp += l2.val;
      l2 = l2.next;
      console.log('temp at l2', temp)
    }
    console.log('pointer.val before modulo', pointer.val)
    pointer.val = temp % 10;
    console.log('pointer.val', pointer.val)
    temp = parseInt(temp / 10);
    console.log('temp', temp);
  }
  return head.next;
};


// Run Code Result:
// Your input
// [2,4,3]
// [5,6,4]
// Your stdout
// temp at l1 2
// temp at l2 7
// pointer.val before modulo null
// pointer.val 7
// temp 0
// temp at l1 4
// temp at l2 10
// pointer.val before modulo null
// pointer.val 0
// temp 1
// temp at l1 4
// temp at l2 8
// pointer.val before modulo null
// pointer.val 8
// temp 0

// Your answer
// [7,0,8]
// Expected answer
// [7,0,8]
// Runtime: 56 ms