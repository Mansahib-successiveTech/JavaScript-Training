// 3. Convert a callback-based API to a Promise-based API
// (function fetchData(callback)
// { setTimeout(() =>
// { callback(null, "Data fetched successfully"); }, 1000); })

function fetchData(url, callback) {
  return new Promise((resolve, reject) => {
    let result = fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("ERROR");
      })
      .then((data) => callback(data))
      .catch((error) => callback(error));
    if (!result) {
      reject(result);
    } else {
      resolve(result);
    }
  });
}
function display(data) {
  console.log(data);
}
fetchData("https://jsonplaceholder.typicode.com/todos", display);
