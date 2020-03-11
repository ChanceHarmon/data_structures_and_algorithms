'use strict'

//Amazon wants to be able to track how often their top competitors are mentioned in reviews. They have a webcrawler that will pick up reviews and give them to you in a list. From these reviews, they want to know who the top competitors are out of all of the competitors. If the mention of the competitor appears more than once in a single review, count it as a single occurance per review.

//Write an algorithm to help Amazon identify the top N competitors mentioned online.

//Input consists of five arguements

//numCompetitors- integer representing the number of competitors
//topNCompetitors - integer representing the maximum number of competitors that Amazon wants to identify
//competitors - a list of strings representing the competitors
//numReviews - integer representing the number of reviews from different websites that are identified by the webcrawler
//reviews - a list of strings where each element consists of space-seperated words representing user reviews

//Output
//Return a list of strings representing Amazons top N competitors in order of most frequently mentioned to the least frequent.

//If the value of topNCompetitors is more than the number of competitors discussed in the reviews then output the names of only the competitors discussed in the reviews.
//If competitors have the same amount of mentions, return them alphabetically.


const topNCompetitors = (numCompetitors, topNCompetitors, competitors, numReviews, reviews) => {

  //First step is to add the names of the competitors to a hashmap with a value of 0;


  let compSet = new Map();
  for (let i = 0; i < competitors.length; i++) {
    let each = competitors[i];
    compSet.set(each, 0);
  }


  //Next I want to split each instance of the reviews array, then loop through the review and check for instances of the competitors

  //If their is a mention, update the value of the key in the hashmap

  for (let i = 0; i < reviews.length; i++) {
    let review = reviews[i].split(' ');

    for (let j = 0; j < review.length; j++) {
      if (compSet.has(review[j])) {
        compSet.set(review[j], compSet.get(review[j]) + 1);
        console.log(compSet)
        break;
      }
    }
  }

  let compareAlphabetically = (a, b) => {
    if (a[0] < b[0]) {
      return - 1
    } else if (a[0] > b[0]) {
      return 1
    } else {
      return 0
    }
  }

  let compareValues = (a, b) => {
    if (b[1] < a[1]) {
      return - 1
    } else if (b[1] > a[1]) {
      return 1
    } else {
      return 0
    }
  }

  let orderArray = [...compSet.entries()].sort(compareAlphabetically).sort(compareValues).map(x => x[0]);

  for (let i = orderArray.length - 1; i >= numReviews; i--) {
    orderArray.pop();
  }
  return orderArray;

}


console.log(topNCompetitors(5, 2, ['google', 'amazon', 'facebook', 'microsoft'], 4, ['google has a home device, google it', 'google is top-rated', 'amazon echo is the best', 'facebook is working on a home speaker', 'microsoft is also in seattle', 'google is catching up', 'amazon is still the best', 'amazon is where I really want to be']))