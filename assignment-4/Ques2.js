/*
2.Write a program to reverse a string ("Hello John" => "olleH nhoJ")
*/

/* 
using loops

 let string = "Hello John";
 let result = "";

 for(let i = string.length-1;i >= 0;i--){
     result += string[i];
      
}
 console.log(result);
*/

//using string functions
let string = "Hello John";
let result = string.split("").reverse().join(""); //splitting in array then using reversing and join
console.log("reverser string is " + result);
