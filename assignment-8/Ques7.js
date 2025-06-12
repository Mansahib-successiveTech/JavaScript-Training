// 7. for (var i = 0; i < 10; i++) {
//     setTimeout(function() { console.log(i); }, 1000); }





//using let instead of var as it saves last value and has function scope
for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
