// setTimeoout
// its a method to call something out after some time
// its an asynchronous function
// it accepts callback functions

const tim=setTimeout(function(){
    console.log("hello");
},5000);

// setInterval
// its a method to call something out after some time agin and again
// it also accept callback functions

const int = setInterval(function(){
    console.log(new Date());
},1000);

// to stop these timers - use clearTimeout
setTimeout(function(){
    clearTimeout(int);
},8000);

// use case of timers
