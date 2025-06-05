/*
9.Write a program to print fibonaaci series
*/


let num1=0;
let num2=1;
let range=18;
let result;
const fibonaaciSeries=()=>{
    while(range>0){
        result=num1+num2;
        num1=num2;
        num2=result;
        range--;
        console.log(result);
    }

    
}
fibonaaciSeries();