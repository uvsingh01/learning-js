// default parameter

const arr =[];

// function expression
const flightbooking = function(name="unknown", people=1, price=200*people){//this is an es6 feature to change default parameter inside the curly braces
    // we can access arguments after its declaration like in price and cannot access before its declaration
    

    // ⭕ before es6 we used to declare default parameter like this
    // people=people || 1;
    // price = price || 200;
    
    console.log(name, people, price);
}
flightbooking();
flightbooking("Yuvraj",8);

console.log(typeof flightbooking);

