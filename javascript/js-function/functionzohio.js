//#1
function too(a,b){
    if(a>b){
        return a;
    }else{
        return b; 
    }
}
console.log(too(10,5))
//#2

        function findNumberInArray(number, array) {
          for (let i = 0; i < array.length; i++) {
            if (array[i] === number) {
              return "This is number:" + number;
            }
          }
          return -1;
        }
        console.log(findNumberInArray(10, [12, 10, 30]));

//#3
      function findStringInNumber(string1, string2) {
        for (let i = 0; i < string2.length; i++) {
          if (string2[i] === string1) {
            return "This is number:" + string1;
          }
        }
        return -1;
      }
      console.log(findStringInNumber("h", "hello"));

//#4
        function randomNumber(min, max) {
          return Math.floor(Math.random() * (max - min + 1) + min);
        }
        console.log(randomNumber(5, 15));

//#5

      function givenArray(array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
          sum += array[i];
        }
        return sum / array.length;
      }

      console.log(givenArray([10, 50]));

//#6
      function givenArray(array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
          sum += array[i];
        }
        return sum;
      }

      console.log(givenArray([10, 50]));
//#8
      function upperCase(string) {
        string = string.toUpperCase();
        return string;
      }
      console.log(upperCase("Hello world"));

//#9
      function lowerCase(string) {
        string = string.toLowerCase();
        return string;
      }
      console.log(lowerCase("Hello world"));
