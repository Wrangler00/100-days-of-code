//link : https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-9-special-pythagorean-triplet

//cpp js solution

function specialPythagoreanTriplet(n) {
    let sumOfabc = n;
    let sqn = n*n;
    for(let a=1;a<n-1;a++){
        for(let b=a+1;b<n && a+b<n;b++){
            let c = n-(a+b);
            let lhs = 2*(a*b+n*c)
            if(lhs == sqn){
                return a*b*c;
            }
        }
    }
    return true;
}

console.log(specialPythagoreanTriplet(1000));
