/*
7. Write a program to find index of duplicate elements in an array
*/

// const findDuplicate = (ar) => {

//   for (let i = 0; i < ar.length; i++) {
//     for (let j = i + 1; j < ar.length; j++) {
//       if (ar[i] == ar[j] && i != j) {

//         console.log(`this ${ar[i]} is duplicate at ${j}`);
//       }
//     }
//   }
// }
// findDuplicate([3, 4, 3, 4, 5, 1, 3]);

const findDuplicate = (ar) => {
  let unique = new Set(ar);
  let count = 0;
  for (let i of unique) {
    count = 0;
    for (let j = 0; j < ar.length; j++) {
      if (i == ar[j]) {
        count++;
        if (count > 1) {
          console.log(` ${i} id present at  ${j}`);
        }
      }
    }
  }
};
findDuplicate([1, 2, 2, 3, 4, 5, 6, 2, 3]);
