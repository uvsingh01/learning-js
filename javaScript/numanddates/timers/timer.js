// setTimeoout
// its a method to call something out after some time
// its an asynchronous function
// it accepts callback functions

const tim=setTimeout(function(){
    console.log("hello");
},000);

// setInterval
// its a method to call something out after some time agin and again
// it also accept callback functions

const int = setInterval(function(){
    console.log(new Date());
},0);

// to stop these timers - use clearTimeout
setTimeout(function(){
    clearTimeout(int);
},0);

// countdown

let time=10;
let timer = setInterval(function(){
    let min =String(Math.trunc(time/60)).padStart(2,0);//we convert these into string to format them like 01:00;
    let sec=String(time%60).padStart(2,0);//we used trunc to remove the decimals from the mintues
    console.log(`${min}:${sec}`);
    
    if(time===0){
        clearInterval(timer);
    }
    time--;
},1000)

