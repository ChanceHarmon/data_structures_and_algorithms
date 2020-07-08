'use strict';

// to learn more about the cheerio library and what it is doing, look at their documentation: https://www.npmjs.com/package/cheerio
const cheerio = require('cheerio');
const Mustache = require('mustache');

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review
Use the characters data below for all of the challenges except challenge 2.
Write a function named templatingWithMustache that uses mustache to create the markup templates for each of the characters. Use the snippet as your guide for creating your templates. Return an array of template strings. Note: this function does not need to actually append the markup to the DOM.
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
    name: 'Euron',
    spouse: null,
    children: [],
    house: 'Greyjoy'
  },
  {
    name: 'Jon S.',
    spouse: null,
    children: [],
    house: 'Snow'
  }
];

let $ = createSnippetWithJQuery(`
<script id="template" type="x-tmpl-mustache">
    <h2> {{ name }} </h2>
    <h3> {{ spouse }} </h3>
    {{#children}}
    * {{.}}
   {{/children}}
    <p> {{ house }} </p>
  </script>
`);

const templatingWithMustache = () => {

  // let newArr = [];

  // characters.forEach(character => {
  //   let template = $.html('body');
  //   let newTemp = template.split('').splice(6)
  //   let secondSpliceCount = newTemp.length - 7;
  //   let secondSplice = newTemp.splice(0, secondSpliceCount)
  //   let final = secondSplice.join('')
  //   console.log('final', final)
  //   //console.log(newTemp)
  //   //console.log(template)
  //   let markup = Mustache.render(final, {
  //     'name': character.name,
  //     'spouse': character.spouse,
  //     'children': character.children,
  //     'house': character.house
  //   });
  //   console.log(markup)
  //   newArr.push(markup)
  // })
  // return newArr;

  return characters.map(character => {
    let template = $('#template').html();
    let markup = Mustache.render(template, {
      'name': character.name,
      'spouse': character.spouse,
      'children': character.children,
      'house': character.house
    });
    return markup;
  });
}

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2
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
CHALLENGE 3
Write a function named getHouses that returns a new array containing the names of all of the houses in the data set.
------------------------------------------------------------------------------------------------ */

const getHouses = (arr) => {
  let houses = [];

  Object.values(arr).forEach((person) => {
    houses.push(person.house)
  })
  return houses;
};
/*------------------------------------------------------------------------------------------------
CHALLENGE 4
Write a function named hasChildrenValues that uses Object.values to determine if any given character in the data set has children.
This function should take in an array of data and a character name and return a Boolean.
For example:
hasChildrenValues(characters, 'Cersei') will return true
hasChildrenValues(characters, 'Sansa') will return false
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
CHALLENGE 5 - Stretch Goal
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
CHALLENGE 6 - Stretch Goal
Write a function named totalCharacters that takes in an array and returns the number of characters in the array.
------------------------------------------------------------------------------------------------ */



// const totalCharacters = (arr) => {
//   let characterCount = 0;
//   Object.values(arr).map((element) => {
//     if (element.name) {
//       characterCount++;
//     } if (element.spouse) {
//       characterCount++;
//     } if (element.children.length > 0) {
//       characterCount += element.children.length;
//     }
//   })
//   return characterCount;
// };

const totalCharacters = (arr) => {
  let count = 0;
  arr.forEach((current) => {
    count += Object.entries(current.children).length + 1;
    current.spouse ? count += 1 : count += 0;
  });
  return count;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal
Write a function named houseSize that takname
All of these objects should be added to an array named "sizes". Return the "sizes" array from the function.
For example: [{ house: 'Stark', members: 7 }, { house: 'Arryn', members: 3 }, ... ].
------------------------------------------------------------------------------------------------ */

const houseSize = (arr) => {
  let sizes = [];
  for (let i = 0; i < arr.length; i++) {
    let memberCount = 1;
    if (arr[i].spouse !== null) {
      memberCount += 1;
    }
    if (arr[i].children.length) {
      memberCount += arr[i].children.length;
    }
    let result = arr[i];
    let newObj = {};
    newObj.house = result.house;
    newObj.members = memberCount;
    sizes.push(newObj);
  }
  return sizes;
}


// const houseSize = (arr) => {
//   const sizes = [];
//   arr.forEach((current) => {
//     let members = 0;
//     members += Object.entries(current.children).length + 1;
//     current.spouse ? members += 1 : members += 0;
//     sizes.push({ house: current.house, members: members });
//   });
//   return sizes;
// };

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal
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
  for (let i = 0; i < arr.length; i++) {
    let memberCount = 1;
    if (arr[i].spouse !== null) {
      memberCount += 1;
    }
    if (arr[i].children.length) {
      memberCount += arr[i].children.length;
    }
    let result = arr[i];
    for (let j = 0; j < deceasedSpouses.length; j++) {
      if (arr[i].spouse === deceasedSpouses[j]) {
        memberCount -= 1;
      }
    }
    let newObj = {};
    newObj.house = result.house;
    newObj.members = memberCount;
    survivors.push(newObj);
  }
  return survivors;
};


// const houseSurvivors = (arr) => {
//   const survivors = [];
//   arr.forEach((current) => {
//     let members = 0;
//     members += Object.entries(current.children).length + 1;
//     (current.spouse && !deceasedSpouses.includes(current.spouse)) ? members += 1 : members += 0;
//     survivors.push({ house: current.house, members: members });
//   });
//   return survivors;
// };

/* ------------------------------------------------------------------------------------------------
TESTS
All the code below will verify that your functions are working to solve the challenges.
DO NOT CHANGE any of the below code.
Run your tests from the console: jest challenges-06.test.js
------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should return html markup with the character', () => {
    const filledTemplates = templatingWithMustache();
    expect(filledTemplates).toStrictEqual([`
    <h2> Eddard </h2>
    <h3> Catelyn </h3>
    * Robb
    * Sansa
    * Arya
    * Bran
    * Rickon
    <p> Stark </p>
  `,
      `
    <h2> Jon A. </h2>
    <h3> Lysa </h3>
    * Robin
    <p> Arryn </p>
  `,
      `
    <h2> Cersei </h2>
    <h3> Robert </h3>
    * Joffrey
    * Myrcella
    * Tommen
    <p> Lannister </p>
  `,
      `
    <h2> Daenarys </h2>
    <h3> Khal Drogo </h3>
    * Drogon
    * Rhaegal
    * Viserion
    <p> Targaryen </p>
  `,
      `
    <h2> Mace </h2>
    <h3> Alerie </h3>
    * Margaery
    * Loras
    <p> Tyrell </p>
  `,
      `
    <h2> Euron </h2>
    <h3>  </h3>
    <p> Greyjoy </p>
  `,
      `
    <h2> Jon S. </h2>
    <h3>  </h3>
    <p> Snow </p>
  `])
  })
});

describe('Testing challenge 2', () => {
  test('It should return the keys from an object', () => {
    expect(getCourseKeys(courseInfo)).toStrictEqual(['name', 'duration', 'topics', 'finalExam']);
  });
});

describe('Testing challenge 3', () => {
  test('It should return an array of the names of the houses', () => {
    expect(getHouses(characters)).toStrictEqual(['Stark', 'Arryn', 'Lannister', 'Targaryen', 'Tyrell', 'Greyjoy', 'Snow']);
    expect(getHouses(characters).length).toStrictEqual(7);
  });
});

describe('Testing challenge 4', () => {
  test('It should return true for characters that have children', () => {
    expect(hasChildrenValues(characters, 'Daenarys')).toBeTruthy();
  });

  test('It should return false to characters who do not have children', () => {
    expect(hasChildrenValues(characters, 'Sansa')).toBeFalsy();
  });
});

describe('Testing challenge 5', () => {
  test('It should return true for characters that have children', () => {
    expect(hasChildrenEntries(characters, 'Eddard')).toBeTruthy();
  });

  test('It should return false to characters who do not have children', () => {
    expect(hasChildrenEntries(characters, 'Jon S.')).toBeFalsy();
  });
});

describe('Testing challenge 6', () => {
  test('It should return the number of characters in the array', () => {
    expect(totalCharacters(characters)).toStrictEqual(26);
  });
});

describe('Testing challenge 7', () => {
  test('It should return an object for each house containing the name and size', () => {
    expect(houseSize(characters)).toStrictEqual([{ house: 'Stark', members: 7 }, { house: 'Arryn', members: 3 }, { house: 'Lannister', members: 5 }, { house: 'Targaryen', members: 5 }, { house: 'Tyrell', members: 4 }, { house: 'Greyjoy', members: 1 }, { house: 'Snow', members: 1 }]);
    expect(houseSize(characters).length).toStrictEqual(7);
  });
});

describe('Testing challenge 8', () => {
  test('It should not include any deceased spouses', () => {
    expect(houseSurvivors(characters)).toStrictEqual([{ house: 'Stark', members: 6 }, { house: 'Arryn', members: 2 }, { house: 'Lannister', members: 4 }, { house: 'Targaryen', members: 4 }, { house: 'Tyrell', members: 3 }, { house: 'Greyjoy', members: 1 }, { house: 'Snow', members: 1 }]);
  });
});

function createSnippetWithJQuery(html) {
  return cheerio.load(html);
}