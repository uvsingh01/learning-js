//rest operator
// its the same operator like spread but its used on the left side while destructuring
// there can only be one rest operator in destrucutring assignment


// Array
const [a,c,...b]=[1,2,3,4];//rest operator should be on the last of destructure because if we don't do that the js will not know when to copy rest of the values
console.log(a,b,c);
const arr = ["me","myself","others"];
const arr1 = ["fuckothers","don'tgiveashit","mindyourownfuckinwork"];
const [x,y,...z]=[...arr,...arr1];//this way we can retrieve the target values from array
console.log(x,y,z);//🔺 in array the return type of rest operator will be an array

// objects
const restaurant ={
    restoName:"Kake di Hatti",
    Menu:["DalMakhni","ShahiPaneer","ButterChicken"],
    location:"Khatte ke kone wali basti",
    hours: {
        first:4,
        second:3,
        third:3,
    }
}
// this is how we retrieve the particular object property and the rest 
const { first:fi, ...everything}=restaurant.hours;
console.log(fi,everything); 

// functions
const add =function(...numbers){//this is how to take multiple values
    let sum=0; 
    for(let i=0; i<numbers.length; i++){
        sum+=numbers[i];
    };
    console.log(sum);
}
add(1,2,3,4);
add(3,5,7,3);

const arr3 = [23,45,67];
add(...arr3); ///here we unpacking the value and in fucntion we are packing the value into an array
