/*
4. Create a class called `Person` that has properties for `firstName`, `lastName`, and `age`. 
The class should also have a method called `fullName` that returns the person's full name.
Additionally, the class should have a method called `averageAge` that takes in an array of 
`Person` objects and returns the average age of all the people in the array.
*/

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  showFullName() {
    return this.firstName + " " + this.lastName;
  }
  averageAge(array) {
    const total = array.reduce((accumaltor, obj) => accumaltor + obj.age, 0);
    return total / array.length;
  }
}

const obj1 = new Person("mansahib", "singh", 23);
const obj2 = new Person("sahib", "is", 20);
const obj3 = new Person("isha", "nailwal", 22);

const fullname = obj1.showFullName();
console.log(fullname);
const avg = obj1.averageAge([obj1, obj2, obj3]);
console.log(avg);
