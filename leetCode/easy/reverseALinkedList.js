'use strict';

// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:

// A linked list can be reversed either iteratively or recursively. Could you implement both?

//Big O space: O(1) We reverse the list in place, no extra storage.
//Big O time: O(n) For both solutions, Itereative uses a single loop and performs all actions in place, the Recursive solution has no loop, but we are using the callstack so it is still N based on how long the list we are given is.

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