'use strict';

//vertex = node
//edge = connection between nodes
//undirected graph = vertexs are connected, and any path can be utilized in their connections
//directed graph = this makes it son that the edges can only be traversed a certain direction, kind of like one way streets, their can also be dead ends, like a vertex may not have an edge that has a direction pointing away from it
//weighted graph = the edge itself has a value
//unweighted graph = the edge has no value

//Storage
//adjaceny matrix = basically a 2d array that stores the vertexs and their edges
//adjacency list = similar to matrix, but hinges on the values of the vertexs being a number, and then uses that as an idex in the array, while the array is only actually the edges. One way to get around that is to use a hash table for non numeric values, then reference the values as key/values in the hash table.

//Big O List = add edge and add vertex = O(1)
//        remove vertex = O(v + e), remove edge O(e)
//        query and storage O(v + e)
//
//     Matrix = add vertex O(v^2), add edge O(1)
//            remove vertex O(v^2), remove edge O(1)
//            query O(1), storage O(v^2)

//Class for an Undirected Graph

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
    //delete is not always common
    delete this.adjacencyList[vertex];
  }

}

// let uG = new Graph();