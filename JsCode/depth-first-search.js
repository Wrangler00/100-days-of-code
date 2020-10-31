//link: https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/depth-first-search

//DFS of a graph

let arr,vis;
function dfsUtil(graph,node,n){
  vis[node]=1;
  arr.push(node);

  for(let i=0;i<n;i++){
    if(graph[node][i] && !vis[i]){
      dfsUtil(graph,i,n);
    }
  }
}

function dfs(graph, root) {
  arr=[];
  let n = graph.length;
  vis=Array(n).fill(0);

  dfsUtil(graph,root,n);
  console.log(arr);
  return arr;
}

var exDFSGraph = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0]
];
console.log(dfs(exDFSGraph, 3));


