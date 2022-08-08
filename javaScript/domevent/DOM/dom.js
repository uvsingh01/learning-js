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
    

function changeColor(){ // to manipulate dom via events
    document.getElementById('hey').style.color = 'red';
    document.querySelector("body").style.backgroundColor="yellow"; // manipulating css through events
}
// selector in DOM

document.getElementById("hey").addEventListener("click", function(){ //to manipulate dom via event listeners // use anonymous function while writing a event function
    document.getElementById('hey').style.color = "blue";
    document.querySelector("body").style.backgroundColor="black"; // manipulating css through events
});
console.log(document.querySelector('.hello').textContent);
console.log(document.getElementById("hey").textContent);
const print = document.getElementsByClassName("hello").textContent;
console.log(print);
