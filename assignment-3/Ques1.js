/*
1. Write a program to perform functionality of a calculator (add,sub,multiply,divide)
*/



//function to calculate sum
const sumOfNumbers=(num1,num2)=>num1 + num2;


//function to calculate difference
const differenceOfNumbers=(num1,num2)=> num1 - num2




//function to calculate product
const productOfNumbers=(num1,num2)=>num1 * num2;


//function to calculate quotient
const divisionOfNumbers=(num1,num2)=>num1 / num2
        
      

/*main function for calculator where 2 number and a operator is sent as paprameter and accordingly
to the operator the result is diplayed out*/
const calculator=(num1,num2,operator)=>{
    if(operator === "+")
    {
        console.log(`the sum of numbers are ${sumOfNumbers(num1,num2)}`);
    }
    else 
    if(operator === "-")
    {
        console.log(`the difference of numbers are ${differenceOfNumbers(num1,num2)}`);

    }else
    if(operator === "*")
    {
        console.log(`the product of numbers are ${productOfNumbers(num1,num2)}`);

    }else
    if(operator === "/")
    {
        console.log(`the quotient of numbers are ${divisionOfNumbers(num1,num2)}`);

    }
    else
    {
        console.log("Invalid operator");
    }

}

const num1=4;
const num2=5;

calculator(num1,num2,"+");
calculator(num1,num2,"-");
calculator(num1,num2,"*");
calculator(num1,num2,"/");
calculator(num1,num2,"#");