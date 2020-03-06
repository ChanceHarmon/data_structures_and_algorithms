'use strict';


// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.
// Example 2:

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.

//Big O space: O(1) we are not using any other structure to store and return values
//Big O time:O(n) using a single loop the worst case is that we have to traverse the entire array to return the best result

const maxProfit = prices => {
  let buyPrice = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    //By starting buy price at [0], and starting i at [1], we constantly return the min of 0 compared to 1, updating the buy price, then iterating through the list, updating our max profit, then returning the optimal solution after the loop

    const price = prices[i];

    buyPrice = Math.min(buyPrice, price);

    profit = Math.max(profit, price - buyPrice);
  }

  return profit;
};

//Foot note, this is the first time I figured out I could manipulate the leetcode to ES6, it works and will be the case from here out