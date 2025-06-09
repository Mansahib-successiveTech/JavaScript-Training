/*
9.Write a program to find the last duplicate index in an array
*/

const lastIndex = (arr) => {
  const map = new Map();
  arr.forEach((element, index) => {
    if (map.has(element)) {
      map.set(element, index);
    } else {
      map.set(element, -1);
    }
  });
  map.forEach((value, key) => {
    if (value === -1) {
      map.delete(key);
    }
  });

  return map;
};

const lastIndexs = lastIndex([1, 3, 5, 2, 1, 2,2]);
console.log(lastIndexs);
