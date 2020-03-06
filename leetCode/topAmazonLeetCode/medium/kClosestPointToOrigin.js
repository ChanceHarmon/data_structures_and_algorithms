'use strict'

// We have a list of points on the plane.  Find the K closest points to the origin (0, 0).

// (Here, the distance between two points on a plane is the Euclidean distance.)

// You may return the answer in any order.  The answer is guaranteed to be unique (except for the order that it is in.)



// Example 1:

// Input: points = [[1,3],[-2,2]], K = 1
// Output: [[-2,2]]
// Explanation: 
// The distance between (1, 3) and the origin is sqrt(10).
// The distance between (-2, 2) and the origin is sqrt(8).
// Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
// We only want the closest K = 1 points from the origin, so the answer is just [[-2,2]].
// Example 2:

// Input: points = [[3,3],[5,-1],[-2,4]], K = 2
// Output: [[3,3],[-2,4]]
// (The answer [[-2,4],[3,3]] would also be accepted.)


// Note:

// 1 <= K <= points.length <= 10000
// -10000 < points[i][0] < 10000
// -10000 < points[i][1] < 10000

//There are a lot of solutions to this, using two buckets, using a partition and pivots, several helper methods, etc..
//While the sort line looks complicated, and it would be insane without the built in Math methods, it reads very clean to mean, and makes the rest of the process very simple

//Big O space: O(n) We are using a sperate array to return the result
//Big O time: O(n) We are using two loops ( sort and for ) but not nested.
//I think space could be improved. I believe you could change the way the for loop worked, and instead of pushing values to an array you could pop of the end of the points array K amount of times with some conditional checks, and then return the already exisiting array, I can come back to this later

const kClosest = (points, K) => {
  points.sort((a, b) => {
    //What is happening here, we getting the square root of squaring the two indexes of a - the square root of squaring the two indexes of b. then sorting a -b with those values.
    return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2)) - Math.sqrt(Math.pow(b[0], 2) + Math.pow(b[1], 2));
  });
  //Now that our points are is sorted, we can simply push the values up to the limit of K    
  const result = [];
  for (let i = 0; i < K; i++) {
    result.push(points[i]);
  }
  return result;
};

//Theory is true
//Improved Big O space: O(1), we alter the given structure in place and return it, constant space