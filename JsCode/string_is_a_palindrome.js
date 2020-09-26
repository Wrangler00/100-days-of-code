//link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker

function palindrome(str) {
  str = str.replace(/[^A-Za-z0-9]/g, '');
  str = str.toLowerCase();
  if(str == str.split("").reverse().join(""))
    return true;
  return false;
}

console.log(palindrome("eye"));
