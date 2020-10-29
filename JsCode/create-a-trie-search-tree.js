//link: https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-trie-search-tree

//implementing TRIE in js


var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
var Node = function() {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function() {
    this.end = true;
  };
  this.isEnd = function() {
    return this.end;
  };
};

var Trie = function() {
  // Only change code below this line
  this.root=null;

  this.add = function(word,i=0,node=this.root){
    if(this.root == null){
      this.root=new Node();
      node=this.root;
    }

    if(i==word.length){
      node.setEnd();
      return;
    }

    if(!node.keys.has(word.charAt(i))){
      node.keys.set(word.charAt(i),new Node());
    }

    this.add(word,i+1,node.keys.get(word.charAt(i)));
  }

  this.isWord = function(word,i=0,node=this.root){
    if(!node) return false;

    if(i==word.length){
      return node.isEnd();
    }

    if(!node.keys.has(word.charAt(i)))
      return false;

    return this.isWord(word,i+1,node.keys.get(word.charAt(i)));
  }

  this.allWords = [];

  this.print = function(node=this.root,word=""){
    if(!node) return this.allWords;

    if(node.isEnd()){
      this.allWords.push(word);
    }

    for(let [k,val] of node.keys.entries()){
      this.print(val,word+k);
    }

    return this.allWords;
  }
  // Only change code above this line
};


const t = new Trie();

t.add("hello");
t.add("hellim")
// console.log(t.isWord("hellim"))

console.log(t.print())
