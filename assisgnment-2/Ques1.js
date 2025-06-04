/*
1. Write a program to give a random output between 1 to 10 
(AC: 2 simultaneous answers could not be same)
*/

//function to get random number
function getRandomNumber(){
    return Math.floor(Math.random()*10+1);
}

const a=getRandomNumber();
let b=getRandomNumber();

// if statements to solve if 2 simultaneous answers are same 
if(a == b){
    b = b - 1 == 0 ? b + 1:b - 1;
    console.log(a,b);

  }
else 
  console.log(a,b);



