//binary search tree js logic
//and add method

//link: https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/add-a-new-element-to-a-binary-search-tree

var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.recurse = function(val,node){
    if(node.value==val) return null;

    if(node.value>val){
      if(node.left==null) node.left=new Node(val);
      else  this.recurse(val,node.left);
    }else{
      if(node.right==null)  node.right=new Node(val);
      else  this.recurse(val,node.right);
    }

    return undefined;
  }
  
  this.add = function(val){
    if(this.root==null){
      this.root = new Node(val);
      return undefined;
    }

    return this.recurse(val,this.root);
  }
  // Only change code above this line
}

const b = new BinarySearchTree();
b.add(9);
b.add(2);
b.add(3);
displayTree(b)

