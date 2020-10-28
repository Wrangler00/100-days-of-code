//link: https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/delete-a-leaf-node-in-a-binary-search-tree

//cpp remove leaf node

var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
  // Only change code below this line

  this.findNode = function(val,parent=this.root,node=this.root){
    if(!node) return null;

    if(node.value == val)
      return parent;

    let l = this.findNode(val,node,node.left);
    if(l!=null)
      return l;
    let r = this.findNode(val,node,node.right);
    if(r!=null)
      return r;

    return null;
  }

  this.remove = function(val){
    if(!this.root)  return null;

    let p = this.findNode(val,this.root,this.root);
    if(p==null) return p;

    if(p.left!=null && p.left.value==val){
      p.left=null;
    }else if(p.right!=null && p.right.value==val){
      p.right=null;
    }else if(p==this.root){
      this.root=null;
    }
  }

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
}

const b = new BinarySearchTree();
b.add(9);
b.add(2);
b.add(3);

b.remove(2);
