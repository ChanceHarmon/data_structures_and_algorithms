'use strict';

// First Unique Character in a String

// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.


// Note: You may assume the string contains only lowercase English letters.

/* First thoughts:
  I feel like I have seen this done with a loop and a hashmap, or fancy object for those of you. You loop through the string, check obj if it has a key value for each character, if not set one and have it's value equal index position, if already there, set value to null. 

  After that set is created, check the object for a value of number / not null. Return number else return -1.

  I get that part. 

  That  applies to the idea of if you had to keep track of the all uniques, or something like that, leading to an LRU Cache tool for example. But it just isn't really necessary. It is asking for a single unique character, and a number back. That basically means we know our loop will only run the length of the lowercase alphabet in worst case already. I will not arrange my loop that way, but just a thought.

  I am now wondering why not just set two variables. One equal to an empty string, the other to -1. And in the loop you already fundementally have to do, just check string and update the other variable number at the same time? As soon as the loop finishes you could then just return the variable that kept track of index of unique. No need for an extra object as storage, just two variables to hold a number and a single string character if we do the if else logic correct. 

  Sound better or worse?

  How would you approach this one?

  Nevermind, this only works for if you are checking something like substring, as soon as it changes you would have no reference to anything other than the first letter saved in your temp string. Now I get it. So lets write it!!!
*/

//Another thing to ask is if whitespace counts as a character. I am going to build in logic to account for it, because in reality you should have to know what to do wiith it, it is a character.



/**
 * @param {string} s
 * @return {number}
 */

//input = chance is still up
const firstUniqChar = s => {
  if (s.length === 0) return -1;
  if (s.length === 1) return 0;
  let myHash = new Map();

  for (let i = 0; i < s.length; i++) {
    //console.log(s[i])
    if (myHash.has(`${s[i]}`)) {
      myHash.set(`${s[i]}`, null)
    } else {
      myHash.set(`${s[i]}`, i)
    }
  }
  //console.log(myHash)

  for (const value of myHash) {
    //console.log('in for in', value)
    if (typeof value[1] === 'number') return value[1];
  }
  return -1;

};

// h/ index of 1 should be the correct output


console.log(firstUniqChar('chance is still up'))

//Edge cases
console.log(firstUniqChar(''))
console.log(firstUniqChar('c'))