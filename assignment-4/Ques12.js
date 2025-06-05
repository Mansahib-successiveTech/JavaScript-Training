/*
12.Write a program to display intersection of two array

*/
const intersectionArray = (ar1,ar2) => {
    let result = [];
    for(let i = 0; i < ar1.length; i++){
        for(let j = 0; j< ar2.length; j++)
            {
                if(ar1[i] === ar2[j])
                {
                    result.push(ar1[i]);
                }
            }    
    }
    console.log("intersection of arrays is " + result);
}
intersectionArray([1,2,3,4],[3,4,5,4,3]);