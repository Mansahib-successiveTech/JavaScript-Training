/*
2.Write a function to take input(age, name, phone no.) from user and display it
*/


//using html prompt window
function displayInformation() 
{
    let name=window.prompt("Please enter your name", "Mansahib"); 
    let age=window.prompt("Please enter your age");
    let phoneNumber=prompt("Please enter your phone number"); 
    console.log(name, age, phoneNumber);
}
displayInformation();

/*
using static inputs  


function displayInformation(name, age, phone) {
  return " user name " + name + " Age " + age + " PhoneNumber " + phone;
}

const information = displayInformation("Mansahib", 23, 21343456);
console.log(information);
*/