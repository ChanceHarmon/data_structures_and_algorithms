'use strict';

// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.



//Plan
// for each word, sort the letters and store in map
// extract the list from the map and return result


//Big O space: O(n) because we are creating a return object/map, and it's size will depend on the length of the given anagram array
//Big O time: O(n) using a return object makes it so we only have to loop once to get a final result, linear time.

const groupAnagrams = strs => {
  //declare our return object
  let anaMap = {};
  //loop through the strings array
  for (let string of strs) {
    //split each string, sort them, then rejoin them to normalize the data
    let sortedString = string.split('').sort().join('');
    //check to see if it is in the return object, if not push it into the object, else add it to the already started list
    if (anaMap[sortedString]) anaMap[sortedString].push(string);
    else anaMap[sortedString] = [string];
  }
  //return the values of our created anagram list
  return Object.values(anaMap);
};