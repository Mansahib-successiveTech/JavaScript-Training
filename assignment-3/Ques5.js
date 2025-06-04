/*
5.Write a program to print all even number first and then
 all odd numbers using only one iteration
*/

const oddEven=(n)=>{
let even = "";
let odd = "";


for(let i = 0;i < n;i++)
{
    if(i % 2 == 0)
    {
        even += i + " ";
    }
    else 
    {
        odd += i + " "
    }
}
//concatinating both result in a single variable
let result=even+odd;
console.log(`the list of odd even is ${result}`);
}

oddEven(20);