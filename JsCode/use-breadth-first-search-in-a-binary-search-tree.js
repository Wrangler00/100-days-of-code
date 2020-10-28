//link: https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/use-breadth-first-search-in-a-binary-search-tree

//implement BFS on binary search tree

var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.levelOrder = function(){
    if(!this.root) return null;
    let arr=[];
    let queue = [this.root];

    while(queue.length){
      let node = queue.shift();
      arr.push(node.value);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }

    return arr;
  }

  this.reverseLevelOrder = function(){
    if(!this.root) return null;
    let arr=[];
    let queue = [this.root];

    while(queue.length){
      let node = queue.shift();
      
      arr.push(node.value);

      if(node.right) queue.push(node.right);
      if(node.left) queue.push(node.left);
    }

    return arr;
  }
  // Only change code above this line
}
