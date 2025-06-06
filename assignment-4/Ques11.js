//11.buble sort

function bubleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  console.log(`sorted array is ${arr}`);
}

let arr = [1, 4, 3, 2, 9, 8, 5, 6, 7, 2];
console.log(`original array ${arr}`);
bubleSort(arr);
