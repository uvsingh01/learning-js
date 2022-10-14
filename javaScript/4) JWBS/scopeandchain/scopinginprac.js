// function calcAge(birthYear){
//     const age  = 2037 -birthYear;
//     console.log(firstNme); //this will look for fname in GEC 
//     return age;
// }

// const firstNme= "Yuvraj";
// calcAge(1991);

'use strict';

///////////////////////////////////////
// Scoping in Practice


function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';
      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str); // this will throw error because this is block scoped
    console.log(millenial);
    // console.log(add(2, 3)); // if we remove use strict then this function will become function scope else its block scoped
    console.log(output);
  }
  printAge();
  return age;
}
const firstName = 'Yuvraj';
calcAge(2001); 
// console.log(age);
// printAge();