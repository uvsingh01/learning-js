// OOPS

// its a programming style based on the objects
// Objects are self contained pieces / block of code;
// objects are building block of application
// objects contain properties and methods
// OOPs concept was made with the goal of organizing code, to make it more flexible
// and easier to maintain

// classes
// classes are lke bluprint from which we can create an object
// classes are a template for creating objects

// objects
// objects are the instance of the class


// 🔴4 principles of classes

// Abstraction 
// in simple words by this fundamental we can show only thing that is needed inside a class

// encapsulation
// its when we keep properties and method private

// inheritance
// making all the methods and properties of a class available to a child class

// polymorphism
// a child can overwrite a method it inherited from a paret class

// prototype
// objects are linked to a protype
// its an object which contains all the methods and properties linked to an object
// each and every fuctions are linked to property that is protoype

// prototypal inheritance
// the prototype contains all the methods and properties that are accessible by to all the objects linked to that protoype

// note: fuction.protoype is acessible
// object.__proto__ is accessible


// constructors 
// these are not any feature it is just an pattern to implement oops in javascript
const person = function(fname,lname){
    // instance properties
    this.firstname=fname;
    this.lastname=lname;
    // never do this ⚠️
    // this.display = function(){
    //     console.log(this.firstname, this.lastname);
    // }
}

const yuvraj = new person('Yuvraj','Singh');//its an instance that getting methods and properties from a class
const raunak = new person("Raunak","Sharma");

// 1. new {} is created
// 2. funnction is called, this={}
// 3. {} linked to protoype
// 4. function automatically return{}
console.log(yuvraj);
console.log(yuvraj instanceof person);


// to add something as a prototype to a constructor
// this way is best for making the efficient code
// this way we can assign a protoype to a object in 
// constructor that way it can be inherited to the instance of classes
person.prototype.display=function(){
    console.log(this.firstname, this.lastname);
}
yuvraj.display();
// console.log(Object.getPrototypeOf(yuvraj));
// console.log(yuvraj.__proto__);
console.log(yuvraj.__proto__ === person.prototype);

// to know which one is the prototype of which one
console.log(person.prototype.isPrototypeOf(yuvraj));
console.log(person.prototype.isPrototypeOf(person));//it is false because prototype is not a protoype  of constructor function it wil only available to the instance of the constructor

// to know if it has its own property or not
console.log(yuvraj.hasOwnProperty("firstname"));
console.log(yuvraj.hasOwnProperty("display"));//this was inherited from the constructor

// 