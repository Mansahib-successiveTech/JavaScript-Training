/*
6. Write a program to find sum of an array
*/


const findSum = (arrayOfNumber) => {
  let sum = 0;
  for (let i = 0; i < arrayOfNumber.length; i++) {
    sum += arrayOfNumber[i];
  }
  console.log(`the sum of elements are ${sum}`);
};
findSum([2, 2, 3, 3, 4, 4]);


// using reduce
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, val) => acc + val, 0);

console.log(sum);