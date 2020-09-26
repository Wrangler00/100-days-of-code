//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher


const BASE = 'A'.charCodeAt(0);

function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}

function rot13(str) {
  return str.split("").map(i=>{
    if(isLetter(i)){
      let diff = i.charCodeAt(0)-BASE-13;
      if(diff<0)
        return String.fromCharCode(26+diff+BASE);
      return String.fromCharCode(diff+BASE);
    }
    return i;
  }).join("");
}

rot13("SERR PBQR PNZC");
