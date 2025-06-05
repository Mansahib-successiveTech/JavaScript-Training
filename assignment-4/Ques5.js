/*
5.Write a program to convert given string in camel case ("hello john doe" => helloJohnDoe)
*/

const showCamelCase = () => {
    let result = "";
    let trimString = string.trim();
    console.log(`before:${string}`);
    for(let i = 0; i <= trimString.length-1; i++)
    {
       if(trimString[i] == " ")
       {
           result += trimString[i + 1].toUpperCase();
       }
       else if(trimString[i] != " " && trimString[i-1] != " ")
       {   
           result += trimString[i];
       }
    } 
    console.log(`after camel case ${result}`);
}
let string = " hello john doe ";
showCamelCase(string);