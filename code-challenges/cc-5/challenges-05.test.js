'use strict';

// to learn more about the cheerio library and what it is doing, look at their documentation: https://www.npmjs.com/package/cheerio
const cheerio = require('cheerio');

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review
Write a function named templateWithJQuery that uses jQuery to get the html template from the DOM, copy the contents, fill it with the Star Wars People, and append it to the DOM.
------------------------------------------------------------------------------------------------ */
let starWarsPeople = [
  {
    "name": "Luke Skywalker",
    "height": "172",
    "eye_color": "blue"
  },
  {
    "name": "C-3PO",
    "height": "167",
    "eye_color": "yellow"
  },
  {
    "name": "R2-D2",
    "height": "96",
    "eye_color": "red"
  }
];

let $ = createSnippetWithJQuery(`
<main>
  <section id="template">
    <h2></h2>
    <h3></h3>
    <p></p>
  </section>
</main>
`);

const templateWithJQuery = () => {
  starWarsPeople.forEach(person => {
    const template = $('#template').html();
    const $section = $('<section></section>');
    $section.html(template);
    $section.find('h2').text(person.name);
    $section.find('h3').text(person.height);
    $section.find('p').text(person.eye_color);
    $('main').append($section);
  })
}

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2
Write a function named howMuchPencil that takes in a string, as written on the side of a pencil.
As you sharpen the pencil, the string will become shorter and shorter, starting by removing the first letter.
Your function should use slice within a loop and return an array of each successive string result from losing letters to the sharpener, until nothing is left.
For example, if the input is 'Welcome', the output will be:
['Welcome', 'elcome', 'lcome', 'come', 'ome', 'me', 'e', ''].
------------------------------------------------------------------------------------------------ */

const howMuchPencil = (str) => {
  let result = [];
  for (let i = 0; i <= str.length; i++) {
    result.push(str.slice(i))
  }
  return result
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3
Write a function name wordsToCharList that, given a string as input, returns a new array where every element is a character of the input string.
For example, wordsToCharList('gregor') returns ['g','r','e','g','o','r'].
------------------------------------------------------------------------------------------------ */

const wordsToCharList = (arr) => {
  return arr.split('');
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 4
You are making a grocery list for ingredients needed in the gruffalo crumble recipe, below. Rather than taking the entire recipe, you only want a list of the item names.
Write a function named listFoods that takes in the recipe and returns a new array of the food items without any amount or units. Just the name. For example, '1 cup flour' will return 'flour'.
Use slice for this function, maybe more than once. The Array.indexOf() method may also be helpful.
Do not use split for this function.
------------------------------------------------------------------------------------------------ */

const gruffaloCrumble = {
  name: 'How to make a Gruffalo Crumble',
  ingredients: [
    '1 medium-sized Gruffalo',
    '8 pounds oats',
    '2 pounds brown sugar',
    '4 pounds flour',
    '2 gallons pure maple syrup',
    '16 cups chopped nuts',
    '1 pound baking soda',
    '1 pound baking powder',
    '1 pound cinnamon',
    '6 gallons melted butter',
    '2 gallons fresh water',
  ],
  steps: [
    'Pre-heat a large oven to 375',
    'De-prickle the gruffalo',
    'Sprinkle with cinnamon, sugar, flour, and nuts',
    'Mix until evenly distributed',
    'Grease a 3-foot x 3-foot casserole dish',
    'Combine gruffalo compote with water to maintain moisture in the oven',
    'Fold together remaining ingredients to make the crisp',
    'Spread the crisp evenly over the gruffalo mixture',
    'Bake for 12-15 hours',
  ]
};


const listFoods = (recipe) => {
  let result = [];
  recipe.ingredients.forEach((ingredients) => {
    let firstSlice = ingredients.slice(ingredients.indexOf(' ') + 1);
    let secondSlice = firstSlice.slice(firstSlice.indexOf(' ') + 1);
    result.push(secondSlice);
  });

  return result;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5 - Stretch Goal
Write a function named splitFoods that uses split to produce the same output as Challenge 3.
You may also use other string or array methods.
------------------------------------------------------------------------------------------------ */

const splitFoods = (recipe) => {
  let result = [];
  recipe.ingredients.forEach(element => {
    result.push(element.replace(/\d*\d\s\w+-*\w+\s/, ''));
  });
  return result;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6 - Stretch Goal
Use the same recipe from Challenge 3, above.
Write a function named stepAction that takes in the recipe and extracts the action verbs from the steps. Fortunate for you, the action verbs are the first word of each action.
Return a new array containing just the verbs. For example, ['Mix until evenly distributed'] returns ['Mix'].
------------------------------------------------------------------------------------------------ */

const stepActions = (recipe) => {
  let result = [];
  recipe.steps.forEach((verbs) => {
    result.push(verbs.split(' ')[0]);
  });
  return result;
  //return recipe.steps.map((verbs) => { verbs.split(' ')[0] })
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal
Write a function named removeEvenValues that, given an array of integers as input, deletes all even values from the array, leaving no 'gaps' behind.
The array should be modified in-place.
For example:
  const integers = [1, 2, 3, 4, 5, 6];
  removeEvenValues(integers);
  console.log(integers) will print [1, 3, 5]
------------------------------------------------------------------------------------------------ */

const removeEvenValues = (arr) => {
  for (let i = arr.length; i >= 0; i--)
    //for (let i = 0; i <= arr.length; i++)
    if (arr[i] % 2 === 0) { arr.splice(i, 1); }
  return arr;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal
Write a function named removeLastCharacters that takes in a string and a number. The numberOfCharacters argument determines how many characters will be removed from the end of the string. Return the resulting string.
If the numberOfCharacters argument is greater than the length of the input string, the function should return an empty string.
If the numberOfCharacters argument input is a negative number, the function should return the input string without any changes.
For example:
removeLastCharacters('Gregor', 2) returns 'Greg'
removeLastCharacters('Gregor', -2) returns 'Gregor'
removeLastCharacters('Gregor', 9) returns ''
------------------------------------------------------------------------------------------------ */

const removeLastCharacters = (str, numberOfCharacters) => {
  if (numberOfCharacters > str.length) {
    return '';
  } else if (numberOfCharacters < 0) {
    return str;
  }
  return str.split('').splice(0, str.length - numberOfCharacters).join('');

};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 9 - Stretch Goal
Write a function named totalSumCSV that, given a string of comma-separated values (CSV) as input. (e.g. "1,2,3"), returns the total sum of the numeric values (e.g. 6).
------------------------------------------------------------------------------------------------ */

const totalSumCSV = (str) => {
  let total = 0;
  let sumOfString = str.split(',');
  for (let i = 0; i < sumOfString.length; i++) {
    total += Number(sumOfString[i]);
  }
  return total;
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 10 - Stretch Goal
Write a function named removeVowels that takes in a string and returns a new string where all the vowels of the original string have been removed.
For example, removeVowels('gregor') returns 'grgr'.
------------------------------------------------------------------------------------------------ */

const removeVowels = (str) => {
  let condition = /[aeiou]/g;
  return str.replace(condition, '')
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 11 - Stretch Goal
Write a function named extractVowels that takes in a string and returns an array where the first element is the original string with all the vowels removed, and the second element is a string of all the vowels that were removed, in alphabetical order.
For example, extractVowels('gregor') returns ['grgr', 'eo'].
Similarly, extractVowels('The quick brown fox') returns ['Th qck brwn fx', 'eioou']
------------------------------------------------------------------------------------------------ */

const extractVowels = (str) => {

  let result = [];

  let condition = /[aeiou]/g;

  let compareAlphabetically = (a, b) => {
    if (a[0] < b[0]) {
      return - 1
    } else if (a[0] > b[0]) {
      return 1
    } else {
      return 0
    }
  }

  result[1] = str.match(condition).sort(compareAlphabetically).join('');

  result[0] = str.replace(condition, '')

  return result;
};

/* ------------------------------------------------------------------------------------------------
TESTS
All the code below will verify that your functions are working to solve the challenges.
DO NOT CHANGE any of the below code.
Run your tests from the console: jest challenges-05.test.js
------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should append the star wars people to the DOM', () => {
    templateWithJQuery();
    expect($('section:nth-child(2) h2').text()).toStrictEqual('Luke Skywalker');
    expect($('section:nth-child(3) h3').text()).toStrictEqual('167');
    expect($('section:nth-child(4) p').text()).toStrictEqual('red');
  })
});

describe('Testing challenge 2', () => {
  test('It should return a list of shortening words', () => {
    expect(howMuchPencil('Welcome')).toStrictEqual(['Welcome', 'elcome', 'lcome', 'come', 'ome', 'me', 'e', '']);
    expect(howMuchPencil('Welcome').length).toStrictEqual(8);
    expect(howMuchPencil('')).toStrictEqual(['']);
    expect(howMuchPencil('abc')).toStrictEqual(['abc', 'bc', 'c', '']);
  });
});

describe('Testing challenge 3', () => {
  test('It should return an array of individual letters', () => {
    expect(wordsToCharList('Gregor')).toStrictEqual(['G', 'r', 'e', 'g', 'o', 'r']);
    expect(wordsToCharList('Gregor').length).toStrictEqual(6);
    expect(wordsToCharList('hooray')).toStrictEqual(['h', 'o', 'o', 'r', 'a', 'y']);
    expect(wordsToCharList('')).toStrictEqual([]);
  });
});

describe('Testing challenge 4', () => {
  test('It should return a list of foods', () => {
    expect(listFoods(gruffaloCrumble)).toStrictEqual(['Gruffalo', 'oats', 'brown sugar', 'flour', 'pure maple syrup', 'chopped nuts', 'baking soda', 'baking powder', 'cinnamon', 'melted butter', 'fresh water']);
    expect(listFoods(gruffaloCrumble).length).toStrictEqual(11);
  });
});

describe('Testing challenge 5', () => {
  test('It should return a list of foods', () => {
    expect(splitFoods(gruffaloCrumble)).toStrictEqual(['Gruffalo', 'oats', 'brown sugar', 'flour', 'pure maple syrup', 'chopped nuts', 'baking soda', 'baking powder', 'cinnamon', 'melted butter', 'fresh water']);
  });
});

describe('Testing challenge 6', () => {
  test('It should return a list of recipe steps', () => {
    expect(stepActions(gruffaloCrumble)).toStrictEqual(['Pre-heat', 'De-prickle', 'Sprinkle', 'Mix', 'Grease', 'Combine', 'Fold', 'Spread', 'Bake']);
    expect(stepActions(gruffaloCrumble).length).toStrictEqual(9);
  });
});

describe('Testing challenge 7', () => {
  test('It should remove the even numbers from the array', () => {
    let list = [1, 2, 3, 4, 5, 6];
    removeEvenValues(list);
    expect(list).toStrictEqual([1, 3, 5]);

    list = [6, 3, 19, 43, 12, 66, 43];
    removeEvenValues(list);
    expect(list).toStrictEqual([3, 19, 43, 43]);
    expect(list.length).toStrictEqual(4);
  });
});

describe('Testing challenge 8', () => {
  test('It should shorten the string based on the first argument', () => {
    expect(removeLastCharacters('Gregor', 2)).toStrictEqual('Greg');
    expect(removeLastCharacters('Gregor', 2).length).toStrictEqual(4);
  });
  test('It should return the complete string when passed a negative number', () => {
    expect(removeLastCharacters('hello', -1)).toStrictEqual('hello');
    expect(removeLastCharacters('wowow', -700)).toStrictEqual('wowow');
  });
  test('It should return an empty string when called with a number larger than the string length', () => {
    expect(removeLastCharacters('hello', 12)).toStrictEqual('');
    expect(removeLastCharacters('', 1)).toStrictEqual('');
    expect(removeLastCharacters('a', 1)).toStrictEqual('');
  });
});

describe('Testing challenge 9', () => {
  test('It should add up the numbers contained within the string', () => {
    expect(totalSumCSV('1,4,5,7,2')).toStrictEqual(19);
    expect(totalSumCSV('147')).toStrictEqual(147);
  });
});

describe('Testing challenge 10', () => {
  test('It should return the string without vowels', () => {
    expect(removeVowels('gregor')).toStrictEqual('grgr');
    expect(removeVowels('gregor').length).toStrictEqual(4);
    expect(removeVowels('asdf')).toStrictEqual('sdf');
    expect(removeVowels('why')).toStrictEqual('why');
  });
});

describe('Testing challenge 11', () => {
  test('It should return the string without vowels', () => {
    expect(extractVowels('gregor')).toStrictEqual(['grgr', 'eo']);
    expect(extractVowels('gregor').length).toStrictEqual(2);

    expect(extractVowels('The quick brown fox')).toStrictEqual(['Th qck brwn fx', 'eioou']);
  });
});

function createSnippetWithJQuery(html) {
  return cheerio.load(html);
};