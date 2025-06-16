/*
2. Give an example of using multiple callback functions in a single function in JavaScript
*/
const showUser = (name, callback) => {
  console.log(`user is ${name}`);
  callback();
};
const showUserDepartment = (department, callback) => {
  console.log(`department is ${department}`);
  callback();
};
showUser("sahib", () => {
  showUserDepartment("node",() => {
    console.log("after both callbacks");
  });
});
