//7.Arrow functions


// Write a function expression that takes in a number and returns its square.
const getSquare = (num)=>num*num;

console.log("The square of " + 10 + " is " + getSquare(10));

// Write a function expression that takes in two numbers and returns their sum.

const twoSum=(num1,num2)=>num1+num2;
console.log("The sum of given numbers are " + twoSum(5,10));

// Write a function expression that takes in a number and returns true if it's even and false if it's odd.

const isEven=(num)=>{
    if(num % 2 == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(oddEven(7))