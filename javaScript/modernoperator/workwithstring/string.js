// Strings
// when we apply any method on a string then js will convert the string into objects in the background and apply those methods (in browser)
// proof
console.log(typeof new String("Yuvraj"));


const firstName = "Yuvraj Singh";
const collegeName = "Shyam Lal College";

// to access a character from String
console.log(firstName[0]);
console.log(collegeName[0]);
console.log("hello"[0]);

// to know the length of string
console.log(firstName.length);
console.log("12345".length);

// to know the index of paricular character
console.log(firstName.indexOf("r"));//these are case sensitive
console.log(collegeName.indexOf("a"));
console.log(collegeName.lastIndexOf("e"));
//to know the starting index of whole word then use
console.log(firstName.indexOf("Yuvraj"));


//⭕ slice method - to cut something out of string
const cutOut = firstName.slice(7);
console.log(cutOut);
const cutOff = firstName.slice(7,10); // we can also give the end index and that will we excluded
console.log(cutOff);


// sometimes we need to separate the word out of string 
console.log(firstName.slice(0, firstName.indexOf(" ")));
console.log(firstName.slice(firstName.lastIndexOf(" ")+1));

// we can define the negative begin argument
console.log(firstName.slice(-1));

//⭕ to lowercase and uppercase
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());

// to fix the jumbled cases
const newName = "YUvRaj";
const lowName = newName.toLowerCase();
const newNameCorrect  = lowName[0].toUpperCase() + lowName.slice(1);
console.log(newNameCorrect);

// compare two strings or more
// comparing two emails
const mailOne = "mr.uvsingh@gmail.com";
const mailTwo ="MR.UVSINGH@GMAIL.COM";
console.log(mailOne===mailTwo);//false
const correctMailTwo = mailTwo.toLowerCase().trim();
console.log(mailOne===correctMailTwo);//true

// replace something from string
const priceIN = "24,55₹";
const priceUS = priceIN.replace("₹", "$").replace(",",".");//this will take two parameters 1st which to replace and 2nd to whom it would replace with
console.log(priceUS);
// to replace a whole word
const announcements = "all the childrens are allowed to go washroom.childrens can have there lunch"
console.log(announcements.replace("childrens","Students"));//these are case sensitive and this will only replace the first ocuurence of that word

// alternate to replace all the words
console.log(announcements.replace(/childrens/g,"Students")); //this is known as regular expression and g is known as global

// booleans
const plane = "Airbus";
console.log(plane.includes("Air"));
console.log(plane.startsWith("Aib"));

// split - it will return an array of string
// join - this will return a string made of array containing string
const str = "I+am+a+dev";
console.log(str.split("+")); //will return an array of string
console.log(str.split("+").join(" "));//will get an array of string from split method and then join them and turn into string

//change the first letter of every name in a string
const capitalizeName = function(name){
    const names = name.split(" ");
    const newNames=[];
    for(const item of names){
        // newName.push(item[0].toUpperCase+item.slice(1));
        // other way
        console.log(item);
        newNames.push(item.replace(item[0], item[0].toUpperCase()));

    }
    // console.log(names);
    console.log(newNames.join(" "));
}

capitalizeName("yuvraj nitin raju ravi")

// padding - to hide something out or to give pattern

console.log("Yuvraj".padStart(10,"+"));
console.log(("Yuvraj".padEnd(10,"+")));

// credit card numbers hiding

const maskCreditCard = function (number) {
    const str = number+""; //to convert a number to string
    const last = str.slice(-4);///to get the last 4 digits
    return last.padStart(str.length, "*");
}
console.log(maskCreditCard(6886664826478));

// repeat - to repeat something
const message = "bad wether... all departures delayed";
console.log(message.repeat(5));

// var a;
// console.log(a);
// a=10;
// let f;
// const g = function(){
//     const a=23;
//     f=function(){
//         console.log(a*2);
//     }
// }
// g()
// console.log(f);
// var a =10

// function func() {
//     var a = 'Geeks';
    // let b = 'Geeks;
      
    // if (true) {
    //     var a = 'GeeksforGeeks'; // Legal Shadowing
    //     // var b = 'Geeks'; // Illegal Shadowing
    //     console.log(a); // It will print 'GeeksforGeeks'
    //     // console.log(b); // It will print error
    // }
    // console.log(a);
// }
// func();
// console.log(a);

// console.log(false == '0');											
// console.log(false === '0');


// function greet() {												
//     b = 'hello';												
//     // console.log(b);											
// }
// greet();
// b=10;
// var b;
// console.log(b);

// a=10;
// var a;
// console.log(a);