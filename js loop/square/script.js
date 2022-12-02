let n = Number(window.prompt("hi"));let string ="";
for (let row = 0; row < n; row ++) {
    for (let col = 0; col < n; col ++) {
        string += "*";
    }
    // newline after each row
    string += "\n";
}
console.log(string);
