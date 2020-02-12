'use strict';

//The first two equations are based on finding the if the vals in arr1 have a corresponding arr2 val^2
// O(n^2) time, nested loops
const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2) // indexOf is a nested loop
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1)
  }
  return true;
}


// O(n) time, frequency counter implementation
const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let value of arr1) {
    frequencyCounter1[value] = (frequencyCounter1 || 0) + 1
  };
  for (let value of arr2) {
    frequencyCounter2[value] = (frequencyCounter2 || 0) + 1
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

//Anagram challenge

const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  let charSet1 = {};
  let charSet2 = {};
  for (let character of str1) {
    charSet1[character] = (charSet1 || 0) + 1
  };
  for (let character of str1) {
    charSet2[character] = (charSet2 || 0) + 1
  };
  for (let key in charSet1) {
    if (!(key in charSet2)) {
      return false;
    }
    if (charSet2[key] !== charSet1[key]) {
      return false;
    }
  }
  return true;
}

//Anagram Challenge
const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  let charSet1 = {};
  for (let i = 0; i < str1.length; i++) {
    let character = [i];
    charSet1[character] ? charSet1[character] += 1 : charSet1[character] = 1;
  };

  for (let i = 0; i < str2.length; i++) {
    let character = str2[i];
    if (!charSet1[character]) {
      return false
    } else {
      charSet1[character] -= 1;
    }
  }
  return true;
}

//Same Frequency challenge

const sameFrequency = (num1, num2) => {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }

  for (let j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}

//Are there Duplicates Challenge

const areThereDuplicates = () => {
  let collection = {}
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for (let key in collection) {
    if (collection[key] > 1) return true
  }
  return false;
}