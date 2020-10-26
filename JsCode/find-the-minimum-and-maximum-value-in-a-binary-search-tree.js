//find min and max in binary serach tree

//link: https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/find-the-minimum-and-maximum-value-in-a-binary-search-tree

var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.findMin = function(node=this.root){
    if(this.root==null)  return null;
    if(node.left==null)
      return node.value;
    else
      return this.findMin(node.left);
  }

  this.findMax = function(node=this.root){
    if(this.root==null)  return null;
    if(node.right==null)
      return node.value;
    else
      return this.findMax(node.right);
  }
  // Only change code above this line
}
