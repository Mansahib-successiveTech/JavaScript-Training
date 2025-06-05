/*
7. Write a program to find index of duplicate elements in an array
*/

const findDuplicate = (ar) =>{
for(let i = 0; i < ar.length; i++)
{
    for(let j = i+1; j < ar.length; j++)
    {
     if(ar[i] == ar[j] && i != j)
        {
            console.log(`this ${ar[i]} is duplicate at ${j}`);
        }   
    }
}
}
findDuplicate([3,4,3,4,5,1]);