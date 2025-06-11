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
    let result1=await func1();
    let result2=await func2();
    console.log(result1.id);
    console.log(result2.id);

    let final=result1.id+result2.id;
    console.log(final);
}
mainFunc()