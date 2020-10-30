//link:  https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/implement-heap-sort-with-a-min-heap


//min heap functions
//and heap sort (using min-heap)

function isSorted(a){
  for(let i = 0; i < a.length - 1; i++)
    if(a[i] > a[i + 1])
      return false;
  return true;
}
// Generate a randomly filled array
var array = new Array();
(function createArray(size = 5) {
  array.push(+(Math.random() * 100).toFixed(0));
  return size > 1 ? createArray(size - 1) : undefined;
})(25);
var MinHeap = function() {
  // Only change code below this line
  this.arr = [null];
  
  this.swap = function(i,j){
    let tmp = this.arr[i];
    this.arr[i] = this.arr[j];
    this.arr[j] = tmp;
  }

  this.heapify = function(i){
    let p = Math.floor(i/2);
    if(p==0)  return;

    if(this.arr[p]>this.arr[i]){
      this.swap(p,i);
      this.heapify(p);
    }

    return;
  }

  this.reverseHeapify = function(i){
    let sz = this.arr.length;
    if(i*2>=sz) return;

    let l = this.arr[i*2];

    if(i*2+1>=sz){
      if(l<this.arr[i]){
        this.swap(i,2*i);
        return;
      }
    }

    let r = this.arr[2*i+1];

    if(l<=r && l<=this.arr[i]){
      this.swap(i,2*i);
      this.reverseHeapify(2*i);
    }else if(r<=this.arr[i] && r<=l){
      this.swap(i,2*i+1);
      this.reverseHeapify(2*i+1);
    }

    return;
  }

  this.insert = function(val){
    this.arr.push(val);

    if(this.arr.length==2)  return;

    this.heapify(this.arr.length-1);
    return;
  }

  this.remove = function(){
    if(this.arr.length==1)  return null;
    if(this.arr.length==2)  return this.arr.pop();

    this.swap(1,this.arr.length-1);
    let rem = this.arr.pop();

    this.reverseHeapify(1);

    return rem;
  }

  this.print = function(){
    return this.arr;
  }

  this.sort = function(){
    let arr= [];
    while(this.arr.length>1){
      arr.push(this.remove());
    }

    return arr;
  }
  // Only change code above this line
};

const ar = [2,3,4,5,6,6,7,8];
const h = new MinHeap();

for(let i of ar)
  h.insert(i);

console.log(h.print());

// console.log(h.remove(),h.remove(),h.remove());

// console.log(h.print());

console.log(h.sort())
