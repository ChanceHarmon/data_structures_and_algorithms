'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

Write a function named countNumberOfElements that, given an array as input, uses reduce to count the number of elements in the array.

Note: You may not use the array's built-in length property.
------------------------------------------------------------------------------------------------ */

const countNumberOfElements = (arr) => {
  return arr.reduce(function (accumulator, value, idx) {
    accumulator = idx + 1;
    return accumulator;
  }, 0);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named returnNames that, given the Star Wars data, below, uses reduce to return an array containing the names of the characters.
------------------------------------------------------------------------------------------------ */

let starWarsData = [{
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
},
{
  name: 'C-3PO',
  height: '167',
  mass: '75',
  hair_color: 'n/a',
  skin_color: 'gold',
  eye_color: 'yellow',
  birth_year: '112BBY',
  gender: 'n/a'
},
{
  name: 'R2-D2',
  height: '96',
  mass: '32',
  hair_color: 'n/a',
  skin_color: 'white, blue',
  eye_color: 'red',
  birth_year: '33BBY',
  gender: 'n/a'
},
{
  name: 'Darth Vader',
  height: '202',
  mass: '136',
  hair_color: 'none',
  skin_color: 'white',
  eye_color: 'yellow',
  birth_year: '41.9BBY',
  gender: 'male'
},
{
  name: 'Leia Organa',
  height: '150',
  mass: '49',
  hair_color: 'brown',
  skin_color: 'light',
  eye_color: 'brown',
  birth_year: '19BBY',
  gender: 'female'
}];

const returnNames = (arr) => {
  let names = arr.reduce((accumulator, value, idx) => {
    accumulator[idx] = value.name;
    return accumulator;
  }, {});
  return Object.values(names);
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named reversedString that takes in a string and returns a string with the letters in reverse order.

Note: You must use reduce for this challenge. You may not use the built-in .reverse() string method.
------------------------------------------------------------------------------------------------ */

const reversedString = (arr) => {
  const result = arr.split('').reduce((elements, value) => {
    elements.unshift(value);
    return elements;
  }, []).join('');
  return result;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named countNumberOfChildren that, given the array of characters, below, uses reduce to return the total number of children in the data set.
------------------------------------------------------------------------------------------------ */

const characters = [
  {
    name: 'Eddard',
    spouse: 'Catelyn',
    children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
    house: 'Stark',
  },
  {
    name: 'Jon',
    spouse: 'Lysa',
    children: ['Robin'],
    house: 'Arryn',
  },
  {
    name: 'Cersei',
    spouse: 'Robert',
    children: ['Joffrey', 'Myrcella', 'Tommen'],
    house: 'Lannister',
  },
  {
    name: 'Daenarys',
    spouse: 'Khal Drogo',
    children: ['Drogon', 'Rhaegal', 'Viserion'],
    house: 'Targaryen',
  },
  {
    name: 'Mace',
    spouse: 'Alerie',
    children: ['Margaery', 'Loras'],
    house: 'Tyrell',
  },
  {
    name: 'Sansa',
    spouse: 'Tyrion',
    house: 'Stark',
  },
  {
    name: 'Jon',
    spouse: null,
    house: 'Snow',
  },
];

const countNumberOfChildren = (arr) => arr.reduce((elements, value) => {
  if (value.children) {
    elements += value.children.length;
  }
  return elements;
}, 0);



/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function that, given an array of numbers as input, uses reduce to calculate the array's average value.

Hint: The accumulator should begin as { count: 0, sum: 0 }
------------------------------------------------------------------------------------------------ */

const calculateAverage = (arr) => {
  let total = arr.reduce(function (accumulator, value, idx) {
    accumulator = accumulator + value;
    return accumulator;
  }, 0);
  return total / (arr.length)
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6

Write a function named countPrimeNumbers that, given an array elements as input, uses reduce to count the number of elements that are prime numbers.

You are welcome to use the provided isPrime function.
------------------------------------------------------------------------------------------------ */

const isPrime = (value) => {
  for (let i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return value > 1;
};

const countPrimeNumbers = (arr) => arr.reduce((elements, value) => {

  if (isPrime(value)) {
    elements++;
  }
  return elements;
}, 0);

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

Write a function named extractState that, given the snorlaxData, below, uses reduce to return the object whose 'name' property matches the given string.

If the input array does not have a stat with that specific name, the function should return null.
------------------------------------------------------------------------------------------------ */

const snorlaxData = {
  stats: [
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/6/',
        name: 'speed',
      },
      effort: 5,
      baseStat: 30,
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/5/',
        name: 'special-defense',
      },
      effort: 2,
      baseStat: 110,
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/4/',
        name: 'special-attack',
      },
      effort: 9,
      baseStat: 65,
    },
  ],
  name: 'snorlax',
  weight: 4600,
};

const extractStat = (statName, arr) => {
  return arr.reduce((accumulator, element) => {
    if (statName === element.stat.name) {
      accumulator = element;
    }
    return accumulator;
  }, 0);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal

Write a function named extractChildren that, given the array of characters from challenge 4, accomplishes the following:

1) Uses filter to return an array of the characters that contain the letter 'a' in their name

2) Then, uses reduce to return an array of all the children's names in the filtered array
------------------------------------------------------------------------------------------------ */
const extractChildren = (arr) => {
  let returnArray = [];
  const firstFilter = (value) => {
    if (value.name.match(/a/gi)) {
      returnArray.push(value.name)
    }
  }
  const secondFilter = (value) => {
    if (value.spouse === null) return -1;
    else if (value.spouse.match(/a/gi)) {
      returnArray.push(value.spouse)
    }
  }
  const thirdFilter = (value) => {
    let kids = value.children;
    if (kids === undefined) return -1
    for (let i = 0; i < kids.length; i++) {
      if (kids[i].match(/a/gi)) {
        returnArray.push(kids[i])
      }
    }
  }

  arr.filter(firstFilter)
  arr.filter(secondFilter)
  arr.filter(thirdFilter)

  //This whole next function should be reduce, not triple nested loops
  let finishForASec = [];

  const isChild = (value, arr) => {
    for (let i = 0; i < value.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (value[i] === arr[j].name) {
          if (arr[j].children === undefined) return -1;
          for (let k = 0; k < arr[j].children.length; k++) {
            finishForASec.push(arr[j].children[k])
          }
        }
      }
    }
    return finishForASec;
  }
  isChild(returnArray, arr);
}
extractChildren(characters)

//I don't believe this is correct, because the problem says that ALL characters are to be in the filtered array, not just the first name of the house hold. Am I wrong?

// const extractChildren = (arr) => {
//   
//   return arr.filter(character => character.name.indexOf('a') >= 0).reduce((accumulator, current) => {
//     if (current.children) {
//       return accumulator.concat(current.children);
//     }
//     return accumulator;
//   }, []);
//   
// };

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-09.test.js
------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should return the length of the array', () => {
    expect(countNumberOfElements([1, 2, 3, 4, 5])).toStrictEqual(5);
  });
});

describe('Testing challenge 2', () => {
  test('It should return an array continaing the names of the characters', () => {
    expect(returnNames(starWarsData)).toStrictEqual(['Luke Skywalker', 'C-3PO', 'R2-D2', 'Darth Vader', 'Leia Organa']);
    expect(returnNames(starWarsData).length).toStrictEqual(5);
  });
});

describe('Testing challenge 3', () => {
  test('It should return the string with the characters in reverse order', () => {
    expect(reversedString('Code 301')).toStrictEqual('103 edoC');
  });
});

describe('Testing challenge 4', () => {
  test('It should return the total number of children', () => {
    expect(countNumberOfChildren(characters)).toStrictEqual(14);
  });
});

describe('Testing challenge 5', () => {
  test('It should return the average of the numbers in the array', () => {
    expect(calculateAverage([18, 290, 37, 4, 55, 16, 7, 85])).toStrictEqual(64);
  });
});

describe('Testing challenge 6', () => {
  test('It should return a count of the prime numbers in the array', () => {
    expect(countPrimeNumbers([1, 2, 13, 64, 45, 56, 17, 8])).toStrictEqual(3);
  });
});

describe('Testing challenge 7', () => {
  test('It should return any stats that match the input', () => {
    expect(extractStat('speed', snorlaxData.stats)).toStrictEqual({ stat: { url: 'https://pokeapi.co/api/v2/stat/6/', name: 'speed' }, effort: 5, baseStat: 30 });
  });
});

describe('Testing challenge 8', () => {
  test('It should return an array containing the names of the children', () => {
    expect(extractChildren(characters)).toStrictEqual(['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon', 'Drogon', 'Rhaegal', 'Viserion', 'Margaery', 'Loras']);
    expect(extractChildren(characters).length).toStrictEqual(10);
  });
});