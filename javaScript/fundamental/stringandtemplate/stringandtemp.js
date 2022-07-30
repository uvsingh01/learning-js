const firstName ="Yuvraj";
const job ="Student"
const birthYear = 2001;
const year = 2022

// normal string

// 🔴 devs used to use this way to create a string using variable
//  and its very hectic for managing the space and it was used
//   before es6

// 🔴 we can use single inverted comma and double inverted comma to initailize a string

// 🔴 In this normal string declaration its so difficult to 
// create multiple lines by inserting \n in like this "string \n"

const uv = "I'm " + firstName +" , a" + (year-birthYear)+ "years old" + job+" ! \n" +"Thank you";
console.log(uv);



// template literal

// 🔴 this template feature was introduced in ES6 to ease
// the process of creating string with variables

// 🔴 we cane use backtick(``) to use this feature

// 🔴 to insert any variable or javascript code we have to
// use curly braces with dollar sign like this ${varName};

// 🔴in this feature its easy to create multiple line by 
// simply pressing the enter/return key

// 🔴in this feature in string we can only add 
// expression like (3-2) && not statements like (if-else)
// but we can use ternary operator instead of statement

const yuvi = `I'm ${firstName}, a ${year-birthYear} years old ${job}!
thank you`;
console.log(yuvi);

let msg = `Hello \
World`;
console.log(`${msg}`);

