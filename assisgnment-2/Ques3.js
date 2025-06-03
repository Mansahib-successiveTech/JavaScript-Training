/*
3.Write a function expression that takes in another function as an argument
*/


//function for finding factorial
function getFactorial(num){
    let result=1;
    while(num!=0){
    result =result * num;
    num--;
  }
  return result;
}

// calling factorial function in aother function
function tellNumber(getFactorial,num){
    console.log("The factorial is " + getFactorial(num));

}
//calling final function 
tellNumber(getFactorial,5);