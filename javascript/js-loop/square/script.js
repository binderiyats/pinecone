// let n = Number(window.prompt("hi"));let string ="";
// for (let row = 0; row < n; row ++) {
//     for (let col = 0; col < n; col ++) {
//         string += "*";
//     }
//     // newline after each row
//     string += "\n";
// }
// console.log(string);
row = 5;
      k = "";
      for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= row; j++) {
          if (i == 1 || i == 5) k += "*";
          else {
            if (j == 1 || j == 5) k += "*";
            else k += " ";
          }
        }
        k += "\n";
      }
      console.log(k);