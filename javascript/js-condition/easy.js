//#1
let grades = '';
switch(grades){
    case 'A' :
    console.log(90-100)
    break
    case 'B' :
    console.log(80-89)
    break
    case 'C' :
    console.log(70-79)
    break
    case 'D' :
    console.log(60-69)
    break
    case 'F' :
    console.log(0-59)
    break20
}

//#2
let month = 12;
switch(month){
    case 1 :
    console.log('31')
    break
    case 2 :
    console.log('28-29')
    break
    case 3 :
    console.log('31')
    break
    case 4 :
    console.log('30')
    break
    case 5 :
    console.log("31")
    case 6 :
    console.log("30")
    case 7 :
    console.log("31")
    case 8 :
    console.log("31")
    case 9 :
    console.log("30")
    case 10 :
    console.log("31")
    case 11 :
    console.log("30")
    case 12 :
    console.log("31")
    break
}
console.log(month);

//#3
let positiveNumber = 6;
if(positiveNumber%3 === 0 && positiveNumber % 7 === 0){
    console.log(`${positiveNumber} ni 3 bolon 7d  huvaagdana`)
}else if(positiveNumber%7 === 0){
    console.log(`${positiveNumber} ni 7t huvaagdana`)
}else if(positiveNumber%3 === 0){
    console.log(`${positiveNumber} ni 3t huvaagdana`)
}
else{
    console.log(`${positiveNumber} ni 3 bolon 7d  huvaagdahgui`)
}

//#4 Positive or Negative
let number = 0;
if(number > 0){
    console.log(`${number} is positive number.`)
} else if(number < 0){
    console.log(`${number} is negative number.`)
} else{
    console.log(`${number} is zero.`)
}

//#6 Equal or Odd
let numbers = 0;
if(number %2 === 0 && number !== 0){
    console.log(`${numbers} is equal number.`)
} else if(number % 2!== 0){
    console.log(`${numbers} is odd number.`)
} else{
    console.log(`${numbers} is zero.`)
}
//#8
let yearOfBirth = 2000;
let old = 2022 - yearOfBirth;

if(0 <= old < 1){
    console.log('Infant')
}else if(1 < old <= 3){
    console.log('Toddler')
}else if(3 < old <= 5){
    console.log('Preschool')
}else if(5 < old <= 12){
    console.log('GradeSchool')
}else if(12 < old <= 18){
    console.log('Teen')
}else if(18 < old <= 21){
    console.log('Young adult')
}else if(old > 21){
    console.log('Adult')
}
console.log(old);