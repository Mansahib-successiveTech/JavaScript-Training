/*
Write a program to display the twice of a number 
starting from 2 and end at 4096 (2, 4, 8, 16, ..... 4096)
*/

const displayTwiceNumber=()=>{
    let result="";
    for(let i=2;i<=4096;i=i*2)
    {
        
        result+=i+" ";
       
    }
    console.log(`the twice list is: ${result}`);
}
displayTwiceNumber();