let arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
//#1 Niilberiig ol
let sum = 0;
for (let i = 0; i < arrayOfNumbers.length; i++){
    sum += arrayOfNumbers[i];
}
console.log(sum);

//#2 Max iig ol
let max = arrayOfNumbers[0];
for(let i = 0; i < arrayOfNumbers.length; i++){
    
    if(arrayOfNumbers[i] > max){
        max = arrayOfNumbers[i];
    }
}
console.log(max);
//#3 Min iig ol

let min = arrayOfNumbers[0];
for(let i = 0; i < arrayOfNumbers.length; i++){
    if(arrayOfNumbers[i] < min){
        min = arrayOfNumbers[i];
    }
}
console.log(min);

//#4 Array iin ehend duriin neg toog nem
for(let i = arrayOfNumbers.length - 1; i >= 0; i--){
    arrayOfNumbers[i + 1] = arrayOfNumbers[i]
}
arrayOfNumbers[0]= 20;
// console.log(arrayOfNumbers);

//#5 Array iin suuld duriin neg nem
arrayOfNumbers[arrayOfNumbers.length]= 91;
console.log(arrayOfNumbers);

for (let number of arrayOfNumbers) {
    console.log(number);
}


