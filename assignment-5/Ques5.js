// 5. Write a program flattenObject that takes an object with nested properties and returns a
// flat object with the nested properties transformed into dot-separated properties.
// The function should handle nested objects and arrays.
// const obj = {
//    a: 1,
//    b: { c: 2, d: [3, 4] }
// };
// Output: { 'a': 1, 'b.c': 2, 'b.d.0': 3, 'b.d.1': 4 }

const flatObject = (obj, prefix = "", result = {}) => {
  for (let key in obj) {
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] == "object" && obj[key] != null) {
      flatObject(obj[key], newKey, result);
    } else {
      result[newKey] = obj[key];
    }
  }
  return result;
};

const obj = {
  a: 1,
  b: { c: 2, d: [3, 4] },
};
console.log(flatObject(obj));
