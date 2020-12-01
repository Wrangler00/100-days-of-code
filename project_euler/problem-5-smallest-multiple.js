//link:  https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-5-smallest-multiple

//lcm of n numbers

function gcd(a,b){
  return b==0?a:gcd(b,a%b);
}

function lcm(a,b){
  return (a/gcd(a,b))*b;
}

function smallestMult(n) {
  let result=1;

  for(let i=2;i<=n;i++)
    result = lcm(result,i);
  return result;
}

console.log(smallestMult(20));
