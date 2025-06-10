/*
1. Write a program to iterate over object.
*/

const employee = {
  name: "mansahib",
  age: 21,
  department: "development",
};

const printValues = () => {
  for (let key in employee) {
    console.log(`${key} : ${employee[key]}`);
  }
};

printValues();
