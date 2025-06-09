/*
1. Write a program to remove duplicate charecters from a string 
("Hello Yellow" => "Helo Yw")
*/

const checkDuplicate = (string) => {
  let str=string.toLowerCase();
  let noDuplicate = new Set(str);
  let result = "";
  for (let i of noDuplicate) result += i;
  console.log(`After removing duplicates the string is: ${result}`);
};

let str = "Hello Yellow wello";
checkDuplicate(str);
