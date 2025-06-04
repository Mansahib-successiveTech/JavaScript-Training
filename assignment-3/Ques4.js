/*
4.Write a program to print all even number first and then
 all odd numbers 
*/

const oddEven=(n)=>{
    let even = "";
    let odd = "";
    
//iterating over +2 skiping the logical operator    
    for(let i = 0;i < n;i=i+2)
    {
            even += i + " ";
    }
     
    for(let i = 1;i < n;i=i+2)
    {
            odd += i + " "
    }
    let result=even+odd;
    console.log(`the list is even: ${even} , odd: ${odd}`);
    }
    
    oddEven(20);