// call and apply
// we can use both of them to create a function that can be used on objects


// call method - call(object, arguments)
function printNames(add){
    console.log(`${this.fName} ${this.lName} and lives in ${add}`);
}

const obj = {
    fName:"Yuvraj",
    lName:"Singh"
}
printNames();//this will return undefined because this keyword in fn will be global and undefined in strict mode
printNames.call(obj,"Delhi");

// apply method - apply(object, [arguments, arguments])

const arr = ["Haryana"];
printNames.apply(obj,arr);


// we usually use call method because of es6 feature(spread operator)

printNames.call(obj, ...arr);

// bind method - its used when we do not have to call the function immediately
// this will return a new function
const func =printNames.bind(obj, "Punjab");
func();


const addTAX = (rate,value)=>value+value*rate;
console.log(addTAX(0.2, 100));

// we can use this in a function get a function from an existing fn
const addVAT = addTAX.bind(null, 0.3);//here its giving a new function
console.log(addVAT(200));