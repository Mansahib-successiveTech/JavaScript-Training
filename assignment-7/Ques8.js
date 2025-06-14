/*
8. Create a function that fetches data from multiple APIs in parallel and 
then performs some operation on the combined data, using async/await.
*/
const func1=()=>{
    let result=fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response)=>response.json());
    return result;
}

const func2=()=>{
    let result=fetch("https://jsonplaceholder.typicode.com/todos/2")
    .then((response)=>response.json());
    return result;
}

const mainFunc=async()=>{
   
    const [result1,result2]=await Promise.allSettled([func1(),func2()])
    console.log(result1.value.id);
    console.log(result2.value.id);

    let final=result1.value.id+result2.value.id;
    console.log(final);
}
mainFunc()