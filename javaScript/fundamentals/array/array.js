// arrays

// 🔺arrays is a container to store multiple variable andd later we can reference them 
// 🔺unlike in java we can store different variable of different datatypes
// 🔺 two ways to declare an array

// 1st way
const friends = ["Yuvraj", "Raj", "Paras"]; //literal syntax
console.log(friends);

// 2nd way
const years = new Array(2000,2001,2002,2005,2022);
console.log(years);

// ways to access an particular element in array
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length); //to know the length of array
console.log(friends[friends.length-1]); // we can also add an expression into [] and we cannot put any statement in [];

// replace in array
friends[2] = "Paras Lal"; // we were able to change element in const array because its not a primitive datatype 
//friends = ["bob"]; //🚨 this is illegal because in this we are not reassigning a value 
console.log(friends);

// adding in array

const firstName= "Yuvi";
const arr = [firstName, "no", 34, true, friends];
arr[5] = "dddd"; //this way we can add a element too
console.log(arr);
console.log(arr.length);

const calcAge = function(year){
    return 2022-year;
}

const yr = [1990, 1967,2020];


// accessing the element in array
const age1 = calcAge(yr[0]);
const age2 = calcAge(yr[1]);
const age3 = calcAge(yr[yr.length-1]);
console.log(age1, age2, age3);

const ages = [age1,age2, age3];
console.log(typeof ages);


// important revisit output
const noth = nothing();
function nothing(){
    console.log("nice");
    return "fine";
}
const yuvi = [noth];
console.log(yuvi);

//iteration in array

for(let i=0; i<3; i++){
    console.log(yr[i]);
}

// break & continue

for(let i=0; i<3 ; i++){
    if(typeof yr[i] !== "number") continue; // this continue will check if this condition is true then it will skip the next line and iterate the loop
    console.log(typeof yr[i]);
}
 
for(let i=0; i<3; i++){
    if(typeof yr[i] !== "number"){ //if this condition becomes true then it will come out of the loop
        break;
    }
}