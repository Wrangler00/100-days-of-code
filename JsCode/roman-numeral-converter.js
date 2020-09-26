//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter

const mp = {
  "1": "I",
  "5": "V",
  "10": "X",
  "50": "L",
  "100": "C",
  "500": "D",
  "1000": "M"
}

let less = 100;

function convertToRoman(num) {
  let keys = Object.keys(mp).reverse().map(i=>parseInt(i));
  
  // return keys.reduce((acc,curr,ind)=>{
  //   acc+=mp[curr.toString()].repeat(num/curr);
  //   num=num%curr;
    
  //   if(curr-num<=less){
  //     acc+=(mp[less.toString()]+mp[curr.toString()]);
  //     num = num - (curr-less);
  //   }
    
  //   if(ind%2) less = less/10;

  //   return acc;
  // },"");

  return keys.reduce((acc,curr)=>{
    let tmp;
    switch(curr){
      case 1000:
        tmp = num/curr;
        acc+=mp[curr.toString()].repeat(tmp);
        num = num%curr;

        if(curr-num<=100){
          acc+="CM";
          num = num-900;
        }
        break;
      case 500:
        tmp = num/curr;
        acc+=mp[curr.toString()].repeat(tmp);
        num =num%curr;

        if(curr-num<=100){
          acc+="CD";
          num = num-400;
        }
        break;
      case 100:
        tmp = num/curr;
        acc+=mp[curr.toString()].repeat(tmp);
        num = num%curr;

        if(curr-num<=10){
          acc+="XC";
          num = num-90;
        }
        break;
      case 50:
        tmp = num/curr;
        acc+=mp[curr.toString()].repeat(tmp);
        num = num%curr;

        if(curr-num<=10){
          acc+="XL";
          num = num-40;
        }
        break;
      case 10:
        tmp = num/curr;
        acc+=mp[curr.toString()].repeat(tmp);
        num = num%curr;

        if(curr-num<=1){
          acc+="IX";
          num = num-9;
        }
        break;
      case 5:
        tmp = num/curr;
        acc+=mp[curr.toString()].repeat(tmp);
        num = num%curr;

        if(curr-num<=1){
          acc+="IV";
          num = num-4;
        }
        break;
      case 1:
        tmp = num/curr;
        acc+=mp[curr.toString()].repeat(tmp);
        num = num%curr;
        break;
    }
    return acc;
  },"");

  console.log(ans);
  return ans;
}

convertToRoman(4);


