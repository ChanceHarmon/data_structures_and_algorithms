'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

Write a function named getCourseKeys that takes in the courseInfo object and returns an array containing the keys for the courseInfo object.

For example: (['name', 'duration', 'topics', 'finalExam']).
------------------------------------------------------------------------------------------------ */

const courseInfo = {
  name: 'Code 301', duration: { dayTrack: '4 weeks', eveningTrack: '8 weeks' },
  topics: ['SMACSS', 'APIs', 'NodeJS', 'SQL', 'jQuery', 'functional programming'],
  finalExam: true
};

const getCourseKeys = (obj) => {
  return Object.keys(obj);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2
Use the characters data below for the remainder of the challenges.

Write a function named getHouses that returns a new array containing the names of all of the houses in the data set.
------------------------------------------------------------------------------------------------ */

let characters = [
  {
    name: 'Eddard',
    spouse: 'Catelyn',
    children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
    house: 'Stark'
  },
  {
    name: 'Jon A.',
    spouse: 'Lysa',
    children: ['Robin'],
    house: 'Arryn'
  },
  {
    name: 'Cersei',
    spouse: 'Robert',
    children: ['Joffrey', 'Myrcella', 'Tommen'],
    house: 'Lannister'
  },
  {
    name: 'Daenarys',
    spouse: 'Khal Drogo',
    children: ['Drogon', 'Rhaegal', 'Viserion'],
    house: 'Targaryen'
  },
  {
    name: 'Mace',
    spouse: 'Alerie',
    children: ['Margaery', 'Loras'],
    house: 'Tyrell'
  },
  {
    name: 'Sansa',
    spouse: 'Tyrion',
    children: [],
    house: 'Stark'
  },
  {
    name: 'Jon S.',
    spouse: null,
    children: [],
    house: 'Snow'
  }
];

const getHouses = (arr) => {
  let houses = [];

  Object.values(arr).forEach((person) => {
    houses.push(person.house)
  })
  return houses;
};

/*------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named hasChildrenValues that uses Object.values to determine if any given character in the data set has children.

This function should take in an array of data and a character name and return a Boolean.

For example:
hasChildrenValues(characters, 'Cersei') will return true
hasChildrenValues(characters, 'Eddard') will return false
------------------------------------------------------------------------------------------------ */

const hasChildrenValues = (arr, character) => {
  let kids;
  arr.forEach(obj => {
    if (Object.values(obj)[0] === character && Object.values(obj)[2].length !== 0) {
      kids = true;
    } else if (Object.values(obj)[0] === character && Object.values(obj)[2].length === 0) {
      kids = false;
    }
  })
  return (kids);

};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named hasChildrenEntries that is similar to your hasChildrenValues function from challenge 3, but uses the data's entries instead of its values.

The input and output of this function are the same as the input and output from challenge 3.
------------------------------------------------------------------------------------------------ */

const hasChildrenEntries = (arr, character) => {

  let kids;
  arr.forEach(obj => {
    if (Object.entries(obj)[0][1] === character && Object.entries(obj)[2][1].length !== 0) {
      kids = true;
    } else if (Object.entries(obj)[0][1] === character && Object.entries(obj)[2][1].length === 0) {
      kids = false;
    }
  })
  return (kids);
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named totalCharacters that takes in an array and returns the number of characters in the array.
------------------------------------------------------------------------------------------------ */

const totalCharacters = (arr) => {
  let characterCount = 0;
  Object.values(arr).map((element) => {
    if (element.name) {
      characterCount++;
    } if (element.spouse) {
      characterCount++;
    } if (element.children.length > 0) {
      characterCount += element.children.length;
    }
  })
  return characterCount;
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 6 - Stretch Goal

Write a function named houseSize that takes in the array of characters and creates an object for each house containing the name of the house and the number of members.

All of these objects should be added to an array named "sizes". Return the "sizes" array from the function.

For example: [{ house: 'Stark', members: 7 }, { house: 'Arryn', members: 3 }, ... ].
------------------------------------------------------------------------------------------------ */
// Image.all.forEach(image => {
//   $('#image-container').append(image.render());
// });

// let characters = [
//   {
//     name: 'Eddard',
//     spouse: 'Catelyn',
//     children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
//     house: 'Stark'
//   },
//   {
//     name: 'Jon A.',
//     spouse: 'Lysa',
//     children: ['Robin'],
//     house: 'Arryn'
//   },
//   {
//     name: 'Cersei',
//     spouse: 'Robert',
//     children: ['Joffrey', 'Myrcella', 'Tommen'],
//     house: 'Lannister'
//   },
//   {
//     name: 'Daenarys',
//     spouse: 'Khal Drogo',
//     children: ['Drogon', 'Rhaegal', 'Viserion'],
//     house: 'Targaryen'
//   },
//   {
//     name: 'Mace',
//     spouse: 'Alerie',
//     children: ['Margaery', 'Loras'],
//     house: 'Tyrell'
//   },
//   {
//     name: 'Sansa',
//     spouse: 'Tyrion',
//     children: [],
//     house: 'Stark'
//   },
//   {
//     name: 'Jon S.',
//     spouse: null,
//     children: [],
//     house: 'Snow'
//   }
// ];
let sizes = [];
const houseSize = (arr) => {
  const sort = (item) => {
    let result = [item.house, item.spouse].join(' ');
    return result;
  }
  //TODO So fairly lost on this as a drunk point. I know I need to basically turh earch object instance to an array index. Once I can get that I can then start to filter out the values I want, but sizes array is proving difficult without just hack arounds for console logs, nothing reallt worth it. So I have a ton of corpse code around it for ideas to research, just burnt for the night 

  const helper = () => {
    sizes.push(arr.map(sort));
  }
  return sizes.push(helper);
  // function getFullName(item) {
  //   var fullname = [item.firstname,item.lastname].join(" ");
  //   return fullname;
  // }
  // function myFunction() {
  //   document.getElementById("demo").innerHTML = persons.map(getFullName);
  // }

};

//console.log((houseSize(characters)))
// let kvArray = [{key: 1, value: 10}, 
//   {key: 2, value: 20}, 
//   {key: 3, value: 30}]

// let reformattedArray = kvArray.map(obj => {
// let rObj = {}
// rObj[obj.key] = obj.value
// return rObj
// })
// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}], 

// kvArray is still: 
// [{key: 1, value: 10}, 
//  {key: 2, value: 20}, 
//  {key: 3, value: 30}]

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

As fans are well aware, "When you play the game of thrones, you win or you die. There is no middle ground."

We will assume that Alerie Tyrell is deceased. She missed her daughter's wedding. Twice.

Write a function named houseSurvivors. You may modify your houseSize function from challenge 6 to use as the basis of this function.

This function should create an object for each house containing the name of the house and the number of members. If the spouse is deceased, do not include him/her in the total number of family members.

All of these objects should be added to an array named "survivors". Return the "survivors" array from the function.

For example: [ { house: 'Stark', members: 6 }, { house: 'Arryn', members: 2 }, ... ].
------------------------------------------------------------------------------------------------ */

const deceasedSpouses = ['Catelyn', 'Lysa', 'Robert', 'Khal Drogo', 'Alerie'];

const houseSurvivors = (arr) => {
  const survivors = [];
  // Solution code here...
  return survivors;
};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-06.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should return the keys from an object', () => {
    expect(getCourseKeys(courseInfo)).toStrictEqual(['name', 'duration', 'topics', 'finalExam']);
  });
});

describe('Testing challenge 2', () => {
  test('It should return an array of the names of the houses', () => {
    expect(getHouses(characters)).toStrictEqual(['Stark', 'Arryn', 'Lannister', 'Targaryen', 'Tyrell', 'Stark', 'Snow']);
    expect(getHouses(characters).length).toStrictEqual(7);
  });
});

describe('Testing challenge 3', () => {
  test('It should return true for characters that have children', () => {
    expect(hasChildrenValues(characters, 'Daenarys')).toBeTruthy();
  });

  test('It should return false to characters who do not have children', () => {
    expect(hasChildrenValues(characters, 'Sansa')).toBeFalsy();
  });
});

describe('Testing challenge 4', () => {
  test('It should return true for characters that have children', () => {
    expect(hasChildrenEntries(characters, 'Eddard')).toBeTruthy();
  });

  test('It should return false to characters who do not have children', () => {
    expect(hasChildrenEntries(characters, 'Jon S.')).toBeFalsy();
  });
});

describe('Testing challenge 5', () => {
  test('It should return the number of characters in the array', () => {
    expect(totalCharacters(characters)).toStrictEqual(27);
  });
});

describe('Testing challenge 6', () => {
  test('It should return an object for each house containing the name and size', () => {
    expect(houseSize(characters)).toStrictEqual([{ house: 'Stark', members: 7 }, { house: 'Arryn', members: 3 }, { house: 'Lannister', members: 5 }, { house: 'Targaryen', members: 5 }, { house: 'Tyrell', members: 4 }, { house: 'Stark', members: 2 }, { house: 'Snow', members: 1 }]);
    expect(houseSize(characters).length).toStrictEqual(7);
  });
});

describe('Testing challenge 7', () => {
  test('It should not include any deceased spouses', () => {
    expect(houseSurvivors(characters)).toStrictEqual([{ house: 'Stark', members: 6 }, { house: 'Arryn', members: 2 }, { house: 'Lannister', members: 4 }, { house: 'Targaryen', members: 4 }, { house: 'Tyrell', members: 3 }, { house: 'Stark', members: 2 }, { house: 'Snow', members: 1 }]);
  });
});