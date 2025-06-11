/*
6. Implement a function that returns a resolved Promise after a specified 
delay using async/await.
*/
/*
6. Implement a function that returns a resolved Promise after a specified 
delay using async/await.
*/
function showAfterInterval() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (1) {
        resolve("resolved after 5 sec");
      } else {
        reject("rejected");
      }
    }, 5000);
  });
  return promise;
}

async function showInfo() {
  try {
    console.log("start");
    let result = await showAfterInterval();
    console.log(1);
    console.log(result);
    console.log(2);
  } catch (err) {
    console.log(err);
  }
}

showInfo();
