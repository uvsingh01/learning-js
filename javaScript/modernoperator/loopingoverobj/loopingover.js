// loop over an object 

const restaurant = {
    days : ["mon","tue","wed","thu","fri","sat","sun"],
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

// through keys
const prop = Object.keys(restaurant); //this will return an array consisting of all the keys present in the object
for(const key of Object.keys(restaurant)){
    console.log(key);
}
console.log(prop);
console.log(prop.length);//this way we can get the length of the object

// through values 
const value = Object.values(restaurant); //this will return the array of object's value
console.log(value); //will return an array of values present in object
for(const value of Object.values(restaurant)){
    console.log(value);
}

//through entire key and value pair
const entire = Object.entries(restaurant); //this will give an array with key and value pair 
console.log(entire);
for(const ent of Object.entries(restaurant)){
    console.log(ent);
}