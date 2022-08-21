// optional chaining

// its a method check whether something contains something or not 

const restaurant = {
    openingHours:{
        mon:{
            open:2,
            closed:7,
        },
        tue:{
            open:9,
            closed:12,
        },
        wed:{
            open:0,
            closed:8,
        }
    },
    order(){
        console.log("your food is ordered");
    }
}

//console.log(restaurant.openingHours.thu.open);//this will throw an error 
// we can check whether the property is present or not by optional chaining
console.log(restaurant.openingHours.thu?.open); //will return undefined because thu is not present in obj


// for arrays
const days =["mon","tue","wed","thu","fri","sat","sun"];
for(const day of days){
    // console.log(day);
    console.log(restaurant.openingHours[day]?.open || `closed on ${day}`); //if we use this then it will say closed on wed because its open on 0 and zero is a falsy value
    // /instead we can use this
    console.log(restaurant.openingHours[day]?.open ?? `closed on ${day}`);
}

// for methods
console.log(restaurant.order?.() ?? "method does not exist"); //this will check whether method is there or not.
console.log(restaurant.orderPizza?.() ?? "method does not exist");