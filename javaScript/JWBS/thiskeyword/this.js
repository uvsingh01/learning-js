// 🛑this keyword
// special variable created for every function
// takes the value of the owner of the fucntion in which this keyword is used

// it depends on how the function is called and its value is assigned when the function is actually called

//⭕ points

//🔺 when we call method this will point towards the object that is calling a method

const uv = {
    license : function(){
        console.log(this); //this will return object
    }
}
uv.license();

const yuvi ={
}
yuvi.license = uv.license; //method borrowing  
//🔺 when we call a simple function thwn this will become undefined(strict mode) or point towards window(browser).

const calcAge= function(birthYear){
    console.log(2037-birthYear);
    console.log(this); // this will be undefined
}
calcAge(2001); 

//🔺 when we call arrow function this will point towards the outer function(known as lexical this)
// arrow function doesn't have there this keyword so they use their parent scope
const calcAgeArrow = birthYear =>{
    console.log(2037-birthYear);
    console.log(this);// this will point towards window object
}
calcAgeArrow(2001)

//🔺 when we call event listener this will point towards the element which dom attached to.

