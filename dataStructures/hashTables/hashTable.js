'use strict';

//Also known as a hash map

//Basic Hash functions with strings
const hash = (key, length) => {
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % length;
  }
  return total;
}

//Refactored for speed and collision reduction
//Using prime numbers for length helps decrease collisions, also adding in the random prime in the hash helps make the hash more unique to the key.
//31 is an arbiturary number, any size prime number will help, it's like the SECRET in the ENV for JWT and Auth
const hash = (key, length) => {
  let total = 0;
  let hashPrime = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * hashPrime + value) % length;
  }
  return total;
}


//Big O Insert, remove, and access are O(1)
//This class uses seperate chaining to handle collisions, not linear probing
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let hashPrime = 101;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * hashPrime + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];//1 is the value of the key
        }
      }
    }
    return false;
  }
  keys() {
    let keysArray = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; i++) {
          if (!keysArray.includes(this.keyMap[i][j][0])) {
            keysArray.push(this.keyMap[i][j][0])
          }
        }
      }
    }
    return keysArray;
  }
  values() {
    let valuesArray = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; i++) {
          if (!valuesArray.includes(this.keyMap[i][j][1])) {
            valuesArray.push(this.keyMap[i][j][1])
          }
        }
      }
    }
    return valuesArray;
  }
}