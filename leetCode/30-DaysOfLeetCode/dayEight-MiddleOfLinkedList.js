'use strict';

// Given a non-empty, singly linked list with head node head, return a middle node of linked list.

// If there are two middle nodes, return the second middle node.



// Example 1:

// Input: [1,2,3,4,5]
// Output: Node 3 from this list (Serialization: [3,4,5])
// The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
// Note that we returned a ListNode object ans, such that:
// ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
// Example 2:

// Input: [1,2,3,4,5,6]
// Output: Node 4 from this list (Serialization: [4,5,6])
// Since the list has two middle nodes with values 3 and 4, we return the second one.


// Note:

// The number of nodes in the given list will be between 1 and 100.

//Not going to lie, I don't understand the serialization of the output, I am just looking for the middle. It passes, not sure what is on the judging side for serialization.

//We use the runner technique. Using to pointers, one moving twice as fast as the other. So when the pointer than is moving double makes it to the end of the list, the half speed pointer is at the middle node.

//Big O space: O(1) While we assign pointer variables, we are just returning a position, no extra storage and no data structure to return.
//Big O time: O(log n) I think this is right. We don't actually touch each node, the fast pointer is skipping every other node.

const middleNode = head => {
  if (!head.next) return head;
  let runner = head;
  let midPoint = head;
  while (runner !== null && runner.next !== null) {
    runner = runner.next.next
    midPoint = midPoint.next
  }
  return midPoint;
};