'use strict';

import SinglyLinkedList from '../../dataStructures/singleLinkedList/singleLinkedListClass';

// Rotate a given single linked list by k amount of times
//input = (list, k), or (head, k)
//list = 1, 2, 3, 4, 5, null
//k = 3
//expected output = 3, 4, 5, 1, 2 , null


//Big O space:O(1), we are not creating a new structure, constant space
//Big O time:O(n), Linear based on the length of the list

const rotateLinkedList = (head, k) => {
  // checking for edge cases
  if (head === null || head.next === null || k === 0) return head;

  let length = 0;
  let current = head;
  let tail = null;
  // here we are making the list a close ring, and getting our length for the given list
  while (current) {
    length++;
    if (current.next === null) tail = current;
    current = current.next;
  }
  // here we are checking for if k >= n
  //if the result is 0, then we return the head
  k = k % length;
  if (k === 0) return head;
  let newHead = head;
  //here we are moving through the list to the new head
  for (let i = 1; i < length - k; i++) {
    newHead = newHead.next;
  }
  // now we assigning the new tail to point to null and break out of the ring
  tail.next = head;
  head = newHead.next;
  newHead.next = null
  return head;
};
//const newList = new SinglyLinkedList();
//newlist.push(1)
//newlist.push(2)
//newlist.push(3)
//newlist.push(4)
//newlist.push(5)
//rotateLinkedList(newList, 3)