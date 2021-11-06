'use strict';

// Reverse Integer

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).


// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
// Example 4:

// Input: x = 0
// Output: 0

// Constraints:

// -2^31 <= x <= 2^31

// Big O time: O(n) We maintain a single loop with all other conditionals being single operations.
// Big O space: O(n) We use a few variables to store the cumulative return, best case is 0 and we we are at O(1)

const reverse = x => {

    let temp = x.toString()
    let flag = temp[0] === 'i' ? 1 : 0
    let final = ''
    if (temp[0] === '-') {
        final += '-'
        flag = 1
    }
    for (let i = temp.length - 1; i >= flag; i--) {
        final += temp[i]
    }
    final = parseInt(final)

    if (final < Math.pow(-2, 31) || final > Math.pow(2, 31)) return 0
    else return final
};