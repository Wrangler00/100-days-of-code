//link: https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-7-10001st-prime

//my solution using seive of erathothenes
//nth prime

const MAX_SIZE = 204745;
let primes = [];
//Sieve of Eratosthenes
function seiveOfEratosthenes(){
  let seive = Array(MAX_SIZE+1);
  for(let i=2;i<=MAX_SIZE;i++)
    seive[i] = i;

  const root = Math.sqrt(MAX_SIZE+1);
  for(let i=2;i<=root;i++){
    if(seive[i]==-1)  continue;
    for(let j=2;i*j<MAX_SIZE+1;j++){
      seive[i*j]=-1;
    }
  }

  for(let i=2;i<=MAX_SIZE;i++){
    if(seive[i]!=-1)
      primes.push(i);
  }

  // console.log(primes)
}
seiveOfEratosthenes();

function nthPrime(n) {
  return primes[n-1];
}

console.log(nthPrime(100));
