// 4. Write a program deepClone that takes an object as input and
// returns a deep copy of that object. The function should handle nested objects and arrays.

const person = {
   name: "mansahib",
  value: 10,
  nested: {
    data: [1, 2, 3],
    name2:"try"
  },
  myDate: new Date(),
};
const deepCopy=(obj)=>{
const deepCloned=structuredClone(obj);
deepCloned.nested.data.push(120);
deepCloned.nested.name2="singh"
deepCloned.name="sahib"
console.log(deepCloned);
}

deepCopy(person)
console.log(person);