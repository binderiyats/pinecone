const arr = [10, 21, 33, 44, 55, 66];
const arr1 = [12, 22, 33, 55, 66, 77, 88, 99];
const arr2 = [12, 22, 33, 55, 66, 77, 88, 99, 101];

function arrPrint (data) {
    for(let i = 0; i < data.length; i++){
        console.log(data[i]);   
    }
}

console.log('Arr');
arrPrint(arr);
console.log('Arr1');
arrPrint(arr1);
console.log('Arr2');
arrPrint(arr2);

function sum (a, b) {
    const sumNum = a + b;
    return sumNum;
}

const number = sum(1, 223);

//Өгөгдсөн 2 тооны ихийг олох функц бич.
function givenNumber (a, b){
    if (a > b) return a;
    else{
        return b
    }

}

const max = givenNumber(100,1000);
console.log(max);


//Өгөгдсөн array - ийн нийлбэрийг олох функц бич.
// function sumArr(input){
//     let sum = 0;
//     for(let i = 0; i < input.length; i++){
//         sum +=input[i];
//     }
//     return sum
// }
// console.log(sumArr([1,2,2]));

// Dundajiig oloh function bich
function average (input) {
    let sum = 0;
    for(let i = 0; i < input.length; i++){
       sum += input[i]; 
    }
    return sum / input.length;
}
const avg = average([1,2,3]);
console.log(avg);

//Is it primary number?

// function randomNum (num){
//     if(num)
// }