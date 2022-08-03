// objects 

//🔺 objects is a data structure which contains multiple data 
// 🔺 its a non primitive datatypes which keeps data in key value pair
// 🔺 it is used to keep unstrutured data (unlike array we do not have to maintain order)
// 🔺 keys are also known as properties

const yuvi = { // object literal syntax
    firstName:"Yuvraj",
    lastName: "Singh",
    age: 2037-1191,
    job: "Student",
    friends: ["Raj", "Raunak", "Paras"]
}
console.log(yuvi);

// 🔺to retrieve data from the object
// if a property in not present in the object and we try to call it will show undefined

// 1) 🔺 dot notation

console.log(yuvi.lastName); //this dot notation will go inside the object and retrieve data/ value.

// 2) 🔺 bracket notation
console.log(yuvi["lastName"]); 
const nameKey = "Name";
console.log(yuvi["first"+nameKey]);// in this notation we can add any expression
console.log(yuvi["last"+nameKey]);


// very useful example of bracket notation
// const str = prompt('what do you want fro yuvi? firstName, lastName');
// console.log(yuvi.str);//this will throw undefined
// console.log(yuvi[str]);//but this will give the required value 

// if(yuvi[str]){
//     console.log(yuvi[str]);
// }
// else{
//     alert(`you entered a wrong keyword`);
// }

//🔺 to add new property 
yuvi.location = "Delhi";
yuvi["giithub"]= "uvsingh01";
console.log(yuvi);

// challenge 
// write "yuvi have 3 friends and his best friend is Raj"

console.log(`${yuvi.firstName} has ${yuvi.friends.length} friends and his bestfriend is ${yuvi.friends[0]}`);


// 🔺we can add a function in a object

// a function which is attached to its object is known as method
const uv = { // object literal syntax
    firstName:"Yuvraj",
    lastName: "Singh",
    year: 2001,
    job: "Student",
    friends: ["Raj", "Raunak", "Paras"],
    // calcAge : function (year) {   //🔺 old method
    //     return 2022-year;
    // }

    // calcAge: function(){  // 🔺 this is correct but it will violates the DRY rule (in case we change the object name then we have to change everywhere and it will become chaotic)
    //     return 2022-uv.year; // this will point to the object beacuse before . operator there is uv 
    // }
    calcAge: function(){
        this.age = 2022-this.year;  // this will create a new property in th object
        return 2022-this.year; // this will point to the object beacuse before . operator there is uv
        // its good practise to always return from methods
    },
    getSummary : function(){
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job},  he has ${this.drive?"a":"no"} driver's license`;
    }
}
// console.log(uv.calcAge(2001)); //its not ideal to write year everywhere and it voilates DRY that's why we use this keyword
console.log(uv.calcAge());
console.log(uv.age);
console.log(uv.getSummary());


