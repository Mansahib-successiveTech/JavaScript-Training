/*
3.Write a program to give count of variables in a string ("abcabcdabbcc" => "a3b4c4d1")
*/
function countFrequency(str) {
  let map = new Map(); // Map declare
  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      map.set(str[i], map.get(str[i]) + 1); // for frequency
    } else {
      map.set(str[i], 1);
    }
  }
  let result = " ";
  for (let [key, val] of map) {
    result = result + key + val;
  }
  return result;
}


console.log(countFrequency("abcabcdabbcc"));
