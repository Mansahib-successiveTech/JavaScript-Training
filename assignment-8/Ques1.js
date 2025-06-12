/*
Find Error in below questions and rectify them

1. let myArray = [1, 2, 3, 4];
for (let i = 0; i <= myArray.length; i++) {
   console.log(myArray[i]);
}

*/

let myArray = [1, 2, 3, 4];
// was showing undefined because of the loop running out of loop hence undefined value
//solution
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
