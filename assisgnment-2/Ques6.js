/* 6. Write a function expression that takes in a number and returns true if it's even
 and false if it's odd. */

//isEven is a function that tell about a number is even or not
 function isEven(num){

    if(num % 2 == 0)       //check if divisible by 2 or not
    {
        return true; 
    }
    else
    {
        return false;
    }

}

console.log(isEven(8));