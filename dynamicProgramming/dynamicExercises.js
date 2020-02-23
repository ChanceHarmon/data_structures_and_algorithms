'use strict';

//Dynamic Programming

//Finding an optimal solution

// A method of solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions.


//Overlapping Subproblems

//A problem is said to have overlapping subproblems if when broken down into subproblems that can be reused several times
//Example is Fibonacci Sequence
//Non-Example is Merge Sort, also lends itself to divide and conquer


//Optimal SubStructure

//A problem is said to have optimal substructure if an optimal solution can be constructed from optimal solutions of its subproblems

//Examples are Fibonacci and Shortest Path(Dijkstra)
//Non-Example is Longest Simple Path(no repetition), also cheapest flight solutions

// Fib Recursive
//Big O Time: O(2^n) exponential :(
const fib = n => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
//WARNING: Don't test much past n of 45, 100 will break things

//fib(n)


//Ninja Style

//Memoization
//Big O Time: O(n) Space:

//Storing the results of expensive function calls and returning the cached result when the same inputs occur again

//Now we are storing found values. We check there first before continuing the recursive call. 

const fib = (n, memo = []) => {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  let result = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = result;
  return result;
}

//Tabulation
//Working from the bottom up

//Storing the result of a previous result in a table(IE array)
//Usually done using iteration
//Can be used to improve Space complexity

//Big O Time: O(n) Space: O()

const fib = n => {
  if (n <= 2) return 1;
  let fibNumbers = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNumbers[i] = fibNumbers[i - 1] + fibNumbers[i - 2];
  }
  return fibNumbers[n];
}




