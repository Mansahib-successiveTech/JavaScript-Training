// 2. let myObject = { name: 'John', age: 30 };
// for (property in myObject) {
//    console.log(property + ': ' + myObject.property);
// }





//accessing key in loop using the following syntax
//.property searching for property in object
let myObject = { name: "John", age: 30 };
for (property in myObject) {
  console.log(property + ": " + myObject[property]);
}
