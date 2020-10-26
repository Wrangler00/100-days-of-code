//find elem in binary search tree

//link: https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/check-if-an-element-is-present-in-a-binary-search-tree

var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.isPresent = function(val,node=this.root){
    if(node==null)  return false;

    if(node.value == val) return true;
    if(node.value>val)
      return this.isPresent(val,node.left);
    return this.isPresent(val,node.right);
  }
  // Only change code above this line
}
