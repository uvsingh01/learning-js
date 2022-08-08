// DOM stands for Document Object Model
// structured representation of html documents. 
// allows js to access HTML elements and styles to manipulate them 

// 🔺 dom and dom methods are the part of web API's
// web API are like libbraries that browsers impliment that we can access from js code
//  API- Application Programming Interface



// 🔺

'use strict';


console.log(document.querySelector(".hello").textContent); // to select a text inside a tag 
const change = "how are you"; 
document.querySelector(".hello").textContent = change; // to modify the text inside a tag


// selector in DOM

console.log(document.querySelector('.hello').textContent);
console.log(document.getElementById("hey").textContent);
const print = document.getElementsByClassName("hello").textContent;
console.log(print);
