// 4. Write a program deepClone that takes an object as input and 
// returns a deep copy of that object. The function should handle nested objects and arrays.


const person = {
  name: "sahib",
  age: 33,
  gender: "male",
  departpartment: "node",
  fn: function () {
    return "hi";
  },

  arr: [1, 2, 3, [12, 12]],
  features: {
    height: 180,
    eye: "black",
  },
};
const deepCopy = (person, newObj) => {
  for (let i in person) {
    newObj[i] = person[i];
  }
  return newObj;
};
let newObj = {};
const result = deepCopy(person, newObj);
console.log(result);
