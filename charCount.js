'use strict';

//Only for alphanumeric values, to lowercase. No spacing or punctuation

const characterCount = str => {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let character = str[i].toLowerCase();
    if (/[a-z0-9]/.test(character)) {
      if (obj[character] > 0) {
        obj[character]++;
      } else {
        obj[character] = 1;
      }
    }
  }
  return obj;
}
//refactor of loop and if else statement
const characterCount = str => {
  let obj = {};
  for (let char of str) {
    let character = char.toLowerCase();
    if (/[a-z0-9]/.test(character)) {
      obj[character] = ++obj[character] || 1;
    }
  }
  return obj;
}

//refactor using ascii values intead or regex, requires a helper function, performance is faster

const characterCount = str => {
  let obj = {};
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

const isAlphaNumeric = char => {
  let code = char.charCodeAt();
  if (!(code > 47 && code < 58) && // numeric range
    !(code > 96 && code < 123)) {  // lower case range, code > 64 && code < 91 is Uppercase Range
    return false;
  }
  return true;
}