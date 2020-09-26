//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator

function telephoneCheck(str) {
  return !!str.match(/^(\+\d{1}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/) && !str.split("").reduce((acc,curr)=>{
    if(curr== "(")
      ++acc;
    else if(curr == ")")
      --acc;
    return acc;
  },0);
}

console.log(telephoneCheck("555-555-5555"));
