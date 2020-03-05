'use strict';

// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

//Big O space: O(n), we will have as many stack frames as the two lists have combined elements, before we ever return
//Big O time: O(n) beacuse we will exactly the number of recursive calls we we have elements in the two lists

const mergeTwoLists = (l1, l2) => {
  //checking for edge cases
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  //we need to compare first values in each list
  // this way we know that the list we are creating in place will be properly sorted after the merge
  //recursivly checking and calling it self until either list is empty, if one is empty we know the rest of the other list is sorted by default, because the lists were sorted when they were given to us
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }

};