/*
2. Write a program to sort an array of object on the basis of age ({name:"John", age:26})
*/

const persons = [
  {
    name: "john",
    age: 121,
  },
  {
    name: "doe",
    age: 19,
  },
  {
    name: "hm",
    age: 22,
  },
];
const sortObject = (obj) => {
  obj.sort((val1, val2) => {
    if (val1.age > val2.age) {
      return 1;
    }
    if (val1.age < val2.age) {
      return -1;
    }
    return 0;
  });
  return obj;
};

let result = sortObject(persons);
console.log(result);
