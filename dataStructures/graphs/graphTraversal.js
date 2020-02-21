'use strict';

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjacenyList[vertex1] || !this.adjacencyList[vertex2]) return false;
    this.adjacencyList[vertex1].push(this.adjacencyList[vertex2]);
    this.adjacencyList[vertex2].push(this.adjacencyList[vertex1]);
  }
  removeEdge(vertex1, vertex2) {
    if (!this.adjacenyList[vertex1] || !this.adjacencyList[vertex2]) return false;

    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      v => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      v => v !== vertex1
    );
  }
  removeVertex(vertex) {
    if (!this.adjacenyList[vertex]) return false;
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  DFT_Recursive(start) {
    let result = [];
    let visited = {};
    const adjacencyList = this.adjacencyList;

    (function helper(vertex) {
      if (!vertex) return false;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return helper(neighbor)
        }
      });
    })(start);

    return result;
  }
  DFT_Iterative(start) {
    let stack = [start];
    let result = [];
    let visited = {};
    let currentVertex;

    visited[start] = true;

    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor)
        }
      })
    }
    return result;
  }
  BFT(start) {
    let queue = [start];
    let result = [];
    let visited = {};
    let currentVertex;
    visited[start] = true;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      // to go from right to left
      //this.adjacencyList[currentIndex].slice().reverse().forEach(lorem)
      this.adjacencyList[currentIndex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }

}