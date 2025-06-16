/*
8. Create a function that fetches data from multiple APIs in parallel and 
then performs some operation on the combined data, using async/await.
*/
const url="https://jsonplaceholder.typicode.com/todos/1"
const func1=(url)=>{
    let result=fetch(url)
    .then((response)=>response.json());
    return result;
}

const mainFunc=async()=>{
   
    const [result1,result2]=await Promise.allSettled([func1(url),func1(url)])
    console.log(result1.value.id);
    console.log(result2.value.id);

    let final=result1.value.id+result2.value.id;
    console.log(final);
}
mainFunc()