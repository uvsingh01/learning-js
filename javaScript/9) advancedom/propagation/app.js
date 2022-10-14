// event propagation
// Event propagation is a mechanism that defines how events propagate or travel 
// through the DOM tree to arrive at its target and what happens to it afterward.
// when we trigger an event then is generated in root of document
 
// capture phase 
// when an event is triggered the it moves downward from 
// Document
//    ⏬
// Element{html}
//    ⏬
// Element{body}
//    ⏬
// element{section}
//    ⏬
// element{p}
//    ⏬
// element{a}  this is the place where we applied the event handler


// bubble phase
// when this propagation reaches then that phase is known as target phase
// after that the event move back to its root of document

// Document
//    ⏫
// Element{html}
//    ⏫
// Element{body}
//    ⏫
// element{section}
//    ⏫
// element{p}
//    ⏫
// element{a}


// event bubbling example
let child = document.querySelector("#child");
let parent= document.querySelector("#parent");
let godFather = document.querySelector("#gp");
child.addEventListener("click",()=>alert("child clicked"));
parent.addEventListener("click",()=>alert("parent clicked"));
godFather.addEventListener("click",()=>alert("gp clicked"));


// event capturing
child.addEventListener("click",()=>alert("child clicked"),true);
parent.addEventListener("click",()=>alert("parent clicked"),true);
godFather.addEventListener("click",()=>alert("gp clicked"),true);

// event delegation
// this is the way of handling the event more efficiently. instead of adding event listener to each element of a parent element we can apply only one event listener to the parent
const list = document.querySelector("ul")
function responding(evt) {
    if (evt.path[0].className === '10')
        console.log('responding');
}

for (var i = 1; i <= 10; i++) {
    const newElement = document.createElement('li');
    newElement.textContent = "This is line " + i;
    newElement.classList.add(`${i}`);
    list.appendChild(newElement);
}