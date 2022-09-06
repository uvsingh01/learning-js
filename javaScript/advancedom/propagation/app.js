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

