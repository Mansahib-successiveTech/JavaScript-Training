/*
7. Create a function that performs multiple asynchronous operations 
in parallel using async/await and waits for all of them to complete 
before returning the results.
*/
const asyncOperation=()=>{
 let promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(1){
        resolve("resolved 1")
        }
        else{
            reject("rejected 1")
        }
    },5000)
 })
return promise;
}


const mainFunc=async()=>{
    console.log("starting");
    try{
        let result1=asyncOperation();
        console.log(1);
        let result2=asyncOperation();
        console.log(2);
        let final=await Promise.allSettled([result1,result2])
        console.log(3);
        console.log(final);

    }catch(err){
        console.log(err);
    }
}

mainFunc()