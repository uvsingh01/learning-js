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



const person = function(fname,lname){
    this.firstname=fname;
    this.lastname=lname;
    console.log(this);
}
const yuvraj = new person('Yuvraj','Singh');
console.log(yuvraj);

person.prototype.display=function(){
    console.log(this.firstname, this.lastname);
}
yuvraj.display();

console.log(person.__proto__);