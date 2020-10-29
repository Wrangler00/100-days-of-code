//lnk: https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/insert-an-element-into-a-max-heap

//implement max heap

var MaxHeap = function() {
  // Only change code below this line
  this.heap = [null];

  this.heapify = function(i){
    let p = Math.floor(i/2);
    if(p==0){
      return;
    }

    if(this.heap[p]<this.heap[i]){
      let tmp = this.heap[i];
      this.heap[i] = this.heap[p];
      this.heap[p] = tmp;
      this.heapify(p);
    }

    return;
  }
  this.insert = function(val){
    this.heap.push(val);
    if(this.heap.length<3)
      return;

    this.heapify(this.heap.length-1);
    return;
  }

  this.print = function(){
    return this.heap;
  }
  // Only change code above this line
};

const h = new MaxHeap();

h.insert(1);
h.insert(2);
h.insert(0);
h.insert(9);

console.log(h.print())
