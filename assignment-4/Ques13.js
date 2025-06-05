//13.inverse a array
let arr = [2,3,4,0,1];

const inverseArray = (arr) => {
    let inverse = [];

    for(let i = 0; i < arr.length; i++){
        inverse[arr[i]] = i;
    }
    return inverse;
}
console.log("original array " + arr);
console.log("inversed array " + inverseArray(arr));