/*
10. Write a program to concatenate an input of array of arrays
*/
const concateArray = (arr) => {
  let flatArr = arr.flat();
  console.log(`concatenated array is ${flatArr}`);
};

concateArray([
  [1, 2, 3],
  [4, 5],
  [6, 7],
]);
