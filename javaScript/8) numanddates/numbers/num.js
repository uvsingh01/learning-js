// numbers

// base 10 -0to9 1/10=0.1  3/10 =3.3333
// binary base 2 - 01

// internally js stores numbers in binary base 2 -0,1
// they are certain numbers that are difficult to represent in base 2 that are fraction
console.log((23===23.0));
console.log(0.1+0.2); //this is an error

// to convert a string to number

console.log(Number("23"));
console.log(+"23");

// parse a number from a string
console.log(Number.parseInt("30ldsf455"));
console.log(Number.parseInt("tfg444"));//this will give NaN

// parse float
console.log(Number.parseFloat("2.444rem"));
console.log(Number.parseInt(2.444));

// check of a value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN(+"20X"));

// check if value is a number or not
console.log(Number.isFinite(20));
console.log(Number.isFinite("20"));
console.log(Number.isInteger(23.0));

const arr=[3, 9, 2, 3, 1, 7, 2, 3, 5];

// const array = arr.filter(item=>item!=3);
// console.log(array);