/*
Write a program to display Diamond Pattern
*/

function diamondPattern() {
    let space = 4;
    let value = 1;

    for (let i = 1; i <= 9; i++) {
      let row = "";
      for (let j = space; j >= 0; j--) {
        row += " ";
      }
      for (let j = 1; j <= value; j++) {
        row += "*";
        row += " ";
      }
  
      if (i < 5) {
        space--;
        value++;
      } else {
        space++;
        value--;
      }
      console.log(row);
    }
  }
  diamondPattern();