// ⭕Scoping
// the arrangement of variables 

// range of variable functionality by which it can be called 

// ⭕lexical scoping
// area of definition of an expression
// range of variable functionality by which it can be called 
// Lexical Scope means that in a nested group of functions, the inner
//  functions have access to the variables and other resources of their parent scope

// ⭕lexical environment
// Every execution context has a reference to its outer environment,
// and that outer environment is called Lexical Environment.

// ⭕scope
// environment where a certain variable is declared 
// scope is a place where a varible can be acessed

// 🔺three types of scope

// 🔻1) Global Scope
// outside of any function or block

// variable declare in global scope are

// accessible everywhere


// 🔻2) Function Scope
// variables are accessible only insidde the function
// note:-var is function scoped
// also called local scope

// 🔻3) Block Scope // this is an ES6 feature
// variables are accessible only inside a block

// this only applies for let and const

// functions are also block scoped (only in strict mode)


//  ⭕scope chain
// order in which function are written in the code
// has nothing todo in which the function is called
// the order of function call does not affect scope chain
//  A stack of currently accessible scopes, from the most 
// immediate context to the global context.


// A scope will never,ever have access to the variable of an inner scope


a=10;
var a=40;
a=50;
console.log(a);
// var a=1;
// (function(){
//     console.log(a);
//     a=2;
//     console.log(a);
// })();















// function a(){
//     function b(){
//         let abc =10;
//         console.log(abc);
//     }
//     b();
// }
// a();

// function makeFunc() {
//     const name = 'Mozilla';
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
//   }
  
//   const myFunc = makeFunc();
//   myFunc();