// callback functions
// when we use event listener we give callback function 


// when a function is passed as an argument in another function then the passed function is known as callbackfunction
// document.addEventListener("keydown", function (e){
//     if(e.key=="Enter"){
//         document.getElementById("hi").style.color="red";
//     }
// })


function addition(){
    console.log("add");
    console.log("hi");
}

function clo(addition){
    console.log(addition);
}
clo(addition);
// when a function returns a function then the function will be known as callbackfunctions

function a(greet){
    return function(name){
        console.log(`${greet} ${name}`);
    }
}

const message = a("hi");
message("Yuvi");
a("hello")("Yuvraj");//2nd way to call a function

// same function using arrow fn

const ab = (greet)=> (name) =>console.log(`${greet} ${name}`);
ab("hey!")("Nitin");

