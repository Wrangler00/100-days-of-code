//link: https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/find-the-minimum-and-maximum-height-of-a-binary-search-tree

//to find min and max height
//to check if tree is balanced

var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.findMinHeight = function(){
    if(this.root==null) return -1;

    let queue = [this.root];
    let hgt=0;
    while(queue.length>0){
      let tmp=[];
      for(let node of queue){
        if(!node.left && !node.right)
            return hgt;
        if(node.left)
          tmp.push(node.left);
        if(node.right)
          tmp.push(node.right);
      }
      ++hgt;
      queue=tmp;
    }

    return hgt;
  }

  this.maxhgt=0;
  this.findMaxHeight = function(node=this.root,tillnow=0){
    if(!node){
       this.maxhgt=-1;
       return -1;
    }

    if(node==this.root){
      this.maxhgt=0;
    }
    this.maxhgt = Math.max(this.maxhgt,tillnow);
    if(node.left)
      this.findMaxHeight(node.left,tillnow+1);

    if(node.right)
      this.findMaxHeight(node.right,tillnow+1);

    return this.maxhgt;
  }

  this.isBalanced = function(){
    if(this.findMaxHeight()-this.findMinHeight<2)
      return true;
    return false;
  }
  // Only change code above this line
}
