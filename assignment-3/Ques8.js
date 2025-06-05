/*
8.Write a program to dispaly number from 1-20 using all types of loops
*/
const printUsingFor=()=>{
    for(let i=1;i<=20;i++)
        console.log(i);
}
const printUsingwhile=()=>{
    let i=1;
    while(i<=20){
        console.log(i);
        i++;
    }
}

const printUsingDoWhile=()=>{
     let i=1
    do{
    
      console.log(i);
      i++;
    }while(i<=20);
}

printUsingFor();
printUsingwhile();
printUsingDoWhile();