class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdges(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdges(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v != v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v != v1);
    }

    bfs(start) {
        const queue = [start];
        const visited = new Set([start]);
        const result = [];

        while(queue.length) {
            const vertex = queue.shift();
            result.push(vertex);

            for(let neighbor of this.adjacencyList[vertex]) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                    visited.add(neighbor);
                }
            }
        }

        return result;
    }

    dfsIterative(start) {
        const stack = [start];
        const visited= new Set([start]);
        const result = [];

        while(stack.length) {
            const vertex = stack.pop();
            result.push(vertex);

            for(let neighbor of this.adjacencyList[vertex]) {
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                    visited.add(neighbor);
                }
            }
        }
        return result;
    }

    dfsRecursive(start, visited = new Set([start]), result = []) {
        visited.add(start);
        result.push(start);

        for(let neighbor of this.adjacencyList[start]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                this.dfsRecursive(neighbor, visited, result);
            }
        }

        return result;
    }
}

const g = new Graph();
g.addVertex(1);
g.addVertex(2);
g.addVertex(3);
g.addVertex(4);

g.addEdges(1, 2);
g.addEdges(1, 3);
g.addEdges(2, 4);
g.addEdges(3, 4);

console.log(g.adjacencyList);

console.log(g.bfs(1));
console.log(g.dfsIterative(1));
console.log(g.dfsRecursive(1));