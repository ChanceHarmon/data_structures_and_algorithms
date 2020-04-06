'use strict';

// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:

// A linked list can be reversed either iteratively or recursively. Could you implement both?



//Iterative

const reverseList = head => {
  let previous = null;
  while (head) {
    let next = head.next;
    let current = head;
    current.next = previous;
    head = next;
    previous = current;
  }
  return previous;
};

//Recursive

const reverseList = (head, previous = null) => {
  if (!head) return null;
  const next = reverseList(head.next, head);
  head.next = previous;
  return next || head;
};