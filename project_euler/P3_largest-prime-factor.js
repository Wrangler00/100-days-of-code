//link: https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-3-largest-prime-factor

function largestPrimeFactor(n) {
  if(n==2 || n==3 || n==5)  return n;
  let lim = Math.ceil(Math.sqrt(n));

  let sieve = Array(lim+1).fill(0);

  for(let i=2;i<=lim;i++){
    let count=2;
    let j=i*count;
    while(j<=lim){
      sieve[j]=1;
      ++count;
      j=i*count;
    }
  }

  for(let i=lim;i>=2;i--){
    if(!sieve[i] && n%i==0) return i;
  }
  return n;
}

console.log(largestPrimeFactor(8));
