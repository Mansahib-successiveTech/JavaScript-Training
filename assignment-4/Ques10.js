/*
10. Write a program to concatenate an input of array of arrays
*/

// using inbuilt functions
const concateArray = (arr) => {
  let flatArr = arr.flat();
  console.log(`concatenated array is ${flatArr}`);
};

concateArray([
  [1, 2, 3],
  [4, 5],
  [6, 7]
]);

//using recurrsion

const flatArray = (arr) => {
  let result = [];
  for (let i of arr) {
    if (Array.isArray(i)) {
      result = result.concat(flatArray(i));
    } else {
      result.push(i);
    }
  }
  return result;
};
console.log(flatArray([
    [1, 2, 3],
    [4, 5],
    [6, 7,[1,2]]]));
   