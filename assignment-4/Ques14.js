/*
14. Write a program to reverse an array
*/

//using inbuit functions
let arr = [1, 2, 3, 6, 5, 4, 3];
let result = arr.reverse();
console.log("result using inbuilt function " + result);

//using loops
let result2 = [];
let arr2 = [1, 2, 3, 6, 5, 4, 3];
for (let i = arr2.length - 1; i >= 0; i--) {
  result2.push(arr2[i]);
}
console.log("reverse using loops " + result2);
