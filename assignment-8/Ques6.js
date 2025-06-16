// 6. var person = { name: "John Doe", age: 30, getDetails: function() { console.log(this.name + " is " + this.age + " years old"); } };
// var getPersonDetails = person.getDetails;
// getPersonDetails();



//use of apply and bind to be discussed in next class (friday)
var person = {
  name: "John Doe",
  age: 30,
  getDetails: function () {
    console.log(this.name + " is " + this.age + " years old");
  },
};
person.getDetails();
