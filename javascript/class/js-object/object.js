const student ={
    lastName : 'Odgerel',
    firstName : 'Sed-Erdene',
    age : 17,
    hobby : ['video games', 'watching stream', 'anime']

}

console.log(`${student.lastName} ovogtoi ${student.firstName} ni ${student.age} nastai`);
const data = [
    {firstName: 'Dorj', gender:'F',lastName: 'Bat', point :'80', age : 19},
    {firstName: 'Bold', gender:'M',lastName: 'Balbar', point :'88', age : 20},
    {firstName: 'balbar', gender:'F',lastName: 'Purev', point :'90', age : 25},
    {firstName: 'Huslen', gender:'M',lastName: '', point :'92', age : 30},
    {firstName: 'MAral', gender:'F',lastName: 'Bat', point :'94', age : 35},
    {firstName: 'Dondog', gender:'M',lastName: 'Bat', point :'96', age : 41},
    {firstName: 'Seree', gender:'F',lastName: 'Bat', point :'81', age : 17},
    {firstName: 'Goku', gender:'M',lastName: 'Bat', point :'82', age : 22},
    {firstName: 'Naruto', gender:'F',lastName: 'Bat', point :'85', age : 18},
    {firstName: 'Zenitsu', gender:'M',lastName: 'Bat', point :'80', age : 40},

]
//Gender M and F
function getCountByGender(list, gender) {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i].gender === gender) {
      count++;
    }
  }
  return count;
}
const femaleCount = getCountByGender(data, "F");
const maleCount = getCountByGender(data, "M");

console.log(`Niit ${femaleCount} emegtei, ${maleCount} eregtei baina`);

//Age range
function getCountByAgeRange(list, min, max) {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i].age >= min && list[i].age < max) {
      count++;
    }
  }
  return count;
}

const childrenCount = getCountByAgeRange(data, 0, 18);
const youth = getCountByAgeRange(data, 18, 30);
const adult = getCountByAgeRange(data, 30, 55);
const elder = getCountByAgeRange(data, 55, 100);

console.log(
  `Niit:${childrenCount} huuhed, ${youth} zaluuchuud, ${adult} dund nasnii humuus, ${elder} ahmad nasnii humuus baina`
);
// const totalA = getCountByFieldValueRange(data,'point',99,101);    
//# simple object
const dog = {
    name: 'Lucky', 
    breed: 'German Shepherd',
    age: 3,
    color: 'black'
}
console.log(dog.name);
console.log(dog['age']);

//
let animals = [{type: "dog", sound: "woof"}, 
    {type: "cow",sound: "moo"},
    {type: "cat",sound: "meow"},
    {type: "fox", sound: 'hateehateehateeho'}] 
//MERN object
const users = [
{
    name:   'Alex',
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 45,
    isLoggedIn: false,
    points: 30
  },
{
    name:   'Josh',
    email: 'job@job.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
{
    name:   'Brook',
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 39,
    isLoggedIn: true,
    points: 50
  },
{
    name:   'Daniel',
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 25,
    isLoggedIn: false,
    points: 40
  },
{
    name:   'John',
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
{
    name:   'Thomas',
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 18,
    isLoggedIn: false,
    points: 40
  },
{
    name:    'Paul',
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 40
  }
]
let user1 = users[0];
console.log(user1);
console.log(user1.name);



let maxNumber = 0;
let user;
for(let i = 0; i < users.length; i++){

    if(users[i].skills.length > maxNumber){
        user  = users[i].name;
        maxNumber =users[i].skills.length;
    }

}
console.log(user);

let 
function isMern(){

}



//
const students = [
    {
        name: "Гончигсумлай", 
        birthOfYear: 1999, 
        hobby: "морь", 
        single: false
    },
    {
        name: "Binderiya", 
        birthOfYear: 1999, 
        hobby: "морь", 
        single: false
    },
    {
        name: "Indra", 
        birthOfYear: 1999, 
        hobby: "морь", 
        single: true,
    },
    {
        name: "Sed-Erdene", 
        birthOfYear: 1999, 
        hobby: "морь", 
        single: false
    },
    {
        name: "Javkhlant", 
        birthOfYear: 1999, 
        hobby: "морь", 
        single: false
    }
];

function getAge(student) {
    return 2022 - student.birthOfYear;
};

console.log(getAge(students[0]));


function getStudentsOlderThanTwenty(students){
    const result = [];
    for(let i = 0; i < students.length; i++){
        if(getAge(students[i]) >= 20) result.push(students[i]);
    }

    return result;
}

const studentsOlderThanTwenty = getStudentsOlderThanTwenty(students);
console.log(studentsOlderThanTwenty);


function getSingleStudents(students) {
    const result = [];
    for(let i = 0; i < students.length; i++){
        if(students[i].single) result.push(students[i]);
    }

    return result;
}

const singleStudents = getSingleStudents(students);
console.log(singleStudents);