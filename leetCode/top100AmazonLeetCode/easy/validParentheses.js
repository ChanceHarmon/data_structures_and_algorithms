'use strict';

// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Big O space: O(n) while it technically is 2n because we are using two outside structures, this reduces down to n
//Big O time: O(n) while we do have constant look up time, the worst case we have to traverse the whole string to prove true


const isValid = s => {
  //since we are told the string only has characters of the brackets,it needs to be even length or it is false
  //if it was a random string you would not need this check, it would give a false return of false
  if (s.length % 2 !== 0) {
    return false;
  }

  //convert string to char array
  let characters = s.split('');

  //stack
  let stack = [];

  //initializing our hash map
  //setting our keys to open brackets with a value of the proper closing bracket

  let bracketMap = new Map();
  bracketMap.set('(', ')');
  bracketMap.set('{', '}');
  bracketMap.set('[', ']');

  //iterate through the char array

  for (let i = 0; i < characters.length; i++) {
    //find if the char is opening by checking if that key exists in the look up map
    if (bracketMap.has(characters[i])) {
      //push opening bracket
      stack.push(characters[i]);
    } else if (bracketMap.get(stack[stack.length - 1]) === characters[i]) {//otherwise closing has to match with Stack's last entry 
      stack.pop(); //eliminate the matching bracket from the stack and continue 
    }
  }
  if (stack.length === 0) return true; //at the end of the iteration, stack should be empty

  return false; //otherwise it's false
};