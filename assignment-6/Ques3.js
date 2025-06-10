/*
3.1 Create a class Person with properties name, age, gender, and interests. Add a method greeting() 
that returns a string introducing the person.
 Also add a method farewell() that returns a string saying goodbye to the person.
*/

class person {
  constructor(name, age, gender, interests) {
    this.name = name;
    this.age=age;
    this.gender = gender;
    this.interests = interests;
  }
  greeting() {
    console.log(`hello my name is ${this.name} my age is ${this.age} my gender is ${this.gender} and interests is ${this.interests}`);
  }
  farewell() {
    console.log(`goodbye ${this.name}`);
  }
}

const obj1=new person("mansahib",23,"male","travelling")
obj1.greeting();
obj1.farewell();


// 3.2 Create a class Student that inherits from the Person class and 
// has a property studies. Override the greeting() method to include information 
// about what the student is studying.
class student extends person{
    constructor(name, age, gender, interests,studies){
      super(name, age, gender, interests);
      this.studies=studies;
    }
   greeting(){
    console.log(`iam ${this.name} and iam studying ${this.studies} `)
   }
}
const obj2=new student("mansahib",23,"male","travelling","node")
obj2.greeting()


// 3.3 Create a class Teacher that inherits from the Person class and 
// has a property subjectsTaught. Override the farewell()
//  method to include information about what the teacher teaches.

class teacher extends person{
  constructor(name, age, gender, interests,subjectsTaught){
    super(name, age, gender, interests);
    this.subjectsTaught=subjectsTaught;
  }
 farewell(){
  console.log(`${this.name} teaches ${this.subjectsTaught}`);
 }
}
const obj3=new teacher("mansahib",23,"male","travelling","development");
obj3.farewell();

