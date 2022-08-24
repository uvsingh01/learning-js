// ⭕first class functions 
// js treats fn as first class fn
// functions are simply values
// functions are just a type of object
// call methods on functions


// ⭕higher order function
// because javascript treat fn as value htne only the higher order fn are possible
// a function that can receives another fn as argument that return new fn or both

// store fn as variable
const add = () =>console.log(1);

// pass functions as argument to another function
const result  = (func)=> {
    func();
}
result(add);

// return a function from a function

const final = ()=>{
    return add();
}
final();


