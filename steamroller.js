//link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller

Flatten a nested array. You must account for varying levels of nesting.
Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.


//my solution

function steamrollArray(arr) {
  return arr.reduce((acc,curr)=>{
    if(Array.isArray(curr)){
      acc = [...acc,...steamrollArray(curr)];
    }else{
      acc.push(curr);
    }
    return acc;
  },[]);
}

console.log(steamrollArray([1, {}, [3, [[[4],[1,[2]]]]]]));

OR

//solution 2

function steamrollArray(arr) {
  return arr.reduce((acc,curr)=>{
    if(Array.isArray(curr))
      acc.push(...steamrollArray(curr))
    else
      acc.push(curr);
    return acc;
  },[]);
}

console.log(steamrollArray([1, {}, [3, [[[4],[1,[2]]]]]]));
