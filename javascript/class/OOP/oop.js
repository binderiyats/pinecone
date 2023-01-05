// class Car{
// constructor(name,id){
// this.name = name;
// this.id = id;
// }
// }
// let car = new Car('BMW',21);
// console.log(car);

class Animal {
  constructor(sounds, gender) {
    this.legs = 4;
    this.ears = 2;
    this.gender = gender;
    this.sounds = sounds;
  }
}

class Dog extends Animal {
  constructor() {
    super("bark bark", "male");
    this.sounds = "Bark bark";
  }
}

class Cat extends Animal {
  constructor() {
    super("meow", "female");
    this.hobby = "Yarns";
  }
}
class Snake extends Animal {
  constructor() {
    super("sss");
  }
}

class Person {
  constructor(age, gender) {
    this.age = age;
    this.gender = gender;
  }
}

class Student {
  constructor(name, bithYear, weight, height) {
    this.name = name;
    this.bithYear = bithYear;
    this.weight = weight;
    this.height = height;
  }

  getBMI() {
    return this.weight / this.height ** 2;
  }

  getAge() {
    return new Date().getFullYear() - this.bithYear;
  }
}
const generateNumber = (min, max) => {
  return Math.round(Math.random() * (max - min)) + min;
};
const thisYear = new Date().getFullYear();
const students = [];

for (let i = 1; i <= 20; i++) {
  const student = new Student(
    "Student " + i,
    generateNumber(2000, thisYear),
    generateNumber(40, 100),
    generateNumber(155, 190)
  );
  students.push(student);
}
console.log(students);

let averageBMI;

let averageAge;
let studentWithMaxBMI;
let studentWithMinBMI;
let youngest;
let oldest;

function general() {
  let sumBMI = 0;
  let sumAge = 0;
  let young = 0;
  for (let i = 0; i < students.length; i++) {
    // console.log(students[i].getBMI());
    sumBMI += students[i].getBMI();
    sumAge += students[i].getAge();
    if (i < students[i]) young += i;
  }
  averageBMI = sumBMI / students.length;
  averageAge = sumAge / students.length;
  youngest = young;
}
general();
console.log(averageBMI);
console.log(youngest);

//1 Calculate Average BMI
//2 Calculate Average Age
//3 Calculate Max BMI
//3 Calculate Min BMI

// console.log(new Student());
