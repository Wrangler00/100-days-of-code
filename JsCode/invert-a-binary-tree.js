//link: https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/invert-a-binary-tree

//invert a bst

var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.invert = function(){
    if(!this.root)  return null;

    let queue = [this.root];

    while(queue.length){
      let node = queue.shift();
      // if(!node) continue;
      // console.log(node)
      let l = node.left;
      let r = node.right;

      node.left=r;
      node.right=l;

      if(r)  queue.push(r);
      if(l)  queue.push(l);
    }
  }
  // Only change code above this line
}
