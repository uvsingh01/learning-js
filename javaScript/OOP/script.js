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


// 🔴constructors :- first way of creating classes
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

// 🔴ES6 classes :- second way of creating classes

class personNew {
    // constructor(firstname,lastname){
    //     this.fname = firstname;
    //     this.lname = lastname;
    // }
    constructor(firstname,lastname,year){
        this.fname = firstname;
        this.lname = lastname;
        this.year = year
    }
    // the code below will create prototype in personNew class
    display(){
        console.log(this.fname, this.lname);
    }
    static greet(){
        console.log("hi");
    }
}

// we can also use this way to create protoype
personNew.prototype.calcAge = function(){
    console.log(2022-this.year);
}

const raj = new personNew("Raj","Gupta",2000);
raj.display();
raj.calcAge();

// using classes are usually fine but its not recommended because js developers will eventually add feature that are named similar to the name of the developers methods this will result in code breakdown

// 1)classes are not hoisted
// 2)classes are first-class citizens
// 3)classes are executed in strict mode

// 🔺Getters and setters
// every objects can have getter and setter properties 
// these properties are known as accessor properties
// classes can also have setter and getter

const obj= {
    fullName:"Yuvraj Singh",
    friends:["Raj","Raunak","Paras"],

    get latest(){
        return this.friends.slice(-1);
    },
    set latest(mov){
        this.friends.push(mov);
    }
}
console.log(obj.latest);// we should call these as properties not as methods
obj.latest = "Anki";//when we use set we onnly have to declare value like when we have to put a new key value pair in obj
console.log(obj.friends);

class peeps {
    constructor(fname,lname){
        this.firstName = fname
        this.lastName = lname
    }

    get first(){
        return this.firstName;
    }
    set firstName(mov){//setter should have exactly one parameter
        this._firstName=mov;
    }
    get firstName(){
        return this._firstName;
    }
}

const Raj = new peeps("Raj","Gupta");
Raj.firstName="Raju";
console.log(Raj.first);

// 🔺static methods
// these are the methods which are linked only to constructor function and the class 

// function constructor

person.greet = function(){
    console.log("hi");
}
person.greet();
// yuvraj.greet(); //this will throw error because function greet is only bound to constructor its not in its prototype

// classes

// if we put static in from of the methods of classes then only it will be bound to the class
personNew.greet();
// raj.greet(); //this will show error beacuse greet only bound to class only


