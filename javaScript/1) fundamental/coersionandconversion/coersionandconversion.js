// type conversion 
// 🔴 this is tha manual feature to convert some varibles datatypes
// to make it useful with other variables

// 🔴this is known as explicit coersion

const inputYear = "2001";
const h = false;
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear)+18);
console.log(Number(h));// this will give 0 in case of false and 1 in case of true
console.log(Number("Yuvraj")); // this will give NaN (Not a Number)
console.log(typeof NaN); // this is will give number as the type of NaN 

//type coersion
// 🔴 the feature of  JS which automatically changes the 
// datatype of given variable 

// 🔴 this is known as implicit coersion

const aString = "uvsingh";
console.log(aString+43);//  thsi will give a string
console.log("43"+4); //this will give a string 
console.log("43"-4); //this will give a number
console.log("yuv"-4);// this will give NaN
let n ="1"+1; //this will concatenate a string 
n=n-1; // this will convert n to a number and then subtract it with 1
console.log(n); //this will give an number

console.log('10'-'4'-'3'-2+'5'); //this will subtract first and at the end it will concatenate a string