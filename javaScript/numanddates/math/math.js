// Maths

// to find square root 
console.log(Math.sqrt(25));
console.log(25**(1/2));//both are same thing but just an elaboration

// to find max and min out of numbers
// max
const arr=[1,2,3,4,5,6];
console.log(Math.max(...arr));
console.log(Math.max(2,5,3,7,9));
// min
console.log(Math.min(...arr));
console.log(Math.min(2,5,3,7,9));

// to find the pi value
console.log(Math.PI);

// to get the random number out of a range

console.log(Math.floor(Math.random()*10)+1);//it will give the random value between 1to6

const randomInt = (min,max)=>Math.floor(Math.random()*(max-min)+1)+min;
console.log(randomInt(0,10));

// rounding integers
// all these methods does type coersion
console.log(Math.round(23.3));
console.log(Math.round('23.9'));

console.log(Math.ceil(25.4));
console.log(Math.ceil('25.1'));

console.log(Math.floor(25.4));
console.log(Math.floor('25.1'));

console.log(Math.trunc(29.3));

// difference between trunc and floor
console.log(Math.floor(-25.1));
console.log(Math.trunc(-25.1));

// rounding decimals
console.log((2.7).toFixed(0));
console.log(((2.737).toFixed(2)));//above two will always return string convert it into number then we can do log like below
console.log(+((2.7345).toFixed(3)));