// DOM stands for Document Object Model
// structured representation of html documents. 
// allows js to access HTML elements and styles to manipulate them 

// 🔺 dom and dom methods are the part of web API's
// web API are like libraries that browsers impliment that we can access from js code
//  API- Application Programming Interface



// 🔺

'use strict';


console.log(document.querySelector(".hello").textContent); // to select a text inside a tag 
const change = "how are you"; 
document.querySelector(".hello").textContent = change; // to modify the text inside a tag
    
// events and events listener
function changeColor(){ // to manipulate dom via events
    document.getElementById('hey').style.color = 'red';
    document.querySelector("body").style.backgroundColor="yellow"; // manipulating css through events
    document.getElementById('hey').classList.remove("added"); //by DOM manipulation we can remove the css class 
    document.getElementById('hey').removeAttribute("class");// we can remove whole attribute through this method
    console.log(document.getElementById('hey'));
}


document.getElementById("hey").addEventListener("click", function(){ //to manipulate dom via event listeners // use anonymous function while writing a event function
    document.getElementById('hey').style.color = "blue";
    document.querySelector("body").style.backgroundColor="black"; // manipulating css through events
    document.getElementById('hey').classList.add("added");
    document.getElementById('hey').setAttribute("class","hello");
    
    console.log(document.getElementById('hey'));
});


// selector in DOM
console.log(document.querySelector('.hello').textContent);
console.log(document.getElementById("hey").textContent);
const print = document.getElementsByClassName("hello").textContent;
console.log(print);


//🛑 to handle any keyboard event
// keyboard events are global events they does not happpen on any specific element.
// for keyboard events we have to apply event listener for whole document 

// there are three types of event in keyboard
// keydown - happens as soon as we hit the button
// keyup = happens when we release the button
// keypress = happens when we keep pressing the button

document.addEventListener("keydown", function(e){ // e - is the event object which will give the key 
    // console.log(e);
    if(e.key == "Enter"){ // e.key will gives us the value of key that we pressed;
        document.getElementById('hey').style.color = "green";
        document.querySelector("body").style.backgroundColor="cyan";
    }
});

