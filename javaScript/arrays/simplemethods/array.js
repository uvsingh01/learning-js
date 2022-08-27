// simple methods on array

// ⭕ slice method - its a way to retrieve a element from a range

const arr = ["a","b","c","d","e"];

console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log((arr.slice(1,-2)));
console.log(arr.slice()); //we can create a shallow copy of arr using slice

// ⭕ splice method- its same as slice but instead of giving new array it affects the original array
const brr =[1,2,3,4,5];
console.log(brr.splice(2));//the piece which was taken out by this method will not be available in this brr array again
console.log(brr);//remaining of above method

// ⭕ reverse method - this is used to reverse the order of element present in array and it affects the original array
const crr = ["hey","hello","hi","namaste"];
console.log(crr.reverse());
console.log(crr);//the above method affected the real array

// ⭕ concat method - this is used to join two array to create a new array
const joined = arr.concat(brr);
console.log(joined);
console.log([...arr, ...brr]);//we can do this too

// ⭕ join method - this method is used to convert element of array into strings
console.log(arr.join("+"));
console.log(brr.join());// if we do not give any paramter in join method it will copy comma from array