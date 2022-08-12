// ⭕hoisting
// hoisting makes some types of variable accessible in the code before they are actually declared.

// for eg :-
a(); //here we called function before its declaration
function a(){
    console.log("see");
}

// function declaration are hoisted ✅✅
// var variables are hoisted ✅✅
// let const variables are not hoisted ❌❌
// function expression and arrow fn are hoisted on the basis of variables type
// like if its var then it will be undefined etc


// note :-  if we call a let const variable before declaration then it will
// give a reference error with message cannot use this variable before initialisation
// var and const does not create properties on window object 


// TDZ - temporal dead zone 
// this is the zone where let and const placed until they declared

// need of tdz
// -makes easier to catch error:- accessing variable before declaration is bad practice should be avoided

// need of hoisting
// - makes easier to use function before its declaration
// some says that var hoisting is the byproduct of funtions hoisting

// window 
// window is the global object in the browser 