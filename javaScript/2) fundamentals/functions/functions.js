//functions

// 🔺this is a piece of code which can be used when we call it;
// 🔺we can give any parameter without defining the parameter datatype
// 🔺we can return anything from a function
// 🔺we can directly log the return function like line 22 and can store that return value in a variable
// 🔺not all functions are required to return and take parameters

function print(){ //function declaration
    console.log("My name is Yuvraj");
}

// function invokation / running / calling
print();
print();

function fruitProcessor(apples, oranges){
    console.log(apples, oranges );
    const juice = `juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}
fruitProcessor(10,15);
console.log(fruitProcessor(10,15));
 

// arrow functions

// 🔺this feature was introduced in ES6
// 🔺this function is shorter and its faster to write

const canDrive = (age) =>{
    if(age>=18){
        console.log(`your are eligible to drive`);
    }
    else{
        console.log(`wait for ${18-age} years to turn 18`);
    }
}
canDrive(17);
