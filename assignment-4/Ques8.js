/*
8.Write a program to remove dupliacte elements from an array
*/

const removeDuplicate = (ar) => {
  let result = [];
  for (let i = 0; i < ar.length; i++) {
    let count = 1;
    for (let j = i + 1; j < ar.length; j++) {
      if (ar[i] == ar[j]) {
        count++;
      }
    }
    if (count == 1) result.push(ar[i]);
  }
  console.log(`after removing duplicate array is ${result}`);
};

removeDuplicate([1, 2, 2, 4, 2]);
