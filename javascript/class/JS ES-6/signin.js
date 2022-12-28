const emailTarget = document.querySelector('#email');
const passwordTarget = document.querySelector('#password');
const repasswordTarget = document.querySelector('#repassword');
const getFieldValues = () => {
    return {
        email : emailTarget.value,
        password : passwordTarget.value,
        repassword : repasswordTarget.value,
    };
};
const signupSubmit = () => {
    const values = getFieldValues();

    fetch ('http://localhost:3333/api/signup',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(values),
     })
     .then((res) => res.json())
     .then((data) => {
        console.log(data);
     })
     .catch((res) =>{
        console.warn(res);
     })
};

const submitBtn = document.querySelector('button');
submitBtn.addEventListener('click', signupSubmit);


const UPPER_LETTER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER_LETTER = UPPER_LETTER.toLocaleLoLETTER();
const NUMBERS = '0123456789';
const SPECIALS = '@$%!*#?&';

match = password === repassword;
lengthPassed = password.length >= 8;

for (const char of password.split('')){
    if(!containsUpper) containsUpper = UPPER_LETTER.includes(char);
    if(!containsLower) containsLower = LOWER_LETTER.includes(char);
    if(!containsDigit) containsDigit = NUMBERS.includes(char);
    if(!containsChar) containsChar = SPECIALS.includes(char);
}

const upperTarget = document.querySelector('#upper');
const lowerTarget = document.querySelector('#lower');
const numberTarget = document.querySelector('#number');
const charTarget = document.querySelector('#char');
const lengthTarget = document.querySelector('#length');

passwordTarget.addEventListener('input', () =>{
    const {password, repassword} = getFieldValues();
    const passwordInfo = passwordCheck(password, repassword);
    // if(passwordInfo.)
})
