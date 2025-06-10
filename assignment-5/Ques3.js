/*
3. Write a program to remove all the id key from array of object ({name:"John", age:27, id:1})
*/

const persons = [
  {
    name: "john",
    age: 121,
    id: 1,
  },
  {
    name: "doe",
    age: 19,
    id: 2,
  },
  {
    name: "hm",
    age: 22,
    id: 3,
  },
];

const deleteKeys = (obj) => {
  for (let i of obj) {
    delete i.id;
  }
};
deleteKeys(persons);
console.log(persons);
