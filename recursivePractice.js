'use strict';

const countDown = num => {
  if (num <= 0) {
    console.log('Finished');
    return;
  }
  console.log(num);
  num--
  countDown(num);
}


const sumRange = num => {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}


//num! Non- recursive
const factorial = num => {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i
  }
  return total;
}

//recursive
const factorial = num => {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

//
//Helper method Recursion
//


const collectOddValues = arr => {
  let result = [];

  const helper = helperInput => {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0])
    }
    helper(helperInput.slice(1))
  }
  helper(arr)
  return result;
}


//
//Pure Recursion
//

const collectOddValues = arr => {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

//return the value of the base to the power of exponent
const power = (base, exponent) => {
  if (exponent === 0) return 1;
  return base * power(exponent - 1);

}

//return the product of an array

const productOfArray = arr => {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

// return num range

const numRange = num => {
  if (num === 0) return 1;
  return num + numRange(num - 1);
}

//Fibonacci

const fibonacci = num => {
  if (num <= 2) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

// reverse string

const reverse = str => {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

// return if a string is a palindrome, true or false

const isPalindrome = str => {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

// use recursion that takes an array and a callback. The function returns true if a single value passes true in the callback function. In this case we can use the collectOddValues function as our callback and have the array be a list of numbers

const testCallBack = (arr, callback) => {
  if (arr.length === 0) return false;
  if (callback(array[0])) return true;
  return testCallBack(array.slice(1), callback);
}

// return a flattend array from a matrix

const flatten = arr => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatten(arr[i]))
    } else {
      newArr.push(arr[i])
    }
  }
  return newArr;
}

// capatilze the first letter of each string in an array

const capFirst = arr => {
  if (arr.length === 1) {
    return [arr[0].toUpperCase()];
  }
  let result = capFirst(arr.slice(0, -1));
  result.push(arr.slice(arr.length - 1)[0].toUpperCase());
  return result;
}

// return the sum of all even numbers in an object. The object may have nested objects

const nestedEvenSum = (obj, sum = 0) => {
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}

// return an array of strings with each string full caps

const fullCaps = arr => {
  if (arr.length === 1) {
    return [arr[0][0].toUpperCase() + arr[0].substr(1)];
  }
  const result = fullCaps(arr.slice(0, -1));
  const string = arr.slice(arr.length - 1)[0][0].toUpperCase() + arr.slice(array.length - 1)[0].substr(1);
  result.push(string);
  return result;
}

// given an object, find all of the numbers and convert to strings

const numToStr = obj => {
  let newObj = {};
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = numToStr(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

// given an object, return an array that has all of the values that were typeof string in the object

const myStrings = obj => {
  let stringsArr = [];

  function gatherStrings(input) {
    for (let key in input) {
      if (typeof input[key] === 'string') {
        stringsArr.push(input[key]);
      }
      else if (typeof input[key] === 'object') {
        return gatherStrings(input[key]);
      }
    }
  }

  gatherStrings(obj);

  return stringsArr;

}

// Same problem, not helper recursion

const myStrings = obj => {
  let stringsArr = [];
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      stringsArr.push(obj[key]);
    }
    else if (typeof obj[key] === 'object') {
      stringsArr = stringsArr.concat(myStrings(obj[key]));
    }
  }

  return stringsArr;
}