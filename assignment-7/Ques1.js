// . Give an example of using a callback function to handle an asynchronous operation in 
// JavaScript (Use any open api to make a call)

const fetchData=(url,callback)=>{
    fetch(url)
    .then(response =>{
        if(response.ok){
            return response.json();
        }
        throw new Error("ERROR");
    })
    .then(data=>callback(data))
    .catch(error=>callback(error))
}
fetchData("https://jsonplaceholder.typicode.com/todos",(data)=>{
    if(data){
        console.log(data);
        return
    }
    else
    {
        console.log(data);
        return
    }
})