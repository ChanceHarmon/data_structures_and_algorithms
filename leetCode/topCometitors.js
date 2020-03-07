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


  //This is currently broken
  for (let i = 0; i < reviews.length; i++) {
    let review = reviews[i].split(' ');
    for (let j = 0; j < review.length; j++) {
      if (compSet[review]) compSet.set(review, (map.get(review)) + 1)
    }
  }

  //Next I want to return a sorted array that contains the top mentioned competitors, with a length of topNCompetitors, in decending order. I only need the names, not the values of how many times they were mentioned.

  //I believe this is working, just need to get the other function working.
  //It is missing that I need to slice out the values and only push the keys;

  let orderArray = new Array([...compSet.entries()].sort((a, b) => a[1] - b[1]));
  for (let i = orderArray.length - 1; i >= numReviews; i--) {
    orderArray.pop();
  }
  return orderArray;

}