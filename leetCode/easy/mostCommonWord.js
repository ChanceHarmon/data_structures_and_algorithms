'use strict';

// Given a paragraph and a list of banned words, return the most frequent word that is not in the list of banned words.  It is guaranteed there is at least one word that isn't banned, and that the answer is unique.

// Words in the list of banned words are given in lowercase, and free of punctuation.  Words in the paragraph are not case sensitive.  The answer is in lowercase.

// Example:

// Input: 
// paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
// banned = ["hit"]
// Output: "ball"
// Explanation: 
// "hit" occurs 3 times, but it is a banned word.
// "ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
// Note that words in the paragraph are not case sensitive,
// that punctuation is ignored (even if adjacent to words, such as "ball,"), 
// and that "hit" isn't the answer even though it occurs more because it is banned.

// Note:

// 1 <= paragraph.length <= 1000.
// 0 <= banned.length <= 100.
// 1 <= banned[i].length <= 10.
// The answer is unique, and written in lowercase (even if its occurrences in paragraph may have uppercase symbols, and even if it is a proper noun.)
// paragraph only consists of letters, spaces, or the punctuation symbols !?',;.
// There are no hyphens or hyphenated words.
// Words only consist of letters, never apostrophes or other punctuation symbols.

//Note, this one is tricky, it would pass multiple times, but then fail on submission.
//This was the test case, num 46/47 test cases
//Input:
// "a, a, a, a, b,b,b,c, c"
// ["a"]
// Output:
// "bbbc"
// Expected:
// "b"

//Keep that in mind when solving developing new solutions

//Big O space: O(n) We use two objects to compare words and count 
//Big O time: O(n) We use two loops (forEach twice) but not nested

const mostCommonWord = (paragraph, banned) => {
  //Put our banned list in a map
  let bannedMap = {};
  banned.forEach(ban => bannedMap[ban] = true);
  let max = 0;
  let mostUsedWord;
  //clean up the paragraph
  let words = paragraph.replace(/\W/g, ' ').toLowerCase().split(' ');
  let wordsMap = {};

  words.forEach(word => {
    if (!bannedMap[word] && word !== '') {
      wordsMap[word] ? wordsMap[word] += 1 : wordsMap[word] = 1;
      if (wordsMap[word] > max) {
        max = wordsMap[word];
        mostUsedWord = word;
      }
    }
  });

  return mostUsedWord;

};