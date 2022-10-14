// Closures 
// closures happens automatically we cannot create it
// closures is something when a inner function has the access to the variable of its parent function even if its not in the stack
// a function will always have access to its variable environment of the execution in which it was created

const secureBooking =  function (){
    let passengerCount =0;

    return function(){
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}
const booker = secureBooking();

// in these calls
// even after the function context(secureBooking) is popped out of stack 
booker();
booker();
booker();

const g = function (){
    const a = 23;
    f = function(){
        console.log(a*2);
    }
}

g();
f();