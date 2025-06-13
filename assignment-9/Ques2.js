import lodash from "lodash";
let arr = [1, 2, [2, 3, [4, 5]]];
let flatAraay = lodash.flattenDeep(arr);
console.log(flatAraay);
