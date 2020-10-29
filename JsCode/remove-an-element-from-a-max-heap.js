//link: https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/remove-an-element-from-a-max-heap
//max heap remove

var MaxHeap = function() {
  this.heap = [null];
  this.insert = (ele) => {
    var index = this.heap.length;
    var arr = [...this.heap];
    arr.push(ele);
    while (ele > arr[Math.floor(index / 2)] && index > 1) {
      arr[index] = arr[Math.floor(index / 2)];
      arr[Math.floor(index / 2)] = ele;
      index = arr[Math.floor(index / 2)];
    }
    this.heap = arr;
  }
  this.print = () => {
    return this.heap.slice(1);
  }

  
  // Only change code below this line
  this.swap = function(i,j){
    let tmp = this.heap[j];
    this.heap[j] = this.heap[i];
    this.heap[i] = tmp;
  }
  this.heapify = function(i){
    const len=this.heap.length;
    if(2*i>=len)
      return;

    let l = this.heap[2*i];
    if(2*i+1>=len){
      if(l>this.heap[i]){
        this.swap(i,2*i);
      }
      return;
    }

    let r = this.heap[2*i+1];

    if(this.heap[i]>l && this.heap[i]>r)
      return;

    if(l>r){
      this.swap(i,2*i);
      this.heapify(2*i);
    }else{
      this.swap(i,2*i+1);
      this.heapify(2*i+1);
    }

    return;
  }
  this.remove = function(){
    let len = this.heap.length;
    if(len==2)
      return this.heap.pop();

    if(len==1)
      return null;

    this.swap(1,len-1);
    let m = this.heap.pop();
    this.heapify(1);

    return m;
  }
  // Only change code above this line
};

const h = new MaxHeap();

const arr = [9,2,6,1,4,5,3];

arr.forEach(i=>h.insert(i));

console.log(h.remove());

console.log(h.print());
