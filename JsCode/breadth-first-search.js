//link: https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/breadth-first-search

//BFS of a graph and distance from root of each node

function bfs(graph, root) {
  let n = graph.length;
  var nodesLen = {};
  
  for(let i=0;i<n;i++){
    nodesLen[i] = Infinity;
  }

  let queue = [root];
  nodesLen[root] = 0;
  while(queue.length){
    let node = queue.shift();
    for(let i=0;i<n;i++){
      if(graph[node][i] && nodesLen[i]==Infinity){
        nodesLen[i]=nodesLen[node]+1;
        queue.push(i);
      }
    }
  }
  return nodesLen;
};

var exBFSGraph = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0]
];
console.log(bfs(exBFSGraph, 3));
