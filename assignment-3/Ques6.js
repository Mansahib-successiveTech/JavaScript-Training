/*
Write a program to display prime numbers from 1 to 50
*/

const showPrime=()=>{
    let result=" ";
    for(let i=1;i<=50;i++)
    {
        if(checkPrime(i))
        {
           result+=i+" ";
        }
    }
    console.log(`prime numbers between the given range is ${result}`);

}

//checking if a number is prime 
const checkPrime=(num)=>{
    for(let i=2;i<=num/2;i++)
    {
        if(num%i==0)
            return false;
    }
    return true;
}
showPrime();