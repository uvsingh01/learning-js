const obj={
    fName:"Yuvraj",
    lName:"Singh",
    contactNo:"0123456789",
    method:function(){
        console.log("true");
    }
};


// unlike array we have to write exact name in the curly braces to retrieve the elements of objects.
// when we have to retrieve any element we do hot have to give spaces in between like arrays we only have to give exact name of the property without any specific order.
// its helpful when we call an api
const {fName,lName,contactNo} = obj;
// const (a,b,c) =obj //🔴this will throw error
console.log(fName, lName, contactNo);

// what if we want to chnage the name of variable according to us then we can do this:-
const {fName: f, lName : l, contactNo:c} = obj; //in this way we can change the property name to new variable name but obj property will remain unchanged
console.log(f,l,c);
console.log(obj);

// what if we want to give default value
const {address="Delhi", vehicle = "Mercedez", contactNo: phone=0000000000 , drunk } = obj;
// in this case address and vehicle was not available so it took the default value if not found
// and if we do not give any value then it will show undefined in this case drunk will be undefined
console.log(address, vehicle, contactNo ,drunk);

// swapping the object properties
// in this case a and b are present both globally and in the object 
let a =111;
let b=999;
const obj1 ={a:2, b:4, c:9};
// {a,b} =obj1; //this will throw error because if we reasign a variable outside an object //
// if we use curly brace like above the js will create a block scope for that's why we use curlybraces
({a,b} = obj1);//way to reassign outer variables according to the objects similar variables
console.log(a,b);

// nested objects

const fuck ={
    hours: {
        first:4,
        second:3,
    }
};

const {hours:{first:f1, second:s1}} = fuck; //this is how we retrieve object within an object
// const {first,second} =hours;
console.log(f1,s1);
// console.log(fi);