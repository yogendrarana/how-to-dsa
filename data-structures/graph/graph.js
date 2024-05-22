/* 
    Graph
    1. A graph is a collection of nodes connected by edges.
    2. A graph is a nonlinear data structure, compared to arrays, linked lists, stacks and queues which are linear data structures.
    3. The node in a graph is called a vertex.
    4. The line connecting two vertices is called an edge.
    5. Graph can be represented by two ways:
        - Adjacency Matrix
        - Adjacency List
*/

/*
    Time Complexity: 
    - Insertion: O(1)
    - Deletion: O(1)
    - Traversal: O(n)
    - Searching: O(n)
    - Sorting: O(n log n)
    - Shortest Path: O(n)

    Space Complexity: O(n)
    In-Place: No
    Stable: Yes
 */


/*
    JavaScript Graph Implementation using Adjacency List
*/

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
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1); // Remove this line for a directed graph
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }

    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + " -> " + this.adjacencyList[vertex].join(", "));
        }
    }
}

// Example usage:
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');
graph.display();