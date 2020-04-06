'use strict';

// Group Anagrams
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

//Big O space: O(n) We use a hash map to store the anagrams from the original array of strings.
//Big O time: O(n) We use a single loop to split and sort our string, then add them to the hash map.

const groupAnagrams = strs => {
  // for each word, sort the letters and store in map
  // extract the list from the map and return result

  let anaMap = {};
  for (let string of strs) {
    let sortedString = string.split('').sort().join('');
    if (anaMap[sortedString]) anaMap[sortedString].push(string);
    else anaMap[sortedString] = [string];
  }
  return Object.values(anaMap);
};
