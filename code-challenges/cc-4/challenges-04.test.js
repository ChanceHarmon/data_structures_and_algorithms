'use strict';
//Testing github key

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

Write a function named isNum that takes in a string or number of any length. This function should use a regular expression pattern to return true if the input contains a number, and false if the input does not contain a number.

For example:
12345 returns true
'12345' returns true
'h3llo world' returns true
'hello world' returns false
------------------------------------------------------------------------------------------------ */

const isNum = (input) => {

  return input.toString().match(/\d/) ? 1 : 0;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named isCapitalized that takes in a string. This function should use a regular expression pattern to match all words that begin with a capital letter.

Return an array containing all the matches.
------------------------------------------------------------------------------------------------ */

//Old test cases
// const isCapitalized = (str) => {
//   let arr = str.match(/([A-Z][a-z]*)/g);
//   return arr;
// };

//New test cases may 2020
const isCapitalized = str => {
  let regex = /[A-Z][a-zA-Z]*/g;
  let capitals = str.match(regex);
  return capitals || [];
}

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named citiesAtoJ that takes in an array of city names and uses a regular expression pattern to return a new array containing any cities that begin with the letters A through J, inclusive.
------------------------------------------------------------------------------------------------ */
let cities = ['Cleveland', 'San Diego', 'Birmingham', 'Seattle', 'Miami', 'New York City', 'Omaha', 'Portland', 'Austin', 'Boston', 'Newport Beach', 'Hoboken'];

const citiesAtoJ = (arr) => {
  let newArr = [];

  arr.forEach((cities) => {
    let regex = /^[A-J]/g;
    // let test = regex.test(cities)
    if (regex.test(cities)) {
      newArr.push(cities);
    }
    // console.log('in loop', regex.test(cities))

  });
  console.log(newArr)
  return newArr;

};
citiesAtoJ(cities)






/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

You have created a game application and begin by asking users an easy question: In which month is Halloween?

Write a function named matchMonth which uses a regular expression pattern to match any of these inputs: October, Oct, october, oct

If the user enters any of these four inputs, return true. For any other input, return false.

Do not use the vertical bar (pipe) in your pattern.
------------------------------------------------------------------------------------------------ */

const matchMonth = (input) => {


  if (input.toString().match(/^[oO]ct(ober)?$/g)) {
    return true;
  } else {
    return false;
  }
};






/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named noPunctuation that contains a regular expression pattern to find all of the words that contain a space immediately at the end of the word. Return an array of all such words, still containing the space at the end.

For example, if given the string "Hello, and have a wonderful day!", the word "Hello, " would not be returned because it is immediately followed by a comma. The word "day!" would not be returned because it is immediately followed by an exclamation point.

The expected output of "Hello, and have a wonderful day!" is ["and ", "have ", "a ", "wonderful "].
------------------------------------------------------------------------------------------------ */

const noPunctuation = str => str.match(/[\w]*[\w][$ ]/g);


/* ------------------------------------------------------------------------------------------------
CHALLENGE 6

You want to teach a friend how to play hangman and want to show them using a partially complete puzzle.

Write a function named hangman which uses the replace method to remove all of the vowels (a, e, i, o, u) from the hangman string and replace them with an underscore.

The function should return a string containing the consonants in their original positions and underscores where the vowels were previously located.

For example, 'Welcome to Code 301!' will return 'W_lc_m_ t_ C_d_ 301!'.
------------------------------------------------------------------------------------------------ */

let hangman = (str) => str.replace(/[aeiouAEIOU]/g, '_');



/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

Write a function named findShells that takes in the string below and uses a regular expression pattern to find all instances of the following words: "sells", "shells", "seashells".

Do not use the vertical bar (pipe) character.

Hint: All of these words end with the letters "ells".
------------------------------------------------------------------------------------------------ */

const seashells = 'She sells seashells by the seashore. The shells she sells are surely seashells. So if she sells shells on the seashore, I\'m sure she sells seashore shells.';

const findShells = str => str.match(/(sea)?(s)(h)?(ells)/g);

// const findShells = (str) => {

//   let shellPattern = /\b([A-Za-z]*ells)\b/g;
//   return str.match(shellPattern);

// };

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-04.solution.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should return true if the input is a number', () => {
    expect(isNum(1234567890)).toBeTruthy();
    expect(isNum('12345')).toBeTruthy();
  });
  test('It should return true if the input contains a number', () => {
    expect(isNum('h3llo w0rld')).toBeTruthy();
  });
  test('It should return false if the input does not contain a number', () => {
    expect(isNum('hello world')).toBeFalsy();
    expect(isNum('')).toBeFalsy();
  });
});

describe('Testing challenge 2', () => {
  test('It should only return words that begin with a capital letter', () => {
    const capitalResult = isCapitalized('We only want to Return the Words that begin With a capital Letter');

    expect(capitalResult).toStrictEqual(['We', 'Return', 'Words', 'With', 'Letter']);
    expect(capitalResult.length).toStrictEqual(5);
  });
});

describe('Testing challenge 3', () => {
  let cities = ['Cleveland', 'San Diego', 'Birmingham', 'Seattle', 'Miami', 'New York City', 'Omaha', 'Portland', 'Austin', 'Boston', 'Newport Beach', 'Hoboken'];

  test('It should return the cities whose names begin with the letters A through J', () => {
    expect(citiesAtoJ(cities)).toContain('Cleveland', 'Birmingham', 'Austin', 'Boston', 'Hoboken');
    expect(citiesAtoJ(cities).length).toStrictEqual(5);
  });

  test('It should not return the cities whose names begin with the letters K through Z', () => {
    expect(citiesAtoJ(cities)).not.toContain('San Diego', 'Seattle', 'Miami', 'New York City', 'Omaha', 'Portland', 'Newport Beach');
  });
});

describe('Testing challenge 4', () => {
  test('It should match any of the acceptable inputs', () => {
    expect(matchMonth('Oct')).toBeTruthy();
    expect(matchMonth('oct')).toBeTruthy();
    expect(matchMonth('October')).toBeTruthy();
    expect(matchMonth('october')).toBeTruthy();
  });

  test('It should not match anything other than the acceptable inputs', () => {
    expect(matchMonth('November')).toBeFalsy();
    expect(matchMonth('nov')).toBeFalsy();
    expect(matchMonth(123)).toBeFalsy();
    expect(matchMonth('octob')).toBeFalsy();
    expect(matchMonth('OCTOBER')).toBeFalsy();
    expect(matchMonth('notOctober')).toBeFalsy();
  });
});

describe('Testing challenge 5', () => {
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia vel massa sed egestas. Nunc faucibus iaculis elit, a scelerisque enim condimentum sed. Aenean ac scelerisque sem, et pharetra diam.';

  test('It should only return words that are immediately followed by a space', () => {
    expect(noPunctuation(lorem)).toStrictEqual(['Lorem ', 'ipsum ', 'dolor ', 'sit ', 'consectetur ', 'adipiscing ', 'Cras ', 'lacinia ', 'vel ', 'massa ', 'sed ', 'Nunc ', 'faucibus ', 'iaculis ', 'a ', 'scelerisque ', 'enim ', 'condimentum ', 'Aenean ', 'ac ', 'scelerisque ', 'et ', 'pharetra ']);
    expect(noPunctuation(lorem).length).toStrictEqual(23);
  });

  test('It should not contain words that are followed by any non-space character', () => {
    expect(noPunctuation(lorem)).not.toContain(['amet,', 'elit.', 'egestas.', 'elit,', 'sed.', 'sem,', 'diam.', 'nibh.', 'porttitor.', 'euismod,', 'ultrices.', 'massa,', 'vel,', 'purus.', 'purus,', 'odio.', 'aliquet,', 'non,', 'sem.']);
  });
});

describe('Testing challenge 6', () => {
  let startString = 'This is a regex challenge. We are trying to create a hangman phrase where all of the vowels are missing!';

  test('It should remove the vowels from the hangman string and replace them with underscores', () => {
    expect(hangman(startString)).toStrictEqual('Th_s _s _ r_g_x ch_ll_ng_. W_ _r_ try_ng t_ cr__t_ _ h_ngm_n phr_s_ wh_r_ _ll _f th_ v_w_ls _r_ m_ss_ng!');
  });

  test('It should not contain the letters "a", "e", "i", "o", or "u"', () => {
    expect(hangman(startString)).not.toContain('a', 'e', 'i', 'o', 'u');
  });
});

describe('Testing challenge 7', () => {
  test('It should return an array of instances of "sells", shells", and "seashells"', () => {
    expect(findShells(seashells)).toStrictEqual(['sells', 'seashells', 'shells', 'sells', 'seashells', 'sells', 'shells', 'sells', 'shells']);
    expect(findShells(seashells).length).toStrictEqual(9);
  });
});