// three types of declaration
var a = 10;
let x= 20;
const y = 30;
//🚨its considered good practise if we use const frequently

//let 
// its used in conditions where we have to reassign a value

let b =6;
b=4;
console.log(b);


//const
// its used when we do not need to reassign a value

const c =50;
c=10; //🔺this will give an error
const e; // 🔴 we cannot declare it like that we have to intialze it compulsarily

// var
// it was the only var declaration used before ES6
// avoided declaration in javascript 

var g = 60;
g=70;

// direct declaration

lastName = "Singh";//🔞this will create a property in global scope and this thing is very bad for overall code


