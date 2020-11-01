//link:  https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-4-largest-palindrome-product

function largestPalindromeProduct(n) {
  let start=1;
  let end=9;
  --n;
  for(let i=1;i<=n;i++){
    start=start*10;
    end=end*10+9;
  }

  console.log(start,end)
  let ans=0;
  for(let i=end;i>=start;i--){
    for(let j=i;j>=start;j--){
      let prod = (i*j).toString();
      if(prod === prod.split("").reverse().join("")){
        ans= Math.max(parseInt(prod),ans);
        break;
      }
    }
  }
  return ans;
}

console.log(largestPalindromeProduct(2));
