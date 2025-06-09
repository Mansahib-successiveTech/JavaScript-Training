/*
5.Write a program to convert given string in camel case ("hello john doe" => helloJohnDoe)
*/



const showCamelCase = (string) => {
   
  let str = string.toLowerCase().trim();
  const words = str.split(" ");
  let result = "";
  for (let i = 0; i < words.length; i++) {
    if (i == 0) {
      result += words[i];
    } else {
      let temp=words[i]; 
      temp = temp.charAt(0).toUpperCase()+words[i].slice(1);
      result += temp;
    }
  }
  console.log(result);
};
showCamelCase("    hello         john doe");
