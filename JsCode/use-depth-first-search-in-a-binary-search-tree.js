//link: https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/use-depth-first-search-in-a-binary-search-tree

var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.inor=[];
  this.inorder = function(node=this.root){
    if(!this.root) return null;
    if(node==this.root) this.inor=[];
    if(!node) return this.inor;
    
    this.inorder(node.left);
    this.inor.push(node.value);
    this.inorder(node.right);

    return this.inor;
  }

  this.preor=[];
  this.preorder = function(node=this.root){
    if(!this.root) return null;
    if(node==this.root) this.preor=[];
    if(!node) return this.preor;
    
    this.preor.push(node.value);
    this.preorder(node.left);
    this.preorder(node.right);

    return this.preor;
  }

  this.postor=[];
  this.postorder = function(node=this.root){
    if(!this.root) return null;
    if(node==this.root) this.postor=[];
    if(!node) return this.postor;
  
    this.postorder(node.left);
    this.postorder(node.right);
    this.postor.push(node.value);
    
    return this.postor;
  }
  // Only change code above this line
}
